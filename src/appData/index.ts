// Data for portfolio
import SpotNowCover from '@/assets/images/projects/spotnow.jpg'
import { PersonalProject } from '@/lib/types'
import {
  AngularIcon,
  AspNetIcon,
  AwsIcon,
  BlazorIcon,
  CodeigniterIcon,
  CSharpIcon,
  DockerIcon,
  DotNetIcon,
  FirebaseIcon,
  JavaScriptIcon,
  LaravelIcon,
  LinuxIcon,
  MariaDBIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SQLIcon,
  SupabaseIcon,
  SymfonyIcon,
  TypescriptIcon,
  WindowsIcon,
} from '../utils/icons'

export const experiences = [
  {
    role: 'Web Development Senior Specialist',
    company: 'Trends Group Inc.',
    companylogo: '',
    date: 'October 2026 – Present',
    desc: 'Senior specialist in the Corporate IT Application Delivery and Support Group, delivering web, business, and enterprise workflow applications. Provide technical leadership and delivery oversight while driving secure, AI-assisted development practices across the team.',
    descBullets: [
      'Design, develop, and enhance web applications, websites, and internal business systems that meet performance, scalability, and maintainability standards.',
      'Configure, customize, and integrate ITSM and workflow-based enterprise platforms, turning business processes into automation and self-service features.',
      'Build and maintain integrations with third-party and enterprise systems through APIs and middleware.',
      'Apply approved AI-assisted development tools across requirements, design, coding, testing, and documentation, validating every output for accuracy and security.',
      'Mentor developers and oversee team deliverables, including estimation, code reviews, defect resolution, and escalation of delivery risks.',
      'Drive quality and continuous improvement through secure coding, vulnerability remediation, production troubleshooting, and root cause analysis.',
    ],
  },
  {
    role: 'FullStack Developer',
    company: 'Zen Business Solution Inc. (Part-time)',
    companylogo: '',
    date: 'October 2025 – Present',
    desc: 'Develop, maintain, and optimize server-side applications as a part-time backend developer. Responsible for building scalable architectures, integrating third-party services, and staying current with emerging AI-related tools and frameworks.',
    descBullets: [
      'Develop, maintain, and optimize server-side applications using Next.js, Firebase and other frameworks.',
      'Design and implement scalable back-end architectures that ensure high performance and security.',
      'Integrate APIs and third-party services to enhance product functionality.',
      'Collaborate closely with front-end developers, product managers, and designers to deliver seamless user experiences.',
      'Monitor, debug, and improve system performance, ensuring reliability and scalability.',
      'Stay up-to-date with emerging technologies, particularly AI-related tools and frameworks.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Open Point (MySite)',
    companylogo: '',
    date: 'June 2025 – October 2026',
    desc: 'Deliver scalable full-stack web applications from design through deployment. Contribute to code reviews, feature testing, and architectural planning while upholding quality, performance, and security best practices.',
    descBullets: [
      'Develop key features and services from design through to test and deploy, using PHP, JavaScript (jQuery, Vue, native), and SQL.',
      'Provide technical input to product support, assisting with critical events including triage, systems analysis and postmortem activities.',
      'Assist in code review, feature testing and adhering to quality, performance and security best practice.',
      'Collaborate and contribute expertise with the team when planning architectural direction for new features.',
      'Provide estimations for well defined, well scoped bodies of work.',
      'Attend developer meetings and stand-ups and contribute with knowledge and experience.',
      'Troubleshoot and debug software issues.',
    ],
  },
  {
    role: 'Senior Developer',
    company: 'Rococo Global Technologies Corporation',
    companylogo: '',
    date: 'January 2023 – June 2025',
    desc: 'After demonstrating strong problem-solving skills, technical expertise, and leadership capabilities as a Mid Developer, I was promoted to Senior Developer. In this role, I have taken on greater responsibilities in system architecture, software development lifecycle management, and team mentorship while ensuring the delivery of high-quality, scalable applications.',
    descBullets: [
      'Led the development of scalable web and mobile applications using Laravel, React.js, Node.js, and React Native.',
      'Designed and optimized backend services, improving performance, security, and scalability.',
      'Played a key role in project decision-making and architectural improvements.',
      'Collaborated with cross-functional teams to ensure seamless project execution.',
      'Took ownership of key projects, overseeing end-to-end development and deployment.',
    ],
  },
  {
    role: 'Developer',
    company: 'Bounty Fresh Inc.',
    companylogo: '',
    date: 'May 2019 – December 2022',
    desc: 'Developed and maintained an in-house project to streamline company operations, enhancing efficiency and automation. Managed System Support across multiple departments while independently handling new projects from planning to deployment.',
    descBullets: [
      'Designed and implemented internal tools to automate reports and improve workflow efficiency.',
      'Managed and executed new projects independently, overseeing development, and optimization.',
      'Enhanced and optimized existing processes across multiple departments, reducing manual effort and improving productivity.',
      'Provided System Support, resolving technical issues and ensuring system stability across teams.',
      'Collaborated with stakeholders to identify and develop tailored solutions for department-specific needs.',
    ],
  },
  {
    role: 'Web Application Developer Intern',
    company: 'GICF Inc.',
    companylogo: '',
    date: 'November 2018 – February 2019',
    desc: 'Worked as an intern supporting the development and maintenance of internal systems for a BPO company. Provided system support for existing web applications and contributed to new tools aimed at improving operational efficiency.',
    descBullets: [
      'Handled system support for existing internal applications, assisting in troubleshooting and maintenance.',
      'Developed a Daily Time Record (DTR) system specifically for interns to streamline attendance tracking.',
      'Contributed to small-scale tools and web projects that supported the day-to-day operations of the BPO team.',
      'Gained hands-on experience in real-world development environments and collaborative workflows.',
    ],
  },
]

// Personal Projects
// To add a cover image, put it in src/assets/images/projects/, import it at the top of this file,
// and set `cover` to the import. `status`, `highlights`, `cover`, and `livePreview` are optional.
export const projects: PersonalProject[] = [
  {
    title: 'SPOTNow',
    tagline: 'Community Road Hazard Reporting App',
    year: '2026 – Present',
    status: 'In Development',
    desc: 'A community-powered app for reporting and confirming road hazards such as floods, potholes, and fallen wires, piloting in Naic, Cavite. Phase 1 covers the mobile app, REST API, moderation portal, and public website.',
    highlights: [
      'Cross-platform iOS and Android app built with React Native and Expo, with photo reports, a hazard map, and nearby alerts.',
      'ASP.NET Core REST API on .NET 10 with MariaDB spatial queries for location-based feeds and alerts.',
      'Community verification where reports move from unverified to confirmed as nearby people vote.',
      'Blazor moderation portal, Docker-based deployment, and GitHub Actions CI with integration tests against a real MariaDB container.',
    ],
    techStack: ['.NET 10', 'ASP.NET Core', 'Blazor', 'MariaDB', 'React Native', 'Expo', 'Docker'],
    cover: SpotNowCover,
    livePreview: 'https://spot-now.app',
  },
  {
    title: 'IamCaaarll Portfolio',
    tagline: 'Personal Portfolio Website',
    year: '2026',
    status: 'Live',
    desc: 'My personal portfolio showcasing my experience, skills, and services, built as a statically exported Next.js site and deployed to GitHub Pages.',
    highlights: [
      'Four switchable color themes (Light, Dark, Aqua, Retro) powered by CSS variables and Tailwind CSS v4.',
      'Data-driven sections, so experience, projects, skills, and services are updated from a single file.',
      'Static export with SEO metadata, sitemap, and Open Graph images.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
    livePreview: 'https://cldelacruz-dev.github.io/IamCaaarll/',
  },
]

// Service Data
export const serviceData = [
  {
    icon: DotNetIcon,
    title: '.NET Development',
    shortDescription:
      'Building secure, scalable business applications with .NET — from ASP.NET Core Web APIs to interactive Blazor web apps ready for production.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription:
      'Building component-driven, performant front-end applications with clean architecture, reusable patterns, and intuitive user interfaces.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription:
      'Designing robust, event-driven server-side solutions with REST APIs, real-time features, and optimized database integrations.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription:
      'Delivering full-stack web applications with SSR, SSG, and API routes — optimized for performance, SEO, and production-grade scalability.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription:
      'Writing strongly-typed, maintainable codebases that catch bugs early and scale confidently across large teams and complex projects.',
  },
  {
    icon: AwsIcon,
    title: 'AWS Cloud Services',
    shortDescription:
      'Deploying and managing cloud infrastructure on AWS — leveraging EC2, S3, and scalable services to keep applications reliable and production-ready.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Linux',
    icon: LinuxIcon,
  },
  {
    name: 'Windows',
    icon: WindowsIcon,
  },
  {
    name: 'AWS',
    icon: AwsIcon,
  },
  {
    name: 'Docker',
    icon: DockerIcon,
  },
  {
    name: 'Firebase',
    icon: FirebaseIcon,
  },
  {
    name: 'SQL/MySQL',
    icon: SQLIcon,
  },
  {
    name: 'MariaDB',
    icon: MariaDBIcon,
  },
  {
    name: 'Supabase',
    icon: SupabaseIcon,
  },
  {
    name: 'Laravel',
    icon: LaravelIcon,
  },
  {
    name: 'Symfony',
    icon: SymfonyIcon,
  },
  {
    name: 'CodeIgniter',
    icon: CodeigniterIcon,
  },
  {
    name: 'ASP.NET',
    icon: AspNetIcon,
  },
  {
    name: '.NET',
    icon: DotNetIcon,
  },
  {
    name: 'Blazor',
    icon: BlazorIcon,
  },
  {
    name: 'Angular',
    icon: AngularIcon,
  },
  {
    name: 'C#',
    icon: CSharpIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]
