import React, { Suspense, use } from 'react';
import { getTimeline } from './components/timeline';
import { getSortedPostsData } from './blog/getSortedPostsData';
import dayjs from 'dayjs';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react'
import PROFILE_PIC from './images/profile_pic_8x.jpeg'
import _ from 'lodash';
import Link from 'next/link';
import { ContactSection } from './components/ContactSection';
import { BlogPostPreview } from './components/BlogPostPreview';
import { Clamped } from './components/Clamped';
import { TimelineProject } from './components/TimelineProject';
import { BlogPreviewPlaceholder } from './components/BlogPreviewPlaceholder';
import { RevealOnScroll } from './components/Motion';

const LatestBlogPreview = async () => {
  const blogPosts = await getSortedPostsData()
  const latestBlogPost = blogPosts.reduce((prev, current) => dayjs(prev.date).isAfter(dayjs(current.date)) ? prev : current)
  return (
    <BlogPostPreview blogPost={latestBlogPost} />
  )
}

const TimelineDisplay = async () => {
  const timeline = await getTimeline()
  return (
    <>
      {
        timeline.map((item, index) => (
          <div key={index} className="mb-12 relative pl-8 border-l border-gray-800">
            <RevealOnScroll>
              {item.image && (
                <div className="mb-4">
                  <Image
                    src={item.image}
                    alt={`${item.company} logo`}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                </div>
              )}
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-400" />
              <div className="mb-1 text-sm text-blue-400">{item.year}</div>
              <h4 className="text-xl font-semibold mb-2">{item.role}</h4>
              <div className="text-gray-400 mb-2">{item.company}</div>
              <Clamped Content={item.description} />

              {item.projects && item.projects.map(project => <TimelineProject project={project} key={project.id} />)}
            </RevealOnScroll>
          </div>
        ))
      }
    </>
  )
}

export default async function Page() {
  return (
    <div className="min-h-screen">
      <main className="pt-24 pb-12 z-10 relative">
        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center" >
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Full-Stack Engineer
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Learn, code, grow
                </span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                After a brief career in finance, I stumbled into tech following my passion for code. Over the past {dayjs().diff(dayjs("01/06/2016"), "year")}+ years,
                I've been building products on the web across various industries. Here I share my journey, learnings, and projects.
                <br />
                <br />
                When not coding, my default mode is 🏊 🚴 🏃
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/hlminh2000" className="p-2 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/le-minh-ha-57644440/" className="p-2 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 relative rotate-3">
                <div className="absolute inset-0 transform rotate-3 p-4 drop-shadow-sm">
                  <Image
                    src={PROFILE_PIC}
                    alt="Minh Ha"
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl -blur-2xl" />
            </div>
          </div>
        </section>


        {/* Latest Blog Post Section */}
        <section id="blog" className="max-w-4xl mx-auto px-6 mb-24">

          <h3 className="text-2xl font-bold mb-8">Latest Post</h3>
          <Suspense fallback={
            <BlogPreviewPlaceholder />
          }>
            <LatestBlogPreview />
          </Suspense>

          <article className="mt-4 h-12 bg-gradient-to-b from-gray-800/50 via-gray-800/10 to-gray-900/0 rounded-xl p-6 flex flex-col md:flex-row gap-6 relative overflow-hidden">
            <div className="md:w-1/3 bg-gradient-to-b from-gray-700/20 via-gray-700/5 h-6 rounded-lg"></div>
            <div className="md:w-2/3 space-y-4 ">
              <div className="h-6 rounded w-3/4 bg-gradient-to-b from-gray-700/20 via-gray-700/5"></div>
              <div className="h-4 rounded w-1/2"></div>
              <div className="h-4 rounded w-1/4"></div>
            </div>
            {/* <div className="absolute  inset-0 bg-gradient-to-b from-gray-800/50 via-gray-800/50 to-gray-900/50"></div> */}
          </article>
          <div className="mt-2 text-center">
            <Link href="/blog" className="text-blue-400 hover:underline">
              View all blog posts
            </Link>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="max-w-4xl mx-auto px-6 mb-24 z-100">
          <h3 className="text-2xl font-bold mb-12">Where I've been</h3>
          <div className="relative">
            <Suspense>
              <TimelineDisplay />
            </Suspense>
            <ContactSection />
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className="max-w-2xl mx-auto px-6">
          <div className="bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </section> */}
      </main>
    </div>
  )
}