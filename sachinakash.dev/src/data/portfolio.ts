import type { LucideIcon } from "lucide-react";
import {
  Braces,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Lightbulb,
  PanelsTopLeft,
  Rocket,
  ServerCog,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  number: string;
  /** Delivery year, shown in listings and used in structured data. */
  year: string;
  /** Client's primary market, e.g. "Sri Lanka" or "Australia". */
  market: string;
  title: string;
  shortTitle: string;
  url: string;
  image: string;
  imageAlt: string;
  gallery?: Array<{
    image: string;
    imageAlt: string;
  }>;
  category: string;
  industry: string;
  summary: string;
  objective: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  designApproach: string;
  technicalApproach: string;
  technologies: string[];
  challenges: string[];
  outcome: string;
  accent: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Service = {
  /** Matches a page in src/data/services.ts. */
  slug: string;
  title: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
};

export type Book = {
  slug: string;
  title: string;
  author: string;
  coverUrl: string;
  category: string;
  description: string;
  personalTakeaway: string;
  featured: boolean;
};

export const profile = {
  name: "Sachin Akash",
  monogram: "SA",
  eyebrow: "Software Engineer · Fullstack Web Developer",
  title: "Software Engineer, Product Builder, and Entrepreneur ",
  headline: "I build software that real businesses run on.",
  /** Short hero introduction; the longer summary is used by the terminal. */
  intro:
    "Full-stack software engineer in Colombo, Sri Lanka. At WSO2 I built API and integration tooling used by developers worldwide; today I design and ship web apps, mobile apps, online stores, and the APIs behind them.",
  summary:
    "I’m a software engineer based in Colombo, Sri Lanka. I build websites, web applications, mobile apps, e-commerce stores, APIs, and cloud solutions for businesses in Sri Lanka, Australia, and worldwide.",
  location: "Colombo, Sri Lanka",
  email: "hello@sachinakash.dev",
  phone: "+94 78 343 9022",
  availability:
    "Open to software engineering roles and freelance projects",
  websiteUrl: "https://www.sachinakash.dev",
  resumeUrl: "/documents/sachin-akash-resume.pdf",
  brandLogo: "/images/brand/sachin-akash-logo.png",
  profileImage: "/images/profile/sachin-self-portrait.webp",
  profileImagePosition: "53% center",
  socials: [
    { label: "GitHub", href: "https://github.com/SachinAkash01" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sachin-akash-6514aa227/",
    },
    { label: "Instagram", href: "https://www.instagram.com/sachinakash_" },
  ] satisfies SocialLink[],
};

export const overview = [
  {
    icon: Layers3,
    title: "Product engineering",
    text: "From product framing and UX decisions to resilient implementation.",
  },
  {
    icon: Code2,
    title: "Full-stack delivery",
    text: "Modern web and mobile experiences backed by practical systems.",
  },
  {
    icon: Braces,
    title: "APIs & architecture",
    text: "Clear contracts, maintainable services, and software designed to evolve.",
  },
  {
    icon: CloudCog,
    title: "Cloud & operations",
    text: "Production deployments, delivery pipelines, observability, and performance.",
  },
];

export const expertise = [
  {
    label: "Engineering",
    icon: GitBranch,
    items: [
      "Full-stack development",
      "Backend engineering",
      "API development",
      "System architecture",
      "Developer tooling",
      "Open source",
    ],
  },
  {
    label: "Product development",
    icon: PanelsTopLeft,
    items: [
      "Web applications",
      "Mobile applications",
      "E-commerce",
      "Business systems",
      "SaaS products",
      "AI-assisted applications",
    ],
  },
  {
    label: "Platform & delivery",
    icon: Rocket,
    items: [
      "Cloud infrastructure",
      "DevOps & CI/CD",
      "Performance",
      "Security practices",
      "Testing",
      "Production deployment",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Co-Founder & Director",
    company: "Evantra Labs",
    period: "2026 - Present",
    summary:
      "Leading the technical direction behind reliable digital products for organisations and growing businesses.",
    highlights: [
      "Technical strategy and architecture",
      "Web, mobile, and custom system delivery",
      "Client project leadership",
      "Product development and engineering mentorship",
    ],
  },
  {
    role: "Software Engineer",
    company: "WSO2",
    period: "2024 - 2025",
    summary:
      "Shipped developer tooling, runtime capabilities, and integration product experiences across Ballerina and Devant (now WSO2 Integration Platform), with a strong focus on reliability and adoption.",
    highlights: [
      "Delivered core capabilities across Ballerina HTTP, OpenAPI, JSON Schema, FTP, and VFS modules",
      "Strengthened code generation, connector tooling, static analysis, testing, and release quality",
      "Improved Devant product UX, integration workflows, architecture reliability, and onboarding guides",
      "Led connector and documentation improvements while mentoring IIT engineering interns",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "WSO2",
    period: "2023 - 2024",
    summary:
      "Contributed to the Ballerina OpenAPI Tool, improving specification generation and the maintainability of its service-to-OAS pipeline.",
    highlights: [
      "Designed constraint and HATEOAS support for Ballerina service-to-OAS generation",
      "Helped restructure the Ballerina to OpenAPI generator into a modular, component-based codebase",
      "Collaborated with internal teams to align generation with existing developer workflows",
    ],
  },
];

export const projects: Project[] = ([
  {
    slug: "365-lanka-holidays",
    year: "2026",
    market: "Sri Lanka & Europe",
    shortTitle: "365 Lanka Holidays",
    title: "365 Lanka Holidays Travel Website & Booking Platform",
    url: "https://365lankaholidays.com/",
    image: "/images/projects/365-lanka-holidays.webp",
    imageAlt:
      "365 Lanka Holidays home page with a coastal hero and a trip finder for inbound and outbound tours",
    gallery: [
      {
        image: "/images/projects/365-lanka-holidays-tours.webp",
        imageAlt:
          "365 Lanka Holidays tours page with duration, theme, budget, and season filters beside itinerary cards",
      },
      {
        image: "/images/projects/365-lanka-holidays-about.webp",
        imageAlt:
          "365 Lanka Holidays about page explaining year-round travel in Sri Lanka, with licensing and trust badges",
      },
      {
        image: "/images/projects/365-lanka-holidays-itinerary.webp",
        imageAlt:
          "Tour itinerary page with an interactive Sri Lanka route map, best travel months, and a booking card",
      },
    ],
    category: "Travel & Tourism · WordPress Booking Platform",
    industry: "Inbound and outbound travel",
    summary:
      "A travel website and online booking platform for inbound Sri Lanka tours and outbound holidays from Colombo, designed in React and delivered as a custom WordPress theme.",
    objective:
      "Help travellers find the right trip, understand every detail of the itinerary, and book online, while giving the client a site they can manage themselves in WordPress.",
    problem:
      "The business sells two different products, private tours around Sri Lanka and short holidays abroad, each with its own pricing in USD and LKR. The client also needed a self-managed CMS and a real booking flow rather than a static brochure.",
    solution:
      "A trip finder, 11 detailed itineraries with route maps and flight details, and a WP Travel Engine booking flow with a book now, pay later option. The site was prototyped in React, then generated as a custom WordPress theme with a one-click importer for pages, trips, and photos.",
    role: "UX design, React prototyping, custom WordPress theme development, booking flow configuration, technical SEO, and launch.",
    features: [
      "Trip finder by duration, theme, budget, and season",
      "“Where it’s sunny this month” monsoon guide",
      "11 itineraries with animated route maps and flight paths",
      "Prices in USD and LKR",
      "Online booking with a book now, pay later option",
      "Enquiry forms and WhatsApp contact",
      "Custom WordPress theme with one-click content importer",
      "Structured data, sitemap, and GDPR cookie consent",
    ],
    designApproach:
      "Editorial serif headlines, warm gold accents, and full-bleed travel photography give the brand a premium feel, while the trip finder sits directly in the hero so visitors can start planning straight away.",
    technicalApproach:
      "The interface was built and approved as a React and Vite prototype, then exported into a server-rendered custom WordPress theme in PHP. WP Travel Engine powers trips and bookings, with Rank Math SEO, WP Mail SMTP for reliable email, and UpdraftPlus for automated backups.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "WordPress",
      "PHP",
      "WP Travel Engine",
      "Rank Math SEO",
      "WP Mail SMTP",
      "UpdraftPlus",
      "cPanel",
      "Vercel",
    ],
    challenges: [
      "Supporting two very different products, inbound tours and outbound holidays, in one clear structure",
      "Matching a hand-crafted React design one-to-one in a theme the client can edit",
      "Explaining Sri Lanka's two monsoon seasons simply so travellers pick the right dates",
    ],
    outcome:
      "A bookable travel platform that the client manages day to day in WordPress, with search-ready itineraries and an online path from inspiration to reservation.",
    accent: "#e0a93b",
  },
  {
    slug: "quaso",
    year: "2026",
    market: "Sri Lanka",
    shortTitle: "Quaso",
    title: "Quaso Croissant Bakery E-Commerce Website",
    url: "https://quasolk.vercel.app/",
    image: "/images/projects/quaso.webp",
    imageAlt:
      "Quaso home page featuring the Mixed Berry Croissant on a 3D-style plate with an orbiting product carousel and add-to-bag card",
    gallery: [
      {
        image: "/images/projects/quaso-shop.webp",
        imageAlt:
          "Quaso shop page with category tabs, product search, sorting, and dessert croissant cards with prices",
      },
      {
        image: "/images/projects/quaso-product.webp",
        imageAlt:
          "Quaso product page for the Strawberry Cheesecake Croissant with image thumbnails, price, quantity selector, and add-to-bag button",
      },
      {
        image: "/images/projects/quaso-bag.webp",
        imageAlt:
          "Quaso slide-out shopping bag with quantity controls, a free-delivery progress bar, and checkout buttons",
      },
      {
        image: "/images/projects/quaso-checkout.webp",
        imageAlt:
          "Quaso checkout page with delivery or pickup options, delivery details form, and bank-transfer order summary",
      },
    ],
    category: "E-commerce · Food and Bakery",
    industry: "Bakery, food retail, and online ordering",
    summary:
      "A premium, highly interactive online store for a Sri Lankan croissant bakery, with a 3D-style product hero, a complete ordering flow, and zone-based delivery.",
    objective:
      "Create an online store that feels as rich and indulgent as the product, and makes ordering fresh croissants for delivery or pickup effortless.",
    problem:
      "Food brands live or die on appetite appeal, but heavy visual effects can make a store slow and confusing. Quaso needed a memorable brand experience and a practical checkout that works with bank transfers and local delivery zones.",
    solution:
      "A playful, motion-rich storefront with a draggable 3D-style menu, an animated shop-front carousel, and a distinct hero on every page, paired with search, a cart drawer, delivery or pickup with zone-based fees, and bank-transfer checkout with order numbers and WhatsApp or email confirmation.",
    role: "Brand-led UI/UX design, interactive frontend engineering, ordering and checkout flows, product image pipeline, SEO, and deployment.",
    features: [
      "Interactive 3D-style croissant hero with drag to spin",
      "Shop-front product carousel with drag and swipe",
      "Product search and cart drawer",
      "Delivery or pickup with zone-based delivery fees",
      "Bank-transfer checkout with order numbers",
      "WhatsApp and email order confirmation",
      "Open Graph and Twitter share cards",
      "Python image pipeline for consistent product photos",
    ],
    designApproach:
      "Glassmorphism, pointer-tracked lighting, gloss highlights, and rising steam bring the product to life, while a warm cream and deep red palette and bold type keep the brand instantly recognisable.",
    technicalApproach:
      "React 19 and TypeScript with Motion for animation and modern CSS (3D transforms, backdrop-filter, and viewport units) tuned for real laptop, monitor, and phone viewports. Product photos were cut out and plated consistently with Python, OpenCV, Pillow, and NumPy.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "React Router",
      "Motion",
      "Modern CSS",
      "Python",
      "OpenCV",
      "Pillow",
      "Vercel",
    ],
    challenges: [
      "Delivering rich 3D-style motion without hurting usability or speed",
      "Keeping product imagery consistent across a growing menu",
      "Designing a simple checkout around bank transfers and delivery zones",
    ],
    outcome:
      "A distinctive bakery storefront that turns browsing into a playful experience and gives customers a clear, reliable path from craving to confirmed order.",
    accent: "#c8242f",
  },
  {
    slug: "ttree-lanka-holidays",
    year: "2026",
    market: "Sri Lanka",
    shortTitle: "T-tree Lanka Holidays",
    title: "T-tree Lanka Holidays Travel & Tourism Website",
    url: "https://www.ttreelankaholidays.com/",
    image: "/images/projects/ttree-lanka-holidays.webp",
    imageAlt:
      "T-tree Lanka Holidays home page with a tea country hero slideshow, tour package buttons, and a tour finder",
    gallery: [
      {
        image: "/images/projects/ttree-lanka-holidays-packages.webp",
        imageAlt:
          "T-tree Lanka Holidays tour packages page with search, length and interest filters, and package cards",
      },
      {
        image: "/images/projects/ttree-lanka-holidays-tailor-made.webp",
        imageAlt:
          "Multi-step tailor-made trip planner with destination picker and a live trip summary",
      },
      {
        image: "/images/projects/ttree-lanka-holidays-route.webp",
        imageAlt:
          "Tour package page with an interactive Sri Lanka route map and a free quote request form",
      },
      {
        image: "/images/projects/ttree-lanka-holidays-day-tours.webp",
        imageAlt:
          "T-tree Lanka Holidays day tours page with Colombo, Kandy, and Galle tour cards and WhatsApp enquiry buttons",
      },
    ],
    category: "Travel & Tourism · Web Application",
    industry: "Travel, tourism, and tour operations",
    summary:
      "The official website for a Sri Lankan travel agency, with 12 tour packages, 27 destination guides, a multi-step tailor-made trip planner, and SEO built in from day one.",
    objective:
      "Give international travellers an inspiring, trustworthy way to explore Sri Lanka and turn that interest into qualified tour enquiries for T-tree Lanka Holidays.",
    problem:
      "A tour operator's offer is large and layered: packages, destinations, activities, day tours, and fully custom trips. Travellers needed to browse all of it easily, especially on phones, and the business needed enquiries that arrive with enough detail to quote from.",
    solution:
      "A fast, mobile-first React site with day-by-day itineraries on animated route maps, filterable destination and activity guides, a guided tailor-made trip planner, and validated enquiry and quote forms backed by a serverless email endpoint.",
    role: "UI/UX design, frontend engineering, interactive route maps, form and serverless email engineering, technical SEO, and production deployment.",
    features: [
      "12 tour packages with day-by-day itineraries",
      "Animated, interactive Sri Lanka route maps",
      "27 destination guides, 14 activities, and 13 day tours",
      "Multi-step tailor-made trip planner",
      "Enquiry and quote forms with international phone input",
      "Serverless email delivery endpoint",
      "Full-screen video hero with iOS autoplay fallback",
      "Structured data, sitemap, and per-page meta tags",
    ],
    designApproach:
      "Lush, photography-led layouts and a confident green palette echo the island itself, while draggable carousels, scroll-triggered animations, and a branded loading screen add polish without slowing the path to an enquiry.",
    technicalApproach:
      "React 19 and TypeScript with code-split routes, WebP images, and lazy loading. Each route is prerendered with its own meta tags, Open Graph cards, and structured data (TravelAgency, TouristTrip, TouristDestination, BlogPosting, and breadcrumbs), and the sitemap is generated at build time.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Framer Motion",
      "React Router",
      "Vercel Functions",
      "Resend",
      "libphonenumber-js",
      "FFmpeg",
      "SVG",
    ],
    challenges: [
      "Presenting a large catalogue of tours, destinations, and activities without overwhelming visitors",
      "Collecting detailed custom-trip requirements without making the planner feel like a long form",
      "Shipping video, maps, and animation while keeping mobile performance and search visibility strong",
    ],
    outcome:
      "A search-ready, conversion-focused travel platform that helps travellers plan a Sri Lanka holiday on their own terms and gives the team well-structured enquiries to respond to.",
    accent: "#8cc63f",
  },
  {
    slug: "rimark-australia",
    year: "2026",
    market: "Australia",
    shortTitle: "Rimark Australia",
    title: "Rimark Australia Construction & Steel Fabrication Website",
    url: "https://rimark.com.au/",
    image: "/images/projects/rimark-australia.webp",
    imageAlt:
      "Rimark Australia home page presenting civil and outdoor works with a request a quote button",
    gallery: [
      {
        image: "/images/projects/rimark-australia-projects.webp",
        imageAlt:
          "Rimark Australia project showcase filtered by division, with residential fencing, driveway, and landscaping projects in Melbourne",
      },
      {
        image: "/images/projects/rimark-australia-landscaping.webp",
        imageAlt:
          "Rimark Australia landscaping service page explaining the site planning and groundwork process with project photos",
      },
      {
        image: "/images/projects/rimark-australia-services.webp",
        imageAlt:
          "Civil construction division page listing eight services including landscaping, concreting, retaining walls, and decking",
      },
      {
        image: "/images/projects/rimark-australia-about.webp",
        imageAlt:
          "Rimark Australia about page introducing its three divisions with key facts and construction and steel photos",
      },
    ],
    category: "Construction · Corporate WordPress Website",
    industry: "Civil construction, steel fabrication, and steel trading",
    summary:
      "A redesigned corporate website for an Australian civil construction, structural steel fabrication, and steel trading business, built to make services clear and turn visitors into quote requests.",
    objective:
      "Establish a strong digital presence for Rimark Australia, present its service offering clearly, and improve how prospective customers explore services and submit project enquiries.",
    problem:
      "Rimark runs three distinct divisions with more than twenty services between them. Customers needed to find the right service quickly, trust the company's capability, and send requirements in a form the team could quote from.",
    solution:
      "A responsive WordPress website that organises services into dedicated divisions with detailed service pages, showcases completed projects, and routes visitors to enquiry and quotation request forms.",
    role: "Website redesign, WordPress development, information architecture, content structuring, performance optimisation, and staging-to-production delivery.",
    features: [
      "Three service divisions with detailed service pages",
      "Civil construction, steel fabrication, and steel trading",
      "Project showcase of completed work",
      "Quotation centre for drawings, photos, and requirements",
      "Enquiry forms and clear calls to action",
      "Responsive layouts for desktop and mobile",
      "SiteGround Speed Optimizer and caching",
      "Staging environment before production deployment",
    ],
    designApproach:
      "A bold, industrial aesthetic with strong condensed headlines, charcoal backgrounds, and red calls to action reflects the trade, while a structured layout and intuitive navigation keep more than twenty services easy to browse.",
    technicalApproach:
      "Built and refined in a WordPress staging environment on SiteGround before production deployment, with SiteGround Speed Optimizer and caching configured for fast load times and a content structure designed for both users and search engines.",
    technologies: [
      "WordPress",
      "SiteGround",
      "SiteGround Speed Optimizer",
      "Caching",
      "Responsive design",
      "Content structuring",
      "Staging environment",
    ],
    challenges: [
      "Organising three divisions and more than twenty services into navigation people understand",
      "Capturing enough project detail in quote requests without discouraging submissions",
      "Changing a live business website safely through a staging workflow",
    ],
    outcome:
      "A professional, well-organised corporate website that presents Rimark's capabilities clearly and gives Australian customers a direct path to request a quote.",
    accent: "#e3262c",
  },
  {
    slug: "sherees-cakes",
    year: "2026",
    market: "Sri Lanka",
    shortTitle: "Sheree’s Cakes",
    title: "Sheree’s Cakes E-Commerce Platform",
    url: "https://www.shereescakes.lk/",
    image: "/images/projects/sherees-cakes.webp",
    imageAlt: "Sheree's Cakes home page hero: A slice of happiness delivered to your door",
    gallery: [
      {
        image: "/images/projects/sherees-cakes-shop.webp",
        imageAlt:
          "Sheree's Cakes Shop All Treats page with product search and category filters",
      },
      {
        image: "/images/projects/sherees-cakes-birthday-cakes.webp",
        imageAlt:
          "Sheree's Cakes birthday cake catalogue with product codes, prices, and add-to-cart buttons",
      },
      {
        image: "/images/projects/sherees-cakes-cart.webp",
        imageAlt:
          "Sheree's Cakes shopping cart showing an item, subtotal, and checkout actions",
      },
    ],
    category: "E-commerce · Food and Retail",
    industry: "Food, retail, and online ordering",
    summary:
      "A premium e-commerce experience that makes discovering, customising, and ordering cakes straightforward on any device.",
    objective:
      "Create a polished online storefront that translates the care of a boutique cake business into a clear, trustworthy digital ordering journey.",
    problem:
      "Cake orders combine catalogue products, custom requests, delivery choices, payments, and time-sensitive customer expectations. Those paths needed to feel like one coherent experience.",
    solution:
      "A responsive commerce platform with focused product discovery, a low-friction cart and checkout, flexible fulfilment options, and dedicated custom-order enquiries.",
    role: "Product engineering, interface implementation, commerce flow design, integrations, and production delivery.",
    features: [
      "Product catalogue, search, and filters",
      "Cart and checkout flows",
      "Online payment and bank transfer options",
      "Delivery and store pickup",
      "Custom cake enquiries",
      "Cloudflare Turnstile protection",
      "Order confirmation and legal pages",
      "Responsive, performance-focused UI",
    ],
    designApproach:
      "Warm editorial product presentation, strong photography areas, and clear order states keep the experience inviting without sacrificing utility.",
    technicalApproach:
      "A component-led TypeScript frontend, validated forms, safe payment hand-offs, responsive media, and deployment practices designed for reliability.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Resend API",
      "Git/GitHub",
      "Cloudflare Turnstile",
      "Payment integration",
    ],
    challenges: [
      "Supporting both standard and highly customised orders",
      "Keeping multi-step purchasing clear on mobile",
      "Balancing rich product presentation with speed",
    ],
    outcome:
      "A credible digital storefront that gives customers multiple ways to order while reducing ambiguity throughout the buying journey.",
    accent: "#d49b5b",
  },
  {
    slug: "funk-island",
    year: "2026",
    market: "Sri Lanka & international",
    shortTitle: "Funk Island",
    title: "Funk Island Official Band Website",
    url: "https://dev.funkislandmusic.com/",
    image: "/images/projects/funk-island.webp",
    imageAlt:
      "Funk Island official band website home page with a bold wordmark, showreel button, and a tilted live performance video card",
    gallery: [
      {
        image: "/images/projects/funk-island-night-arc.webp",
        imageAlt:
          "Funk Island scroll-driven night timeline showing how the band builds energy from sunset to late night",
      },
      {
        image: "/images/projects/funk-island-band.webp",
        imageAlt:
          "Funk Island band section introducing the seven players with black-and-white performance photos",
      },
      {
        image: "/images/projects/funk-island-where-we-play.webp",
        imageAlt:
          "Funk Island where we play section with a map of Sri Lanka and the Maldives showing the Colombo base and destination events",
      },
      {
        image: "/images/projects/funk-island-highlights.webp",
        imageAlt:
          "Funk Island featured highlights grid with resort, corporate, festival, and wedding performances in Sri Lanka and the Maldives",
      },
      {
        image: "/images/projects/funk-island-corporate.webp",
        imageAlt:
          "Funk Island corporate events page with an example run sheet showing timings and room energy levels",
      },
    ],
    category: "Entertainment · Server-Rendered Web App",
    industry: "Live music and event entertainment",
    summary:
      "A fast, mobile-first booking website for a Sri Lankan live band that plays weddings, corporate events, and resorts in Sri Lanka and abroad.",
    objective:
      "Turn the band's live energy into a website that convinces couples, event planners, and hotel teams to check availability and book.",
    problem:
      "Event buyers want proof before they enquire: what the band sounds like, how a night flows, and where they have played. That proof had to load quickly on phones and be easy to share in WhatsApp chats.",
    solution:
      "A server-rendered React app with dedicated pages for weddings, corporate events, and hotels and resorts, a video library, a venue archive, an interactive “One Night” timeline, and an enquiry form that hands off to WhatsApp.",
    role: "UI/UX design, server-rendered React engineering, motion design, technical SEO, and deployment.",
    features: [
      "Server-side rendering with page-by-page SEO",
      "Branded link previews for WhatsApp and social media",
      "Pinned “One Night” timeline with an animated energy curve",
      "Video library with hover previews and category filters",
      "Venue carousels and a filterable venue archive",
      "Experience pages for weddings, corporate events, and resorts",
      "Enquiry form with date picker and WhatsApp hand-off",
      "Keyboard navigation and reduced-motion support",
    ],
    designApproach:
      "A dark stage-like canvas, hot pink and orange accents, and expressive type capture the feel of a live show, while layouts are fitted to screen height so key sections stay fully visible from 13-inch laptops to large monitors.",
    technicalApproach:
      "TanStack Start and TanStack Router provide server rendering and type-safe routing on Vercel, with structured data, a sitemap, and Open Graph images for every page. Accessibility is built in with keyboard navigation, reduced-motion support, and touch-friendly interactions.",
    technologies: [
      "React 19",
      "TypeScript",
      "TanStack Start",
      "TanStack Router",
      "Vite",
      "Tailwind CSS v4",
      "Server-side rendering",
      "Vercel",
    ],
    challenges: [
      "Communicating the energy of a live show on a phone screen",
      "Keeping video-heavy pages fast to load and pleasant to scroll",
      "Speaking to couples, corporate planners, and hotel teams without diluting the message",
    ],
    outcome:
      "A shareable, search-friendly home for the band that moves event buyers from first impression to availability check in a few taps.",
    accent: "#ff4f8b",
  },
  {
    slug: "winchild",
    year: "2026",
    market: "Sri Lanka",
    shortTitle: "Winchild",
    title: "Winchild Daycare and Preschool Website",
    url: "https://www.winchild.lk/",
    image: "/images/projects/winchild.webp",
    imageAlt: "Winchild preschool and daycare website home page",
    gallery: [
      {
        image: "/images/projects/winchild-about.png",
        imageAlt:
          "Winchild about page presenting the preschool's story and community",
      },
      {
        image: "/images/projects/winchild-programs.png",
        imageAlt:
          "Winchild programmes page showing play group, lower nursery, and upper nursery",
      },
    ],
    category: "Education · Institutional Website",
    industry: "Early education and childcare",
    summary:
      "A welcoming institutional website that helps parents understand programmes, facilities, events, and the values behind the preschool.",
    objective:
      "Give prospective families an informative, reassuring place to evaluate Winchild and make contact with confidence.",
    problem:
      "Parents need both practical programme details and strong trust signals. Important information had to remain easy to scan across a broad range of devices.",
    solution:
      "A parent-centred information architecture supported by accessible programme content, proof points, galleries, an annual event calendar, and direct contact paths.",
    role: "Information architecture, responsive interface engineering, content presentation, SEO, and production delivery.",
    features: [
      "Institutional overview",
      "Registration certificate presentation",
      "Programme and facility information",
      "Event galleries and annual calendar",
      "Parent-focused content",
      "Contact form",
      "SEO and responsive design",
      "Performance optimisation",
    ],
    designApproach:
      "Friendly visual cues, calm spacing, and an intuitive content hierarchy make detailed information feel approachable rather than institutional.",
    technicalApproach:
      "Reusable content sections, responsive image handling, semantic page structure, and a lightweight frontend focused on search visibility and fast navigation.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Resend API",
      "Git/GitHub",
      "Responsive UI",
      "SEO",
      "Form integration",
      "Performance optimisation",
    ],
    challenges: [
      "Presenting trust-building detail without overwhelming parents",
      "Organising programme and event content",
      "Maintaining warmth across mobile and desktop",
    ],
    outcome:
      "A clear, modern digital front door that helps families understand the institution and take the next step.",
    accent: "#7ba1a6",
  },
  {
    slug: "capital-bridge",
    year: "2026",
    market: "Sri Lanka",
    shortTitle: "Capital Bridge",
    title: "Capital Bridge Microfinance Company Website",
    url: "https://capitalbridge.lk/",
    image: "/images/projects/capital-bridge.webp",
    imageAlt: "Capital Bridge microfinance company website home page",
    gallery: [
      {
        image: "/images/projects/capital-bridge-about.png",
        imageAlt:
          "Capital Bridge about page explaining the company's mission and approach to responsible finance",
      },
      {
        image: "/images/projects/capital-bridge-services.png",
        imageAlt:
          "Capital Bridge services page presenting micro loans and financial solutions",
      },
    ],
    category: "Finance · Corporate Website",
    industry: "Microfinance and financial services",
    summary:
      "A trust-led corporate website that presents financial services clearly and makes it easier for prospective customers to connect.",
    objective:
      "Build a professional digital presence that communicates credibility while keeping service discovery and enquiries uncomplicated.",
    problem:
      "Financial-service websites must establish trust quickly, explain products in plain language, and guide users toward safe, appropriate contact options.",
    solution:
      "A structured corporate experience with clear service navigation, confidence-building content, direct calls to action, and consistent business information.",
    role: "UX direction, frontend engineering, service content structure, optimisation, and secure deployment.",
    features: [
      "Corporate brand presentation",
      "Financial service information",
      "Trust-focused interface",
      "Clear calls to action",
      "Contact integration",
      "SEO",
      "Mobile responsiveness",
      "Secure deployment",
    ],
    designApproach:
      "Measured typography, disciplined colour, and clear hierarchy support a calm, professional experience appropriate for a finance organisation.",
    technicalApproach:
      "Semantic responsive components, robust contact paths, optimised assets, structured metadata, and production deployment safeguards.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Resend API",
      "Git/GitHub",
      "Vercel",
      "SEO",
      "Secure deployment",
      "Form integration",
    ],
    challenges: [
      "Communicating trust without visual clutter",
      "Making service content accessible to broad audiences",
      "Maintaining performance across content-heavy pages",
    ],
    outcome:
      "A stronger corporate presence that makes services easier to understand and the organisation easier to reach.",
    accent: "#7390c4",
  },
  {
    slug: "nutri",
    year: "2026",
    market: "Sri Lanka",
    shortTitle: "Nutri",
    title: "Nutri High-Protein Meal Ordering Website",
    url: "https://nutri-seven-beta.vercel.app/",
    image: "/images/projects/nutri.webp",
    imageAlt: "Nutri high-protein meal ordering website home page",
    gallery: [
      {
        image: "/images/projects/nutri-menu.png",
        imageAlt:
          "Nutri meal catalogue displaying four high-protein meals and their nutritional information",
      },
      {
        image: "/images/projects/nutri-meal-detail.png",
        imageAlt:
          "Nutri meal detail dialog for chicken bolognese with macros, price, and ordering action",
      },
    ],
    category: "Food Technology · E-commerce",
    industry: "Nutrition, food technology, and e-commerce",
    summary:
      "A mobile-first ordering experience for a Sri Lankan food brand built around protein-focused products and convenient discovery.",
    objective:
      "Turn Nutri’s nutritional positioning into a distinctive product experience that makes meal exploration and ordering simple.",
    problem:
      "The brand needed to communicate nutrition, appetite appeal, and convenience simultaneously—especially for customers browsing from phones.",
    solution:
      "A focused product catalogue with modern food-brand presentation, concise nutritional cues, and clear ordering and contact actions.",
    role: "Product presentation, responsive UI engineering, ordering journey design, and deployment.",
    features: [
      "Protein-focused product presentation",
      "Product catalogue",
      "Online ordering flow",
      "Mobile-first browsing",
      "Nutritional positioning",
      "Brand-led interface",
      "Contact and social integration",
      "Performance optimisation",
    ],
    designApproach:
      "Bold product framing and concise nutrition information create energy while a simple page rhythm keeps ordering practical.",
    technicalApproach:
      "Responsive TypeScript components, efficient asset loading, explicit product actions, and a deployment setup suited to rapid iteration.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Git/GitHub",
      "Responsive commerce",
      "Vercel",
    ],
    challenges: [
      "Balancing nutritional detail with an appetising presentation",
      "Keeping product actions prominent on small screens",
      "Creating a recognisable identity without heavy media",
    ],
    outcome:
      "A modern, convenient storefront foundation that brings the brand’s high-protein proposition into a clear digital experience.",
    accent: "#88a861",
  },
  {
    slug: "evantra-labs",
    year: "2026",
    market: "Global",
    shortTitle: "Evantra Labs",
    title: "Evantra Labs Official Website",
    url: "https://www.evantralabs.com/",
    image: "/images/projects/evantra-labs.webp",
    imageAlt: "Evantra Labs software company website home page",
    gallery: [
      {
        image: "/images/projects/evantra-labs-services.png",
        imageAlt:
          "Evantra Labs services page presenting website, web application, and mobile application development",
      },
      {
        image: "/images/projects/evantra-labs-tools.png",
        imageAlt:
          "Evantra Labs contact page with project enquiry form and company contact information",
      },
    ],
    category: "Technology · Corporate Website",
    industry: "Software services and digital product engineering",
    summary:
      "A clear, contemporary company website that presents Evantra Labs' engineering services and gives prospective clients a direct path to start a project.",
    objective:
      "Establish a credible digital home for Evantra Labs that communicates its capabilities, working style, and value to ambitious teams.",
    problem:
      "A broad service portfolio spanning websites, applications, custom software, SEO, and business systems needed to feel focused rather than fragmented.",
    solution:
      "A responsive corporate experience with concise positioning, structured service discovery, a visible technology stack, and strong project-enquiry paths.",
    role: "Product direction, information architecture, interface engineering, content strategy, SEO foundations, and production delivery.",
    features: [
      "Company positioning and service overview",
      "Detailed software service pathways",
      "Technology stack presentation",
      "Project enquiry calls to action",
      "Responsive navigation and layouts",
      "Search-friendly page structure",
      "Accessible contact information",
      "Production deployment",
    ],
    designApproach:
      "A restrained white canvas, confident typography, and focused teal accents create a modern technical identity while keeping the service content easy to scan.",
    technicalApproach:
      "A component-led responsive frontend with semantic content structure, reusable service sections, optimised assets, and practical SEO and deployment foundations.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Resend API",
      "Git/GitHub",
      "SEO",
      "Responsive UI",
    ],
    challenges: [
      "Explaining a broad service portfolio without overwhelming visitors",
      "Balancing company credibility with a direct conversion path",
      "Keeping a highly visual identity fast and responsive",
    ],
    outcome:
      "A professional digital front door that makes Evantra Labs' capabilities easier to understand and gives potential clients a clear route from interest to conversation.",
    accent: "#1ca7b6",
  },
] satisfies Omit<Project, "number">[]).map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, "0"),
}));

export const skillGroups = [
  {
    label: "Languages",
    icon: Code2,
    description:
      "Core tools for services, interfaces, automation, and developer platforms.",
    items: ["Java", "TypeScript", "JavaScript", "Python", "Go", "Ballerina"],
  },
  {
    label: "Frontend",
    icon: PanelsTopLeft,
    description:
      "Accessible, responsive product interfaces built for real users.",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive design",
      "UI/UX implementation",
      "Accessibility",
    ],
  },
  {
    label: "Backend",
    icon: ServerCog,
    description:
      "Well-shaped services, integrations, identity, and business logic.",
    items: [
      "Node.js",
      "Spring Boot",
      "REST APIs",
      "API integrations",
      "Authentication",
      "Backend architecture",
    ],
  },
  {
    label: "Mobile",
    icon: Smartphone,
    description:
      "Cross-platform experiences with native-feeling interaction patterns.",
    items: ["React Native", "Expo", "Cross-platform mobile development"],
  },
  {
    label: "Data & services",
    icon: Database,
    description:
      "Practical data models and managed services selected for the product.",
    items: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "MSSQL",],
  },
  {
    label: "Cloud & delivery",
    icon: CloudCog,
    description:
      "Repeatable paths from commit to observable production software.",
    items: [
      "AWS",
      "Azure",
      "Vercel",
      "Cloudflare",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Git/GitHub",
      "CI/CD",
    ],
  },
];

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website development",
    description:
      "Modern, responsive, fast, and search-friendly websites designed around real business goals.",
    skills: ["UX", "React", "SEO"],
    icon: PanelsTopLeft,
  },
  {
    slug: "web-application-development",
    title: "Web applications",
    description:
      "Custom portals, dashboards, and business platforms built for usability and sustainable growth.",
    skills: ["Full-stack", "Architecture", "Cloud"],
    icon: Layers3,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile applications",
    description:
      "Cross-platform mobile products using React Native and modern mobile engineering practices.",
    skills: ["React Native", "Expo", "APIs"],
    icon: Smartphone,
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce",
    description:
      "Stores with product discovery, carts, checkout, payments, ordering, and customer-focused journeys.",
    skills: ["Commerce", "Payments", "Performance"],
    icon: ShoppingBag,
  },
  {
    slug: "api-integration",
    title: "API & system integration",
    description:
      "Secure APIs, third-party integrations, service connections, and business automation.",
    skills: ["REST", "OpenAPI", "Integration"],
    icon: Braces,
  },
  {
    slug: "software-consulting",
    title: "Consulting & architecture",
    description:
      "Technology selection, system planning, performance improvements, and delivery guidance.",
    skills: ["Strategy", "System design", "Delivery"],
    icon: Lightbulb,
  },
];

const bookCoverPaths: Record<string, string> = {
  "pragmatic-programmer": "/images/books/pragmatic-programmer.jpg",
  "clean-code": "/images/books/clean-code.jpg",
  "deep-work": "/images/books/deep-work.jpg",
  "diary-of-a-ceo": "/images/books/diary-ceo.jpg",
  "power-subconscious": "/images/books/power-of-mind.jpg",
  "leaders-eat-last": "/images/books/leaders-eat-last.jpg",
  "atomic-habits": "/images/books/atomic habits.jpg",
  "five-am-club": "/images/books/5am-club.jpg",
  "four-hour-workweek": "/images/books/work-week.jpg",
  "make-your-bed": "/images/books/make-your-bed.jpg",
  "win-inner-battles": "/images/books/win-inner-battles.jpg",
};

export const books: Book[] = [
  [
    "pragmatic-programmer",
    "The Pragmatic Programmer",
    "David Thomas & Andrew Hunt",
    "Engineering",
    "A practical guide to the habits and decisions behind durable software.",
    "Craft matters most when it becomes a repeatable way of thinking.",
    true,
  ],
  [
    "clean-code",
    "Clean Code",
    "Robert C. Martin",
    "Engineering",
    "Principles for making software easier to read, change, and maintain.",
    "Clarity is an engineering feature, not cosmetic polish.",
    true,
  ],
  [
    "deep-work",
    "Deep Work",
    "Cal Newport",
    "Focus",
    "A case for protecting focused attention in a distracted world.",
    "The best technical work needs uninterrupted thinking time.",
    true,
  ],
  [
    "diary-of-a-ceo",
    "The Diary of a CEO",
    "Steven Bartlett",
    "Leadership",
    "Lessons about self-awareness, teams, and building over the long term.",
    "Leadership starts with honest feedback loops.",
    false,
  ],
  [
    "power-subconscious",
    "The Power of Your Subconscious Mind",
    "Joseph Murphy",
    "Mindset",
    "An exploration of how repeated thoughts influence action and belief.",
    "The stories we rehearse shape the work we attempt.",
    false,
  ],
  [
    "leaders-eat-last",
    "Leaders Eat Last",
    "Simon Sinek",
    "Leadership",
    "A people-first perspective on trust, safety, and effective teams.",
    "Strong teams form where people feel safe to contribute.",
    true,
  ],
  [
    "atomic-habits",
    "Atomic Habits",
    "James Clear",
    "Systems",
    "A clear framework for turning small choices into lasting systems.",
    "Reliable progress is usually designed, not willed into existence.",
    true,
  ],
  [
    "five-am-club",
    "The 5 AM Club",
    "Robin Sharma",
    "Performance",
    "A story-driven approach to routines, focus, and personal discipline.",
    "Protecting the first hour can change the quality of the whole day.",
    false,
  ],
  [
    "four-hour-workweek",
    "The 4-Hour Workweek",
    "Timothy Ferriss",
    "Business",
    "Ideas for questioning default workflows and designing leverage.",
    "Automation is valuable when it returns attention to higher-order work.",
    false,
  ],
  [
    "make-your-bed",
    "Make Your Bed",
    "William H. McRaven",
    "Discipline",
    "Short lessons connecting everyday discipline with resilience.",
    "Small completed actions create momentum under pressure.",
    false,
  ],
  [
    "win-inner-battles",
    "Win Your Inner Battles",
    "Darius Foroux",
    "Mindset",
    "A direct reflection on fear, confidence, and purposeful action.",
    "Courage grows through deliberate action, not perfect certainty.",
    false,
  ],
].map(
  ([
    slug,
    title,
    author,
    category,
    description,
    personalTakeaway,
    featured,
  ]) => ({
    slug: String(slug),
    title: String(title),
    author: String(author),
    category: String(category),
    description: String(description),
    personalTakeaway: String(personalTakeaway),
    featured: Boolean(featured),
    coverUrl: bookCoverPaths[String(slug)],
  }),
);

export const education = {
  degree: "BSc (Hons) Computer Science & Software Engineering",
  institution: "University of Bedfordshire, United Kingdom",
  result: "First-Class Honours",
  year: "2021 - 2024",
  leadership: [
    "Vice President · SLIIT City UNI Alumni Association",
    "Former Captain · SLIIT City UNI Athletics Team",
  ],
  school: {
    qualifications: "GCE Ordinary Level / GCE Advanced Level",
    institution: "St. Peter's College, Colombo 04, Sri Lanka",
    year: "2007 - 2020",
    leadership: [
      "Vice President / Concertmaster · Peterite Orchestra & Choir",
      "Assistant Secretary · Peterite Maths & Science Society",
    ],
  },
};
