
import dayjs from "dayjs"
import Image from "next/image"
import { getArticleBySlug, getSortedPostsData } from "../../getSortedPostsData"
import { Suspense } from "react"
import { notFound } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"
import { Author } from "next/dist/lib/metadata/types/metadata-types"
import { Tag } from "@/components/ui/tag"


export async function generateStaticParams() {
  return (await getSortedPostsData()).map(post => ({ slug: post.slug }))
}

export async function generateMetadata(
  { params, searchParams }: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = await params

  const articleMeta = await getArticleBySlug(slug)
  if (!articleMeta) return notFound()

  const meta: Metadata = {
    title: `Minh Ha | ${articleMeta.title}`,
    description: articleMeta.preview,
    authors: [{ name: "Minh Ha", url: "https://minhified.codes" }],
  }

  return {
    ...meta,
    openGraph: {
      authors: new URL("https://minhified.codes"),
      type: "article",
      title: meta.title || "",
      description: meta.description || "",
      images: [...articleMeta.image ? [articleMeta.image.src] : []],
    },
  }
}

const ArticleMetaDisplay = async ({ slug }: { slug: string }) => {
  const articleMeta = await getArticleBySlug(slug)
  if (!articleMeta) return null
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">{articleMeta.title}</h1>
      <div className="text-blue-600 mb-4">{dayjs(articleMeta.date).format("DD/MM/YYYY")}</div>
      <div className="mb-4">{articleMeta.preview}</div>
      <div className="mb-4 flex flex-wrap gap-2">{(articleMeta.tags || []).map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}</div>

      {/* @ts-ignore */}
      <Image src={articleMeta.image}
        alt={articleMeta.title}
        className="rounded-lg object-cover w-full h-52 sm:h-72 md:h-80 lg:h-96 bg-center drop-shadow-lg" />
    </>
  )
}

const Post = async ({ slug }: { slug: string }) => {
  const PostComponent = (await import(`../${slug}/post.mdx`).catch(err => null))?.default
  if (!PostComponent) return notFound()
  return <PostComponent />
}

export default async function ({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  return (
    <article className="max-w-3xl mx-auto md:px-6 sm:px-0 prose prose-invert mt-14 lg:mt-24 relative">
      <div className="rounded-lg bg-gray-900/70 p-4 sm:p-6 md:p-8">
        <Suspense fallback={
          <>
            <div className="bg-gray-800/50 text-4xl font-bold mb-8 h-14" />
            <div className="bg-gray-800/50 text-blue-600 mb-4 h-7" />
            <div className="bg-gray-800/50 mb-4 h-7" />
            <div className="bg-gray-800/50 rounded-lg object-cover w-full h-96 bg-center drop-shadow-lg" />
          </>
        }>
          <ArticleMetaDisplay slug={slug} />
          <Post slug={slug} />
        </Suspense>
      </div>
    </article>
  )
}
