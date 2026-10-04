# MyWebsite

Personal portfolio of **Long Quan (Bennedict) Ton** — AI undergraduate at UTS & HCMUT, AI Engineering Intern at FlyRank AI, and Undergraduate AI Research Assistant at HCMUT (AITechLab – ML4U).

A static, client-side React app with no backend, deployed on Vercel. All content lives in typed data files under `src/data/`, so updating the site means editing data, not components.

## Pages

| Route | Page | Content source |
|---|---|---|
| `/` | Home — hero, about, featured projects, skills, contact | `src/pages/Home.tsx`, `src/data/projects.ts` |
| `/projects` | Projects & competitions, with a details sheet per project (outcomes, tech stack, certificate, posters) | `src/data/projects.ts` |
| `/journey` | Work experience and education (GPA, Dean's List) | `src/data/experience.ts`, `src/data/milestones.ts` |
| `/credentials` | Dean's List, professional certifications, short courses | `src/data/credentials.ts` |

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 19, TypeScript |
| Build | Vite 8 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 (theme tokens in `src/styles/index.css`) |
| Animation | Framer Motion |
| Icons | Lucide React + custom brand SVGs (`src/components/ui/TechLogos.tsx`) |
| Hosting | Vercel (SPA rewrite in `vercel.json`) |

## Project structure

```
public/
├── Long_Quan_Ton_CV.pdf        # The "Download CV" file — replace this to publish a new CV
├── favicon.svg, apple-touch-icon.png
└── assets/
    ├── images/<project>/       # Covers, screenshots and posters per project
    ├── images/certificates/    # honors/ · professional/ · hackathons/ · courses/
    ├── images/companies/       # Organiser and employer logos
    ├── images/portrait/
    └── videos/                 # Short, compressed project preview loops (WebM + MP4)
src/
├── components/
│   ├── layout/                 # Navbar, Footer, PageWrapper
│   └── ui/                     # ProjectMedia, CertificateFrame, Lightbox, AchievementBadge, ScrollReveal, TechLogos
├── context/ThemeContext.tsx    # Light / dark theme
├── data/                       # projects, experience, milestones, credentials
├── pages/                      # Home, Vault (projects), Journey, Education (credentials)
├── routes/index.tsx            # Animated route definitions
├── styles/index.css            # Theme tokens, certificate frames, mobile/iOS rules
└── types/index.ts              # Shared interfaces
```

`references/` is a local-only folder (gitignored) for source files, private documents and archived assets that are not deployed.

## Mobile

The layout is tuned for iPhone: safe-area padding for the notch and home indicator (`viewport-fit=cover`), a full-screen project sheet with a fixed close button, a scroll-locked mobile menu, theme-aware Safari toolbar colours, and lighter animations on small screens (no backdrop or animated blur filters).

## Getting started

```bash
npm install
npm run dev      # Start the dev server
npm run build    # Type-check and build for production
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Adding a project

Add an entry to `src/data/projects.ts`. Put its images under `public/assets/images/<project-id>/`. Optional fields: `achievement` (badge), `certificate` (shown in the details sheet), `posters`, and a video `hoverMedia` (`src` MP4, `webmSrc`, `poster`). To feature it on the home page, add its id to `FEATURED_PROJECT_IDS` in `src/pages/Home.tsx`.
