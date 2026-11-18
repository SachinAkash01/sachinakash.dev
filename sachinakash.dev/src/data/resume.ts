/** Résumé content, kept in step with the downloadable CV (public/documents/sachin-akash-resume.pdf). */

import { projects } from "./portfolio";

export const resumeProfile =
  "Front-end focused Software Engineer with 2+ years of professional experience building production web applications with React, TypeScript and modern JavaScript. Delivered travel booking platforms and e-commerce stores end to end — search and filtering, multi-step booking flows, carts, checkout and payment gateway integration — with a focus on accessibility, performance and responsive design. Experience at WSO2 on REST/OpenAPI tooling and product UI gives a strong understanding of how front ends consume back-end services. First Class BSc (Hons) in Computer Science & Software Engineering; comfortable working with product owners, clients and cross-functional teams to turn business requirements into reliable user interfaces.";

export const resumeSkills = [
  {
    label: "Languages",
    items: "TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS/Sass, Java, SQL",
  },
  {
    label: "Front end",
    items:
      "React (incl. React 19), React Router, TanStack Router/Start, Redux, Vite, Tailwind CSS, MUI, Styled Components, Bootstrap, Framer Motion, micro front-end architecture, Module Federation",
  },
  {
    label: "APIs & back end",
    items:
      "REST APIs, asynchronous data handling, OpenAPI/Swagger, Postman, Node.js, Express, payment gateways, MongoDB, MySQL, PostgreSQL",
  },
  {
    label: "Testing & quality",
    items:
      "Jest, Cypress, Selenium, TestNG, Postman, Swagger, ESLint, static code analysis, code reviews",
  },
  {
    label: "DevOps & cloud",
    items:
      "Git, GitHub, Git-based CI/CD (Vercel), serverless functions, Azure File Share, AWS fundamentals",
  },
  {
    label: "Practices",
    items:
      "Web accessibility (keyboard navigation, reduced motion, semantic markup), web performance (code splitting, lazy loading, image optimisation), responsive / mobile-first design, SEO & structured data, Agile, Figma, MS Office",
  },
];

export const resumeExperience = [
  {
    role: "Co-Founder & Full-Stack Engineer",
    company: "Evantra Labs, Colombo",
    period: "Apr 2026 – Present",
    highlights: [
      "Co-founded a software studio and delivered 8 production websites and web applications for clients in travel, e-commerce, finance, education and events, using React, TypeScript and Tailwind CSS.",
      "Built end-to-end booking and e-commerce workflows: trip search and filtering, multi-step trip planners, product catalogues, shopping carts, checkout flows and online payment gateway integration.",
      "Integrated front ends with REST APIs, serverless email endpoints, payment gateways and third-party services, handling asynchronous data, form validation and bot protection (Cloudflare Turnstile).",
      "Built reusable UI components and data-driven layouts with a focus on accessibility (keyboard navigation, reduced-motion support) and performance (code-split routes, lazy loading, WebP images).",
      "Owned the full delivery lifecycle — gathering requirements with clients, technical design, implementation, testing, Git-based continuous deployment to Vercel and ongoing maintenance.",
    ],
  },
  {
    role: "Software Engineer",
    company: "WSO2, Colombo",
    period: "Oct 2024 – Dec 2025",
    highlights: [
      "Improved the product UI of Devant (WSO2's integration platform): refined component views, setup guides, configuration panels and login/sign-up flows, improved architecture-diagram reliability, and standardised labels, headers and navigation behaviour.",
      "Designed and shipped features across the Ballerina HTTP, OpenAPI, JSON Schema and FTP modules, including relaxed data binding for generated HTTP clients and content-aware FTP listeners with advanced file selection.",
      "Made the OpenAPI and connector toolchain more robust by fixing edge-case generation issues (64-bit integers, special-character paths, port resolution) and resolving major test failures for patch releases.",
      "Led quality work on the Alfresco connector — regeneration, data-binding fixes and testing against live and mock servers — and implemented static code analysis rules across several standard library modules.",
      "Rewrote and reviewed technical documentation (quickstart and deployment guides, Ballerina Learn pages, package READMEs), and helped debug internal build, test and release issues.",
      "Mentored interns through onboarding projects, debugging and the team's connector development guidelines.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "WSO2, Colombo",
    period: "Aug 2023 – Jan 2024",
    highlights: [
      "Designed and integrated constraint and hypermedia (HATEOAS) support into the Ballerina OpenAPI tool (Java), so generated OpenAPI specifications accurately reflect validation rules and REST links.",
      "Helped restructure the Ballerina-to-OpenAPI codebase into a component-based architecture, improving modularity and maintainability, working with internal teams to fit existing development workflows.",
    ],
  },
];

export type ResumeProject = {
  name: string;
  /** Case study slug on this site, when there is one. */
  slug?: string;
  url: string;
  urlLabel: string;
  period: string;
  highlights: string[];
  stack: string;
};

export const resumeProjects: ResumeProject[] = [
  {
    name: "365 Lanka Holidays — Travel Website & Booking Platform",
    slug: "365-lanka-holidays",
    url: "https://365lankaholidays.com/",
    urlLabel: "365lankaholidays.com",
    period: "Oct 2026",
    highlights: [
      "Trip finder filtering tours by duration, theme, budget and season; 11 day-by-day itineraries with animated route maps and prices in USD and LKR.",
      'Online booking flow (date and package selection through to checkout) with a "book now, pay later" option; React prototype converted into a custom WordPress theme.',
    ],
    stack:
      "React, Vite, JavaScript (ES6+), React Router, CSS3, SVG, WordPress, WP Travel Engine, Git",
  },
  {
    name: "T-tree Lanka Holidays — Travel & Tourism Website",
    slug: "ttree-lanka-holidays",
    url: "https://www.ttreelankaholidays.com/",
    urlLabel: "ttreelankaholidays.com",
    period: "Oct 2026 – Present",
    highlights: [
      "Multi-step tailor-made trip planner; 12 tour packages and 27 destination guides with search, filtering and an interactive route map.",
      "Validated enquiry and quote forms (international phone input, custom date picker) posting to a serverless email endpoint; code-split routes, lazy loading and structured data for SEO.",
    ],
    stack:
      "React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, React Router, Vercel serverless functions, Resend",
  },
  {
    name: "Sheree's Cakes — E-Commerce Platform",
    slug: "sherees-cakes",
    url: "https://www.shereescakes.lk/",
    urlLabel: "shereescakes.lk",
    period: "May 2026 – Jul 2026",
    highlights: [
      "Product catalogue with search and filtering, cart with quantity management, secure checkout with online payment gateway, delivery and in-store pickup options.",
      "Automated order and enquiry emails, bot protection at checkout and continuous delivery on Vercel.",
    ],
    stack:
      "React, TypeScript, TanStack, Tailwind CSS, Node.js, Resend API, Cloudflare Turnstile, Vercel",
  },
  {
    name: "Quaso — E-Commerce Website for a Croissant Bakery",
    slug: "quaso",
    url: "https://quasolk.vercel.app/",
    urlLabel: "quasolk.vercel.app",
    period: "Oct 2026 – Present",
    highlights: [
      "Complete ordering flow: product search, cart drawer, delivery or pickup with zone-based fees, and checkout with order numbers and WhatsApp/email confirmation.",
      "Interactive drag-to-spin product hero, swipeable carousels, scroll restoration and layouts tuned for laptops, large monitors and phones.",
    ],
    stack:
      "React 19, TypeScript, Vite, React Router, Motion, modern CSS, ESLint, Vercel",
  },
  {
    name: "Funk Island — Official Band Website",
    slug: "funk-island",
    url: "https://dev.funkislandmusic.com/",
    urlLabel: "dev.funkislandmusic.com",
    period: "Sep 2026 – Oct 2026",
    highlights: [
      "Server-rendered React app with per-page SEO and structured data; built-in accessibility (keyboard navigation, reduced-motion support, touch-friendly controls) and a mobile-first enquiry/booking flow.",
    ],
    stack:
      "React 19, TypeScript, TanStack Start, TanStack Router, Vite, Tailwind CSS v4, Vercel",
  },
  {
    name: "iServeSL — Distributed Chatbot Platform for Public Services",
    url: "https://github.com/iServeSL",
    urlLabel: "github.com/iServeSL",
    period: "Sep 2023 – Apr 2024",
    highlights: [
      "Centralised web application giving citizens online access to government services with real-time chatbot support, built on a distributed microservice architecture.",
    ],
    stack:
      "React, Tailwind CSS, Node.js, Ballerina, Python, Rasa, MongoDB, Swagger, Selenium",
  },
];

/**
 * Every project on the site, in site order, so each one links to its case
 * study. Projects in the CV use the CV wording; the rest use the case study
 * summary. CV projects without a case study (iServeSL) follow at the end.
 */
export const allResumeProjects: ResumeProject[] = [
  ...projects.map(
    (project) =>
      resumeProjects.find((item) => item.slug === project.slug) ?? {
        name: project.title,
        slug: project.slug,
        url: project.url,
        urlLabel: new URL(project.url).hostname.replace(/^www\./, ""),
        period: project.year,
        highlights: [project.summary],
        stack: project.technologies.slice(0, 8).join(", "),
      },
  ),
  ...resumeProjects.filter((item) => !item.slug),
];

export const resumeEducation = [
  {
    title: "BSc (Hons) Computer Science & Software Engineering — First Class",
    institution: "University of Bedfordshire, UK",
    period: "2021 – 2024",
    notes: [] as string[],
  },
  {
    title: "Higher Diploma in Information Technology",
    institution: "SLIIT City Uni, Colombo",
    period: "2021 – 2023",
    notes: [
      "CGPA 3.94 / 4.0",
      "Dean's List Award in all four semesters",
      "Highest GPA of the batch",
    ],
  },
];

export const resumeCertifications = [
  "Frontend Web Development with React.js & JavaScript — DevTown (2023)",
  "Responsive Web Design — University of London, Coursera (2022)",
  "Cloud Computing Architecture — Great Learning (2023)",
  "Cloud Computing with AWS — DevTown (2023)",
  "API Management Concepts for WSO2 API Manager — WSO2 (2024)",
  "Git Fundamentals and Microservices Architecture — Alison (2024)",
  "JavaScript (Basic) and CSS — HackerRank (2023)",
];

export const resumeLeadership = [
  "Vice President, SLIIT City Uni Alumni Association (2025 – Present)",
  "Student Ambassador, SLIIT City Uni (2023 – 2024)",
  "Athletic Captain, SLIIT City Uni Sports Council (2023)",
  "1st Place, All-Island Music Competition — Orchestra category, new national record (Ministry of Education, 2014)",
];

export const resumeLanguages =
  "English — fluent (C2) · Sinhala — native · Interests: avid reader with 600+ books read";
