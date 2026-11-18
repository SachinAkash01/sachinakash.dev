/**
 * Long-form service landing pages. Each page targets a distinct search intent
 * (for example "freelance web developer Sri Lanka" or "React Native developer"),
 * so keep the copy specific to the service rather than duplicating text.
 */
export type ServiceFaq = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  /** Short label used in navigation and cards. */
  name: string;
  /** Page H1. */
  heading: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** Who this service is for, written for both businesses and hiring teams. */
  audience: string[];
  deliverables: Array<{ title: string; text: string }>;
  technologies: string[];
  relatedProjects: string[];
  faqs: ServiceFaq[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "website-development",
    name: "Website development",
    heading: "Website development for businesses that need to be found and trusted.",
    metaTitle:
      "Freelance Web Developer in Sri Lanka | Website Development — Sachin Akash",
    metaDescription:
      "Hire a freelance web developer in Colombo, Sri Lanka for fast, responsive, SEO-friendly business websites built with React, Next.js, or WordPress. Serving clients in Sri Lanka, Australia, and worldwide.",
    intro:
      "I design and develop modern business websites that load fast, rank well, and turn visitors into enquiries. Every site is responsive, accessible, and built on a clean technical SEO foundation, whether it is a corporate website, a travel site, a band's booking site, or a landing page for a new product.",
    audience: [
      "Small and medium businesses that need a professional website or a redesign",
      "Travel, hospitality, education, finance, and construction companies",
      "Founders who need a credible marketing site before launch",
      "Agencies looking for a reliable freelance web developer to deliver client projects",
    ],
    deliverables: [
      {
        title: "Custom, responsive design",
        text: "A layout designed around your brand and goals, tested on phones, tablets, laptops, and large monitors.",
      },
      {
        title: "Technical SEO foundations",
        text: "Prerendered or server-rendered pages, unique titles and descriptions, structured data, sitemaps, and fast Core Web Vitals.",
      },
      {
        title: "Enquiry and lead capture",
        text: "Contact, quote, and booking forms with validation, spam protection, email delivery, and WhatsApp hand-off where it helps.",
      },
      {
        title: "Performance and hosting",
        text: "Optimised images, code splitting, caching, and deployment on Vercel, SiteGround, or your preferred host.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "Vercel",
      "Cloudflare",
      "Resend",
    ],
    relatedProjects: [
      "ttree-lanka-holidays",
      "funk-island",
      "rimark-australia",
      "capital-bridge",
    ],
    faqs: [
      {
        question: "How long does it take to build a business website?",
        answer:
          "Most business websites take two to six weeks from approved content and design to launch. Larger sites with booking flows, many service pages, or custom integrations take longer, and I share a clear timeline before work starts.",
      },
      {
        question: "Will my website be SEO-friendly?",
        answer:
          "Yes. Every site ships with crawlable HTML, unique page titles and descriptions, structured data, a sitemap, optimised images, and fast loading. I also structure pages around the services and locations your customers search for.",
      },
      {
        question: "Do you work with clients outside Sri Lanka?",
        answer:
          "Yes. I am based in Colombo and work remotely with clients across Sri Lanka, Australia, Europe, and elsewhere, using shared timelines, regular progress updates, and staging links for review.",
      },
      {
        question: "Should my website use React or WordPress?",
        answer:
          "WordPress is a good fit when your team wants to edit content and manage plugins themselves. A custom React or Next.js site is a better fit when performance, unique interactions, or custom application features matter most. I recommend the option that suits your team, not the trendiest one.",
      },
    ],
  },
  {
    slug: "web-application-development",
    name: "Web applications",
    heading: "Custom web application development, from first prototype to production.",
    metaTitle:
      "Custom Web Application Development | Full-Stack Developer — Sachin Akash",
    metaDescription:
      "Full-stack software engineer building custom web applications, dashboards, portals, and SaaS products with React, TypeScript, Node.js, Spring Boot, and cloud infrastructure.",
    intro:
      "When off-the-shelf tools stop fitting the way your business works, a custom web application can. I build portals, dashboards, internal tools, and SaaS products with a full-stack approach: clear product thinking, maintainable architecture, secure APIs, and a dependable path to production.",
    audience: [
      "Businesses replacing spreadsheets and manual processes with software",
      "Start-ups building a minimum viable product or the next version of one",
      "Teams that need an extra senior full-stack engineer for a defined project",
      "Organisations modernising an older system without stopping the business",
    ],
    deliverables: [
      {
        title: "Product discovery and scoping",
        text: "Workflows, user roles, and priorities turned into a realistic scope, so the first release solves the most important problem.",
      },
      {
        title: "Full-stack implementation",
        text: "Type-safe React frontends, well-designed REST APIs, authentication, and databases chosen for your data.",
      },
      {
        title: "Quality and reliability",
        text: "Testing, code review, logging, and CI/CD pipelines so changes ship safely and problems are visible early.",
      },
      {
        title: "Cloud deployment",
        text: "Production deployment on AWS, Azure, Vercel, or containers with Docker and Kubernetes, sized for your traffic and budget.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
    relatedProjects: ["ttree-lanka-holidays", "funk-island", "quaso"],
    faqs: [
      {
        question: "What kind of web applications do you build?",
        answer:
          "Customer portals, admin dashboards, booking and ordering systems, internal business tools, and SaaS products. If people need to log in, manage data, or complete a workflow, it is likely a web application.",
      },
      {
        question: "Can you join an existing development team?",
        answer:
          "Yes. I have worked in product engineering teams at WSO2 and can contribute as a full-stack or backend engineer on an existing codebase, following your team's review and release processes.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. I offer ongoing maintenance, monitoring, and feature development after launch, either on a retainer or per change.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile applications",
    heading: "Cross-platform mobile app development with React Native.",
    metaTitle:
      "React Native Mobile App Developer | iOS & Android Apps — Sachin Akash",
    metaDescription:
      "Hire a React Native developer to build cross-platform iOS and Android apps with Expo, secure APIs, push notifications, and a smooth native feel.",
    intro:
      "I build cross-platform mobile apps with React Native and Expo, so one codebase serves both iOS and Android without compromising the experience. Apps are designed around real user journeys and connected to secure APIs that the web product can share.",
    audience: [
      "Businesses that want a customer app alongside their website",
      "Start-ups validating a mobile-first product idea",
      "Teams with an existing web platform that need a companion app",
    ],
    deliverables: [
      {
        title: "Native-feeling UX",
        text: "Navigation, gestures, and layouts that follow iOS and Android conventions and feel fast on real devices.",
      },
      {
        title: "Shared backend and APIs",
        text: "Authentication, data sync, and integrations designed so your web and mobile products use the same reliable services.",
      },
      {
        title: "App store release",
        text: "Builds, testing, and submission guidance for the Apple App Store and Google Play.",
      },
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Firebase",
      "REST APIs",
    ],
    relatedProjects: ["quaso", "sherees-cakes"],
    faqs: [
      {
        question: "Why React Native instead of separate native apps?",
        answer:
          "React Native lets one team build and maintain a single codebase for iOS and Android, which usually means faster delivery and lower long-term cost while still delivering a native experience for most business apps.",
      },
      {
        question: "Can my app share a backend with my website?",
        answer:
          "Yes. I design APIs so your website, mobile app, and admin tools can share the same data and business logic.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce",
    heading: "E-commerce website development that makes buying easy.",
    metaTitle:
      "E-commerce Website Developer in Sri Lanka | Online Store Development — Sachin Akash",
    metaDescription:
      "Custom e-commerce website development in Sri Lanka: product catalogues, carts, secure checkout, payment gateways, bank transfer, delivery zones, and order emails. Built for speed and conversions.",
    intro:
      "I build online stores that make products look their best and make buying simple. From catalogue and search to cart, checkout, payments, delivery options, and order confirmation emails, every step is designed to reduce friction on mobile, where most customers shop.",
    audience: [
      "Bakeries, restaurants, and food brands taking orders online",
      "Retailers moving from social media orders to a proper online store",
      "Brands that have outgrown a template store and need a custom experience",
    ],
    deliverables: [
      {
        title: "Catalogue and discovery",
        text: "Product pages, categories, search, and filters that help customers find what they want quickly.",
      },
      {
        title: "Cart and checkout",
        text: "A low-friction cart and checkout with delivery or pickup, delivery zones, and clear order states.",
      },
      {
        title: "Payments and orders",
        text: "Online payment gateway integration or bank-transfer flows, order numbers, and automated email or WhatsApp confirmations.",
      },
      {
        title: "Security and speed",
        text: "Bot protection with Cloudflare Turnstile, validated forms, optimised product images, and fast page loads.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Payment gateways",
      "Cloudflare Turnstile",
      "Resend",
      "Shopify",
      "Vercel",
    ],
    relatedProjects: ["sherees-cakes", "quaso", "nutri"],
    faqs: [
      {
        question: "Can you integrate local Sri Lankan payment options?",
        answer:
          "Yes. I have built checkouts that combine online payment gateways with bank transfer and cash-on-delivery style flows, plus delivery and store pickup options.",
      },
      {
        question: "Should I use Shopify or a custom e-commerce website?",
        answer:
          "Shopify is great for standard retail stores that want to launch quickly. A custom store makes sense when you need custom orders, unique product presentation, local payment flows, or tighter control over performance and branding.",
      },
      {
        question: "Will customers get order confirmation emails?",
        answer:
          "Yes. Order and enquiry emails are sent automatically to both the customer and your team, and WhatsApp hand-off can be added for quick follow-up.",
      },
    ],
  },
  {
    slug: "wordpress-development",
    name: "WordPress development",
    heading: "WordPress websites your team can actually manage.",
    metaTitle:
      "WordPress Developer | Custom Themes, Redesigns & Speed Optimisation — Sachin Akash",
    metaDescription:
      "Freelance WordPress developer for custom themes, website redesigns, WP Travel Engine booking sites, SEO setup, and SiteGround speed optimisation for businesses in Sri Lanka and Australia.",
    intro:
      "WordPress is often the right choice when your team wants to publish content and manage the site without a developer. I build custom WordPress themes, redesign existing sites, configure booking and enquiry flows, and tune hosting and caching so the site stays fast and secure.",
    audience: [
      "Businesses that want to edit pages, services, and projects themselves",
      "Companies with an outdated WordPress site that needs a redesign",
      "Travel and tour operators that need online booking",
    ],
    deliverables: [
      {
        title: "Custom themes and redesigns",
        text: "A theme built for your brand and content, not a heavy multipurpose template.",
      },
      {
        title: "Booking, quote, and enquiry flows",
        text: "WP Travel Engine bookings, quotation forms with file uploads, and reliable email delivery with SMTP.",
      },
      {
        title: "SEO and performance",
        text: "Rank Math SEO setup, structured content, caching, and SiteGround Speed Optimizer configuration.",
      },
      {
        title: "Safe launches",
        text: "Changes built in a staging environment, automated backups, and a careful move to production.",
      },
    ],
    technologies: [
      "WordPress",
      "PHP",
      "WP Travel Engine",
      "Rank Math SEO",
      "WP Mail SMTP",
      "SiteGround",
      "cPanel",
      "UpdraftPlus",
    ],
    relatedProjects: ["rimark-australia", "365-lanka-holidays"],
    faqs: [
      {
        question: "Can you redesign my existing WordPress website without downtime?",
        answer:
          "Yes. I build and test the redesign in a staging environment, take backups, and only move changes to production once they are approved.",
      },
      {
        question: "Can I edit the website myself after launch?",
        answer:
          "Yes. Pages, services, projects, and trips are set up so your team can update them from the WordPress dashboard, and I provide a short guide for common edits.",
      },
      {
        question: "Can you make my WordPress site faster?",
        answer:
          "Usually, yes. Image optimisation, caching, removing heavy plugins, and host-level tools such as SiteGround Speed Optimizer often make a significant difference.",
      },
    ],
  },
  {
    slug: "api-integration",
    name: "API & system integration",
    heading: "API development and system integration that connects your business.",
    metaTitle:
      "API Development & System Integration Engineer | REST & OpenAPI — Sachin Akash",
    metaDescription:
      "Backend and integration engineer with WSO2 and Ballerina experience: REST APIs, OpenAPI specifications, third-party integrations, connectors, and business automation.",
    intro:
      "Most businesses run on several systems that do not talk to each other. I design secure APIs and integrations that connect them, drawing on two years of building integration tooling at WSO2, including the Ballerina OpenAPI tool, HTTP, FTP, and VFS modules, and Devant, now the WSO2 Integration Platform.",
    audience: [
      "Businesses connecting payment, email, CRM, or ERP systems",
      "Product teams that need a well-documented public or partner API",
      "Engineering teams adopting Ballerina or the WSO2 integration stack",
    ],
    deliverables: [
      {
        title: "API design",
        text: "Clear REST contracts documented with OpenAPI, versioning, authentication, and error handling.",
      },
      {
        title: "Third-party integrations",
        text: "Connections to payment gateways, email providers, file transfer systems, and business tools.",
      },
      {
        title: "Automation",
        text: "Scheduled jobs, webhooks, and data pipelines that remove repetitive manual work.",
      },
    ],
    technologies: [
      "Ballerina",
      "Java",
      "Node.js",
      "OpenAPI",
      "REST",
      "WSO2",
      "FTP / SFTP",
      "Webhooks",
    ],
    relatedProjects: ["sherees-cakes", "ttree-lanka-holidays"],
    faqs: [
      {
        question: "Do you work with Ballerina and WSO2 products?",
        answer:
          "Yes. I worked at WSO2 from 2023 to 2026 on Ballerina standard libraries, the Ballerina OpenAPI tool, connectors, and Devant, so I can help teams design, build, and troubleshoot Ballerina integrations.",
      },
      {
        question: "Can you document an existing API?",
        answer:
          "Yes. I can produce an OpenAPI specification for an existing service, which makes it easier to test, generate clients, and onboard partners.",
      },
    ],
  },
  {
    slug: "software-consulting",
    name: "Consulting & architecture",
    heading: "Software consulting and architecture for confident technical decisions.",
    metaTitle:
      "Software Architecture & Technical Consulting | Fractional Tech Lead — Sachin Akash",
    metaDescription:
      "Independent software consulting: technology selection, system architecture, code and performance reviews, and delivery guidance for start-ups and growing businesses.",
    intro:
      "Good technical decisions early save months later. I help founders and teams choose the right technology, plan architecture that can grow, review existing code and performance, and set up delivery practices, acting as a hands-on technical partner rather than a slide deck.",
    audience: [
      "Non-technical founders planning a software product",
      "Businesses choosing between agencies, platforms, or a custom build",
      "Teams facing performance, reliability, or maintainability problems",
    ],
    deliverables: [
      {
        title: "Technology selection",
        text: "A recommendation grounded in your goals, budget, team, and timeline.",
      },
      {
        title: "Architecture and planning",
        text: "System design, data models, integration plans, and a phased delivery roadmap.",
      },
      {
        title: "Reviews and audits",
        text: "Code, security, SEO, and performance reviews with a prioritised list of fixes.",
      },
    ],
    technologies: [
      "System design",
      "Cloud architecture",
      "CI/CD",
      "Performance",
      "Security",
      "Technical SEO",
    ],
    relatedProjects: ["evantra-labs", "capital-bridge"],
    faqs: [
      {
        question: "Can you review a website or app another developer built?",
        answer:
          "Yes. I review code quality, security, performance, and SEO and give you a clear, prioritised report you can act on with any developer.",
      },
      {
        question: "Do you offer fractional CTO or tech lead support?",
        answer:
          "Yes. Through Evantra Labs I support businesses as an ongoing technical partner for architecture, hiring, vendor selection, and delivery oversight.",
      },
    ],
  },
];

/** Lower-cases the first letter for mid-sentence use, keeping "WordPress" and "API". */
export const inSentence = (name: string) =>
  /^[A-Z][a-z]/.test(name) && !name.startsWith("WordPress")
    ? name.charAt(0).toLowerCase() + name.slice(1)
    : name;

export const getServicePage = (slug: string | undefined) =>
  servicePages.find((service) => service.slug === slug);

/** Engagement process shown on every service page. */
export const deliveryProcess = [
  {
    title: "Discover",
    text: "A short call to understand your goals, users, timeline, and budget.",
  },
  {
    title: "Plan",
    text: "A clear proposal with scope, milestones, technology, and cost.",
  },
  {
    title: "Build",
    text: "Iterative delivery with staging links and regular progress updates.",
  },
  {
    title: "Launch & support",
    text: "A careful production launch, handover, and ongoing support.",
  },
];
