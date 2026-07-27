# Sachin Akash — Personal Portfolio

A production-oriented portfolio for Sachin Akash: software engineer, product builder, and Co-Founder & Director at Evantra Labs. The site is designed as a quiet engineering observatory with an amber-on-graphite visual system, practical information architecture, reusable project case studies, and an accessible command terminal.

## Technology stack

- React 19 and TypeScript
- Vite
- Tailwind CSS 4 through the official Vite plugin
- React Router
- Lucide React icons
- Framer Motion for limited entrance transitions
- CSS custom properties for dark, light, and system-aware themes

## Local development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Project structure

```text
src/
  components/       Shared UI, header, terminal, forms, and project visuals
  data/             Typed portfolio content and central personal configuration
  lib/              Terminal parser and contact service adapter
  pages/            Home, project index, case study, résumé, and 404 routes
  index.css         Tailwind import, visual system, and responsive styles
public/
  images/brand/     Primary navigation, favicon, and sharing logo
  images/profile/   Portrait asset
  documents/        Résumé PDF location
  robots.txt
  sitemap.xml
```

## Update personal information

All primary personal details are in `src/data/portfolio.ts`, inside the `profile` object. The public domain, email address, social profiles, experience dates, graduation year, and résumé are configured. The remaining optional placeholder is:

- `YOUR_PHONE_NUMBER`

The same file contains experience, projects, skills, services, education, and reading data so repeated UI never needs manual editing.

## Replace or adjust the profile image

The active image is `public/images/profile/sachin-profile.jpeg`. Replace it while keeping the same filename, or update `profile.profileImage`. The portrait crop is controlled by `profile.profileImagePosition`; for example, `50% 28%` moves the visible crop toward the subject’s face.

The primary brand artwork is `public/images/brand/sachin-akash-logo.png`. Its path is stored as `profile.brandLogo` and is used by the navigation and footer. The browser tab uses the dedicated high-contrast `public/images/brand/favicon.png` asset.

## Project screenshots

Approved, compressed website screenshots are stored in `public/images/projects/`. Their paths and descriptive alt text are defined on each project in `src/data/portfolio.ts`, while `ProjectVisual` provides the shared responsive browser-preview presentation.

Keep future screenshots compressed as WebP or AVIF, provide descriptive alt text, and use only approved project imagery.

## Add a project

Add one typed object to the `projects` array in `src/data/portfolio.ts`. The project index, featured grid, route lookup, terminal listing, and next-project navigation all derive from this array automatically. Add the corresponding `project <slug>` command suggestion in `src/lib/terminal.ts` if desired.

## Books and cover sources

Books live in the `books` array. Each cover uses the [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers) by title. If the remote cover is missing, the card falls back to the site’s CSS-generated geometric cover, including title and author; no random image hosts are used. All summaries and takeaways in the repository are original portfolio copy.

## Social links and résumé

Update `profile.socials` in `src/data/portfolio.ts`. The downloadable CV is stored at:

```text
public/documents/sachin-akash-resume.pdf
```

The hero, terminal, résumé route, and footer use the central résumé URL.

## Contact form

Copy `.env.example` to `.env.local` and set:

```text
VITE_CONTACT_FORM_ENDPOINT=https://your-secure-form-endpoint.example
```

The browser sends JSON containing `name`, `email`, `company`, `inquiryType`, and `message`. The endpoint should validate input, rate-limit requests, keep email-provider secrets server-side, and return a successful 2xx response. Resend can be connected through a Vercel Function, Cloudflare Worker, or another server-side adapter. Never expose a Resend API key in a `VITE_` variable.

Until configured, the form honestly reports that delivery is unavailable and directs the owner to update the central contact configuration.

## SEO and deployment

Production metadata, canonical URLs, robots, and sitemap entries use `https://www.sachinakash.dev`. Static assets and client-side routes are compatible with common Vite hosting platforms. For Vercel, import the repository, keep the build command as `npm run build`, and use `dist` as the output directory. Add an SPA rewrite to `/index.html` for direct project-route visits.

Before publishing, add a bespoke social preview image and reference it with Open Graph and X metadata. The current metadata intentionally omits a generic image.

## Performance notes

- Keep the portrait and future screenshots compressed; prefer WebP or AVIF.
- Keep width and height attributes on content images.
- Avoid adding analytics or chat widgets without measuring their cost.
- The terminal is code-split and loaded only when needed.
- Motion is limited and automatically reduced for visitors who request reduced motion.
