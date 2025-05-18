
import ICGC_ARGO from '../../images/ICGC-ARGO.png'
import VRETTA_WHITE_LOGO from '../../images/Vretta_White_Logo.png'
import Polymath_Logo from '../../images/Polymath_Logo.svg'
import Quantropi_Logo from '../../images/Quantropi-Logo_RGB.png'
import PPK_Extension from '../../images/ppk_extension.png'
import Onevest_Logo from '../../images/onevest_logo.jpeg'

import OICR_description from './OICR_description.md';
import Vretta_description from './Vretta_description.md';
import Dtab_description from './Dtab_description.md';
import MathemaTIC_description from './MathemaTIC_description.md';
import ICGC_ARGO_description from './ICGC_ARGO_description.md';
import Kids_First_description from './Kids_First_description.md';
import Polymath_description from './Polymath_description.md';
import Polymesh_Onboarding_description from './Polymesh_Onboarding_description.md';
import Quantropi_description from './Quantropi_description.md';
import Onevest_description from './Onevest_description.md';

import { StaticImageData } from 'next/image'

export type Timeline = {
  year: string,
  role: string,
  company: string,
  description: React.ReactNode,
  image?: string | StaticImageData,
  projects: {
    id: number | string,
    image?: string | StaticImageData,
    name: string,
    description: React.ReactNode,
    technologies: string[],
    highlights: string[],
    link: string
  }[]
}[]

export const getTimeline = async (): Promise<Timeline> => [
  {
    year: "Mar 2025 ~ Present",
    role: "Senior Software Developer",
    company: "Onevest",
    image: Onevest_Logo,
    description: <Onevest_description />,
    projects: [],
  },
  {
    year: "Mar 2022 ~ Mar 2025",
    role: "Senior Fullstack Developer",
    company: "Quantropi Inc.",
    image: Quantropi_Logo,
    description: <Quantropi_description />,
    projects: [
      {
        id: crypto.randomUUID(),
        name: "QiSpace SEQUR PPK Generator",
        description: `
          A browser extension to help Palo Alto Networks firewall administrators generate and share secret keys across multiple firewall instances.
          The extension securely generates preshared keys seeded by true quantum-random numbers, and locally stores them in an ephemeral vault
          to be shared across multiple firewall instances.
          `,
        technologies: [
          "React", "TypeScript", "Plasmo"
        ],
        image: PPK_Extension,
        highlights: [
          "Started as a year-end experimental project, I took a lead this project from concept to production",
          "Tightly integrated with Palo Alto's firewall management interface for secret key sharing",
          "Designed and implemented cryptographically secure transfer and ephemeral storage of secret keys",
          "Promoted by Palo Alto Networks as a partner solution for firewall administrators",
        ],
        link: "https://www.quantropi.com/quantropi-partners-with-palo-alto-networks/"
      },
      {
        id: crypto.randomUUID(),
        name: "Multi-Region Deployment of QiSpace Enterprise",
        description: `
          To support a collaboration with Palo Alto Networks, our product QiSpace Enterprise needed to be deployable across multiple regions.
          After evaluating various options, I proactively proposed and implemented a solution on GCP that spans three 
          Kubernetes clusters across three regions, securing our ongoing collaboration.
          `,
        technologies: [
          "Kubernetes", "Helm", "Docker", "GCP", "Node.js", "Redis", "PostgreSQL"
        ],
        highlights: [
          "Proactively designed and proposed the architecture",
          "Eliminated the need to hire a dedicated DevOps engineer",
          "Oversaw the implementation of special API spec for entropy service",
          "Resulted in securing ongoing collaboration with Palo Alto Networks",
        ],
        link: "https://chromewebstore.google.com/detail/qispace-sequr-ppk-generat/iebonmkoaponlbagpindbgdgclkagkah?hl=en"
      }
    ]
  },
  {
    year: "Jan 2021 ~ Mar 2022",
    role: "Senior Frontend Developer",
    company: "Polymath Inc.",
    image: Polymath_Logo,
    description: <Polymath_description />,
    projects: [
      {
        id: crypto.randomUUID(),
        name: "Onboarding Integration Service",
        description: <Polymesh_Onboarding_description />,
        technologies: [
          "React", "TypeScript", "Node.js", "Serverless", "AWS", "SNS", "SQS"
        ],
        highlights: [
          "Designed and developed a robust data-processing pipeline to handle onboarding requests",
          "Parallel processing of concurrent onboarding requests while maintaining order of operations for each",
          "Robust against external service outages and blockchain network issues",
        ],
        link: "https://info.polymath.network/blog/onboarding-integration-service"
      }
    ]
  },
  {
    year: "Jan 2018 ~ Jan 2021",
    role: "Full Stack Developer",
    company: "Ontario Institute for Cancer Research (OICR)",
    image: "https://oicr.on.ca/wp-content/themes/oicr/assets/img/logo-white.svg",
    description: <OICR_description />,
    projects: [
      {
        id: crypto.randomUUID(),
        name: "ICGC ARGO Data Platform",
        image: ICGC_ARGO,
        description: <ICGC_ARGO_description />,
        technologies: [
          "React", "TypeScript", "Next.JS", "Node.js", "GraphQL", "Apollo", "Elasticsearch", "Kubernetes", "Docker", "Kafka",
          "Ansible"
        ],
        highlights: [
          "Drove the adoption of a component-driven workflow, creating a custom reusable UI component system",
          "Advocated for and implemented a GraphQL API to wrap microservices, significantly reducing API calls and frontend complexity",
          "Designed and developed a real-time data processing pipeline on Kafka and Elasticsearch",
        ],
        link: "https://platform.icgc-argo.org/"
      },
      {
        id: crypto.randomUUID(),
        name: "Kids First Data Portal",
        description: <Kids_First_description />,
        technologies: [
          "React", "Flow", "Node.js", "GraphQL", "Elasticsearch", "AWS", "Terraform"
        ],
        highlights: [
          "Lead the development of the frontend and search API of the portal",
          "Main maintainer of Arrager, an open-source data-portal generation framework",
        ],
        link: "https://github.com/kids-first/kf-portal-ui"
      }
    ]
  },
  {
    year: "April 2016 ~ Jan 2018",
    role: "Software Developer",
    company: "Vretta Inc.",
    image: VRETTA_WHITE_LOGO,
    description: <Vretta_description />,
    projects: [
      {
        id: crypto.randomUUID(),
        name: "Dtab mobile assessment platform",
        image: "https://images.ctfassets.net/ntc8eg990zdt/4crkOqY84sNpsQ2kBqoDWz/77e2a5693d09ad03f7dac100b7c22071/DTAB_Cover_Mockup_1.svg",
        description: <Dtab_description />,
        technologies: ["Haxe", "Node.js", "MySQL", "PouchDB"],
        highlights: [
          "Interactive game development",
          "Offline data collection and submission",
          "Interaction logging and replay system"
        ],
        link: "https://www.vretta.com/marketplace/dtab/"
      },
      {
        id: crypto.randomUUID(),
        name: "MathemaTIC learning platform",
        image: "https://images.ctfassets.net/ntc8eg990zdt/5SbWIK9gljyKggFZhWR40t/354f7794cb6ab2d27715054956e969b8/Mathematic_Cover_mockup_1.svg",
        description: <MathemaTIC_description />,
        technologies: ["Haxe"],
        highlights: [
          "Interactive game development",
          "Lead the innovation in re-playable interactive data collection",
        ],
        link: "https://mathematic.org/"
      },
    ]
  }
];
