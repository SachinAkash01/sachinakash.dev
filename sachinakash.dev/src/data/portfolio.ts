import type { LucideIcon } from 'lucide-react'
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
} from 'lucide-react'

export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  number: string
  title: string
  shortTitle: string
  url: string
  category: string
  industry: string
  summary: string
  objective: string
  problem: string
  solution: string
  role: string
  features: string[]
  designApproach: string
  technicalApproach: string
  technologies: string[]
  challenges: string[]
  outcome: string
  accent: string
}

export type Experience = {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

export type Service = {
  title: string
  description: string
  skills: string[]
  icon: LucideIcon
}

export type Book = {
  slug: string
  title: string
  author: string
  coverUrl: string
  category: string
  description: string
  personalTakeaway: string
  featured: boolean
}

export const profile = {
  name: 'Sachin Akash',
  monogram: 'SA',
  eyebrow: 'Software Engineer · Product Builder · CTO',
  title: 'Software Engineer, Product Builder, and Co-Founder & CTO at Evantra Labs',
  headline: 'I design and ship software that turns ideas into reliable digital products.',
  summary:
    'I’m a software engineer and Co-Founder & CTO at Evantra Labs, with experience building web platforms, mobile applications, APIs, developer tools, cloud solutions, and production-ready software for businesses.',
  location: 'Colombo, Sri Lanka',
  email: 'YOUR_EMAIL_ADDRESS',
  phone: 'YOUR_PHONE_NUMBER',
  availability: 'Open to thoughtful engineering roles and product collaborations',
  websiteUrl: 'https://YOUR_PRODUCTION_DOMAIN',
  resumeUrl: '/documents/sachin-akash-resume.pdf',
  profileImage: '/images/profile/sachin-profile.jpeg',
  profileImagePosition: '50% 28%',
  socials: [
    { label: 'GitHub', href: 'https://github.com/SachinAkash01' },
    { label: 'LinkedIn', href: 'YOUR_LINKEDIN_URL' },
  ] satisfies SocialLink[],
}

export const overview = [
  { icon: Layers3, title: 'Product engineering', text: 'From product framing and UX decisions to resilient implementation.' },
  { icon: Code2, title: 'Full-stack delivery', text: 'Modern web and mobile experiences backed by practical systems.' },
  { icon: Braces, title: 'APIs & architecture', text: 'Clear contracts, maintainable services, and software designed to evolve.' },
  { icon: CloudCog, title: 'Cloud & operations', text: 'Production deployments, delivery pipelines, observability, and performance.' },
]

export const expertise = [
  {
    label: 'Engineering',
    icon: GitBranch,
    items: ['Full-stack development', 'Backend engineering', 'API development', 'System architecture', 'Developer tooling', 'Open source'],
  },
  {
    label: 'Product development',
    icon: PanelsTopLeft,
    items: ['Web applications', 'Mobile applications', 'E-commerce', 'Business systems', 'SaaS products', 'AI-assisted applications'],
  },
  {
    label: 'Platform & delivery',
    icon: Rocket,
    items: ['Cloud infrastructure', 'DevOps & CI/CD', 'Performance', 'Security practices', 'Testing', 'Production deployment'],
  },
]

export const experiences: Experience[] = [
  {
    role: 'Co-Founder & CTO',
    company: 'Evantra Labs',
    period: 'CURRENT · DATES TO ADD',
    summary: 'Leading the technical direction behind reliable digital products for organisations and growing businesses.',
    highlights: ['Technical strategy and architecture', 'Web, mobile, and custom system delivery', 'Client project leadership', 'Product development and engineering mentorship'],
  },
  {
    role: 'Software Engineer',
    company: 'WSO2',
    period: 'DATES TO ADD',
    summary: 'Built developer-facing software in the Ballerina and API ecosystem with an emphasis on engineering quality.',
    highlights: ['Developer tooling and OpenAPI engineering', 'API development and open-source contribution', 'Testing and product quality', 'Cross-functional engineering collaboration'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'WSO2',
    period: 'DATES TO ADD',
    summary: 'Developed a strong foundation in production engineering practices and collaborative open-source workflows.',
    highlights: ['Software engineering fundamentals', 'Testing and development workflows', 'Open-source practices', 'Team collaboration'],
  },
]

export const projects: Project[] = [
  {
    slug: 'sherees-cakes', number: '01', shortTitle: 'Sheree’s Cakes', title: 'Sheree’s Cakes E-Commerce Platform',
    url: 'https://www.shereescakes.lk/', category: 'E-commerce · Food and Retail', industry: 'Food, retail, and online ordering',
    summary: 'A premium e-commerce experience that makes discovering, customising, and ordering cakes straightforward on any device.',
    objective: 'Create a polished online storefront that translates the care of a boutique cake business into a clear, trustworthy digital ordering journey.',
    problem: 'Cake orders combine catalogue products, custom requests, delivery choices, payments, and time-sensitive customer expectations. Those paths needed to feel like one coherent experience.',
    solution: 'A responsive commerce platform with focused product discovery, a low-friction cart and checkout, flexible fulfilment options, and dedicated custom-order enquiries.',
    role: 'Product engineering, interface implementation, commerce flow design, integrations, and production delivery.',
    features: ['Product catalogue, search, and filters', 'Cart and checkout flows', 'Online payment and bank transfer options', 'Delivery and store pickup', 'Custom cake enquiries', 'Cloudflare Turnstile protection', 'Order confirmation and legal pages', 'Responsive, performance-focused UI'],
    designApproach: 'Warm editorial product presentation, strong photography areas, and clear order states keep the experience inviting without sacrificing utility.',
    technicalApproach: 'A component-led TypeScript frontend, validated forms, safe payment hand-offs, responsive media, and deployment practices designed for reliability.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Payment integration', 'Cloudflare Turnstile', 'Vercel'],
    challenges: ['Supporting both standard and highly customised orders', 'Keeping multi-step purchasing clear on mobile', 'Balancing rich product presentation with speed'],
    outcome: 'A credible digital storefront that gives customers multiple ways to order while reducing ambiguity throughout the buying journey.', accent: '#d49b5b',
  },
  {
    slug: 'winchild', number: '02', shortTitle: 'Winchild', title: 'Winchild Preschool and Daycare Website',
    url: 'https://www.winchild.lk/', category: 'Education · Institutional Website', industry: 'Early education and childcare',
    summary: 'A welcoming institutional website that helps parents understand programmes, facilities, events, and the values behind the preschool.',
    objective: 'Give prospective families an informative, reassuring place to evaluate Winchild and make contact with confidence.',
    problem: 'Parents need both practical programme details and strong trust signals. Important information had to remain easy to scan across a broad range of devices.',
    solution: 'A parent-centred information architecture supported by accessible programme content, proof points, galleries, an annual event calendar, and direct contact paths.',
    role: 'Information architecture, responsive interface engineering, content presentation, SEO, and production delivery.',
    features: ['Institutional overview', 'Registration certificate presentation', 'Programme and facility information', 'Event galleries and annual calendar', 'Parent-focused content', 'Contact form', 'SEO and responsive design', 'Performance optimisation'],
    designApproach: 'Friendly visual cues, calm spacing, and an intuitive content hierarchy make detailed information feel approachable rather than institutional.',
    technicalApproach: 'Reusable content sections, responsive image handling, semantic page structure, and a lightweight frontend focused on search visibility and fast navigation.',
    technologies: ['React', 'TypeScript', 'Responsive UI', 'SEO', 'Form integration', 'Performance optimisation'],
    challenges: ['Presenting trust-building detail without overwhelming parents', 'Organising programme and event content', 'Maintaining warmth across mobile and desktop'],
    outcome: 'A clear, modern digital front door that helps families understand the institution and take the next step.', accent: '#7ba1a6',
  },
  {
    slug: 'capital-bridge', number: '03', shortTitle: 'Capital Bridge', title: 'Capital Bridge Microfinance Company Website',
    url: 'https://capitalbridge.lk/', category: 'Finance · Corporate Website', industry: 'Microfinance and financial services',
    summary: 'A trust-led corporate website that presents financial services clearly and makes it easier for prospective customers to connect.',
    objective: 'Build a professional digital presence that communicates credibility while keeping service discovery and enquiries uncomplicated.',
    problem: 'Financial-service websites must establish trust quickly, explain products in plain language, and guide users toward safe, appropriate contact options.',
    solution: 'A structured corporate experience with clear service navigation, confidence-building content, direct calls to action, and consistent business information.',
    role: 'UX direction, frontend engineering, service content structure, optimisation, and secure deployment.',
    features: ['Corporate brand presentation', 'Financial service information', 'Trust-focused interface', 'Clear calls to action', 'Contact integration', 'SEO', 'Mobile responsiveness', 'Secure deployment'],
    designApproach: 'Measured typography, disciplined colour, and clear hierarchy support a calm, professional experience appropriate for a finance organisation.',
    technicalApproach: 'Semantic responsive components, robust contact paths, optimised assets, structured metadata, and production deployment safeguards.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SEO', 'Secure deployment', 'Form integration'],
    challenges: ['Communicating trust without visual clutter', 'Making service content accessible to broad audiences', 'Maintaining performance across content-heavy pages'],
    outcome: 'A stronger corporate presence that makes services easier to understand and the organisation easier to reach.', accent: '#7390c4',
  },
  {
    slug: 'nutri', number: '04', shortTitle: 'Nutri', title: 'Nutri High-Protein Meal Ordering Website',
    url: 'https://nutri-seven-beta.vercel.app/', category: 'Food Technology · E-commerce', industry: 'Nutrition, food technology, and e-commerce',
    summary: 'A mobile-first ordering experience for a Sri Lankan food brand built around protein-focused products and convenient discovery.',
    objective: 'Turn Nutri’s nutritional positioning into a distinctive product experience that makes meal exploration and ordering simple.',
    problem: 'The brand needed to communicate nutrition, appetite appeal, and convenience simultaneously—especially for customers browsing from phones.',
    solution: 'A focused product catalogue with modern food-brand presentation, concise nutritional cues, and clear ordering and contact actions.',
    role: 'Product presentation, responsive UI engineering, ordering journey design, and deployment.',
    features: ['Protein-focused product presentation', 'Product catalogue', 'Online ordering flow', 'Mobile-first browsing', 'Nutritional positioning', 'Brand-led interface', 'Contact and social integration', 'Performance optimisation'],
    designApproach: 'Bold product framing and concise nutrition information create energy while a simple page rhythm keeps ordering practical.',
    technicalApproach: 'Responsive TypeScript components, efficient asset loading, explicit product actions, and a deployment setup suited to rapid iteration.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive commerce', 'Vercel'],
    challenges: ['Balancing nutritional detail with an appetising presentation', 'Keeping product actions prominent on small screens', 'Creating a recognisable identity without heavy media'],
    outcome: 'A modern, convenient storefront foundation that brings the brand’s high-protein proposition into a clear digital experience.', accent: '#88a861',
  },
]

export const skillGroups = [
  { label: 'Languages', icon: Code2, description: 'Core tools for services, interfaces, automation, and developer platforms.', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'Go', 'Ballerina'] },
  { label: 'Frontend', icon: PanelsTopLeft, description: 'Accessible, responsive product interfaces built for real users.', items: ['React', 'Next.js', 'Tailwind CSS', 'Responsive design', 'UI/UX implementation', 'Accessibility'] },
  { label: 'Backend', icon: ServerCog, description: 'Well-shaped services, integrations, identity, and business logic.', items: ['Node.js', 'Spring Boot', 'REST APIs', 'API integrations', 'Authentication', 'Backend architecture'] },
  { label: 'Mobile', icon: Smartphone, description: 'Cross-platform experiences with native-feeling interaction patterns.', items: ['React Native', 'Expo', 'Cross-platform mobile development'] },
  { label: 'Data & services', icon: Database, description: 'Practical data models and managed services selected for the product.', items: ['PostgreSQL', 'MongoDB', 'Firebase'] },
  { label: 'Cloud & delivery', icon: CloudCog, description: 'Repeatable paths from commit to observable production software.', items: ['AWS', 'Azure', 'Vercel', 'Cloudflare', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'] },
]

export const services: Service[] = [
  { title: 'Website development', description: 'Modern, responsive, fast, and search-friendly websites designed around real business goals.', skills: ['UX', 'React', 'SEO'], icon: PanelsTopLeft },
  { title: 'Web applications', description: 'Custom portals, dashboards, and business platforms built for usability and sustainable growth.', skills: ['Full-stack', 'Architecture', 'Cloud'], icon: Layers3 },
  { title: 'Mobile applications', description: 'Cross-platform mobile products using React Native and modern mobile engineering practices.', skills: ['React Native', 'Expo', 'APIs'], icon: Smartphone },
  { title: 'E-commerce', description: 'Stores with product discovery, carts, checkout, payments, ordering, and customer-focused journeys.', skills: ['Commerce', 'Payments', 'Performance'], icon: ShoppingBag },
  { title: 'API & system integration', description: 'Secure APIs, third-party integrations, service connections, and business automation.', skills: ['REST', 'OpenAPI', 'Integration'], icon: Braces },
  { title: 'Consulting & architecture', description: 'Technology selection, system planning, performance improvements, and delivery guidance.', skills: ['Strategy', 'System design', 'Delivery'], icon: Lightbulb },
]

const openLibraryCover = (title: string) => `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-L.jpg?default=false`

export const books: Book[] = [
  ['pragmatic-programmer', 'The Pragmatic Programmer', 'David Thomas & Andrew Hunt', 'Engineering', 'A practical guide to the habits and decisions behind durable software.', 'Craft matters most when it becomes a repeatable way of thinking.', true],
  ['clean-code', 'Clean Code', 'Robert C. Martin', 'Engineering', 'Principles for making software easier to read, change, and maintain.', 'Clarity is an engineering feature, not cosmetic polish.', true],
  ['deep-work', 'Deep Work', 'Cal Newport', 'Focus', 'A case for protecting focused attention in a distracted world.', 'The best technical work needs uninterrupted thinking time.', true],
  ['diary-of-a-ceo', 'The Diary of a CEO', 'Steven Bartlett', 'Leadership', 'Lessons about self-awareness, teams, and building over the long term.', 'Leadership starts with honest feedback loops.', false],
  ['power-subconscious', 'The Power of Your Subconscious Mind', 'Joseph Murphy', 'Mindset', 'An exploration of how repeated thoughts influence action and belief.', 'The stories we rehearse shape the work we attempt.', false],
  ['leaders-eat-last', 'Leaders Eat Last', 'Simon Sinek', 'Leadership', 'A people-first perspective on trust, safety, and effective teams.', 'Strong teams form where people feel safe to contribute.', true],
  ['atomic-habits', 'Atomic Habits', 'James Clear', 'Systems', 'A clear framework for turning small choices into lasting systems.', 'Reliable progress is usually designed, not willed into existence.', true],
  ['five-am-club', 'The 5 AM Club', 'Robin Sharma', 'Performance', 'A story-driven approach to routines, focus, and personal discipline.', 'Protecting the first hour can change the quality of the whole day.', false],
  ['four-hour-workweek', 'The 4-Hour Workweek', 'Timothy Ferriss', 'Business', 'Ideas for questioning default workflows and designing leverage.', 'Automation is valuable when it returns attention to higher-order work.', false],
  ['make-your-bed', 'Make Your Bed', 'William H. McRaven', 'Discipline', 'Short lessons connecting everyday discipline with resilience.', 'Small completed actions create momentum under pressure.', false],
  ['win-inner-battles', 'Win Your Inner Battles', 'Darius Foroux', 'Mindset', 'A direct reflection on fear, confidence, and purposeful action.', 'Courage grows through deliberate action, not perfect certainty.', false],
].map(([slug, title, author, category, description, personalTakeaway, featured]) => ({
  slug: String(slug), title: String(title), author: String(author), category: String(category), description: String(description), personalTakeaway: String(personalTakeaway), featured: Boolean(featured), coverUrl: openLibraryCover(String(title)),
}))

export const education = {
  degree: 'BSc (Hons) Computer Science and Software Engineering',
  institution: 'University of Bedfordshire, United Kingdom',
  result: 'First-Class Honours',
  year: 'GRADUATION YEAR TO ADD',
  leadership: ['Vice President · SLIIT City Uni Alumni Association', 'Former Captain · SLIIT City UNI Athletics Team'],
}
