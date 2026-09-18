# Portfolio Website — Product Requirements Document

**Project Type:** Personal Portfolio (Frontend-only)
**Author:** Wisam
**Version:** 1.0
**Date:** September 2026

---

## 1. Overview

### 1.1 Purpose
A personal portfolio website for an IT professional (software/network/systems background) to showcase projects, skills, and experience to recruiters, clients, and collaborators. The site must be built and hosted entirely on free tools — no paid hosting, no paid backend, no paid domain required (a custom domain is optional and skippable).

### 1.2 Goals
- Present projects with rich detail (description, tech stack, screenshots, links) in a professional, easy-to-navigate format.
- Be fast, responsive, and accessible on desktop and mobile.
- Be maintainable by a single developer with minimal ongoing cost (ideally $0/month).
- Be easy to update when new projects are added (edit a data file, not the UI code).

### 1.3 Non-Goals
- No user accounts, comments, or authentication.
- No CMS admin panel (content is managed via code/config, not a database).
- No e-commerce or payment functionality.

### 1.4 Target Audience
- Recruiters and hiring managers doing a quick skim (30–60 seconds).
- Technical peers/collaborators wanting implementation details.
- Potential freelance/consulting clients.

---

## 2. Why Frontend-Only

A backend is unnecessary for a portfolio because:
- Content (projects, skills, bio) changes infrequently — it can live in static JSON/Markdown files bundled with the site.
- Contact forms can be handled by free third-party form services (Formspree, Web3Forms) without a custom backend.
- Static hosting (GitHub Pages, Vercel, Netlify, Cloudflare Pages) is free, requires no server maintenance, and has excellent uptime and CDN performance.
- Eliminates recurring cost and security surface (no server to patch, no database to back up).

If a backend is added later (e.g., a visitor-counter API, a blog with dynamic comments), it can be layered on without rebuilding the frontend, since content stays decoupled.

---

## 3. Core Features (Functional Requirements)

### 3.1 Must-Have (MVP)
| # | Feature | Description |
|---|---------|-------------|
| F1 | Landing / Hero section | Name, role/title, short tagline, profile photo, links to CV/LinkedIn/GitHub |
| F2 | About section | Bio, background, education, current focus |
| F3 | Skills section | Grouped by category (languages, frameworks, tools, infra) with visual indicators |
| F4 | Project gallery | Grid/list of project cards: thumbnail, title, one-line summary, tech tags |
| F5 | Project detail view | Full description, problem/solution, role, tech stack, image gallery, live demo link, source code link |
| F6 | Contact section | Email, social links, optional contact form (via free form service) |
| F7 | Responsive design | Works on mobile, tablet, desktop |
| F8 | Dark/Light mode | Toggle, persisted in local storage |
| F9 | SEO basics | Meta tags, Open Graph tags, favicon, sitemap.xml |

### 3.2 Nice-to-Have (Post-MVP)
| # | Feature | Description |
|---|---------|-------------|
| N1 | Project filtering | Filter by tech tag/category |
| N2 | Timeline/Experience section | Work/education history as a vertical timeline |
| N3 | Downloadable CV (PDF) | Static file link |
| N4 | Animations | Scroll-reveal, hover transitions (subtle, performance-conscious) |
| N5 | Blog | Markdown-based static blog (e.g., using MDX) for technical write-ups |
| N6 | Analytics | Free privacy-respecting analytics (e.g., Cloudflare Web Analytics, Plausible free-tier alternatives, or GoatCounter) |
| N7 | i18n | English/Indonesian language toggle |

### 3.3 Content Data Model
Each project entry should be structured data (not hardcoded HTML), e.g.:

```json
{
  "id": "tbconnect",
  "title": "TBConnect",
  "summary": "TB patient monitoring platform for community health workers",
  "description": "Full markdown or rich-text description...",
  "role": "Full-stack Developer",
  "period": "2025 - 2026",
  "techStack": ["Flutter", "Supabase", "PostgreSQL"],
  "category": "Mobile App",
  "images": ["/images/tbconnect/1.png", "/images/tbconnect/2.png"],
  "liveUrl": "https://...",
  "repoUrl": "https://github.com/...",
  "featured": true
}
```

This lets new projects be added by editing one JSON/TS file and dropping images into a folder — no UI code changes needed.

---

## 4. Non-Functional Requirements

- **Performance:** Lighthouse score ≥ 90 on Performance, Accessibility, Best Practices, SEO. Images optimized/lazy-loaded.
- **Cost:** $0/month recurring. Custom domain (~$10-15/year) is the only optional paid item.
- **Accessibility:** Semantic HTML, sufficient color contrast (WCAG AA), keyboard navigable, alt text on all images.
- **Maintainability:** Adding a new project should take under 10 minutes (edit data file + add images).
- **Browser support:** Latest 2 versions of Chrome, Firefox, Safari, Edge.
- **Load time:** First Contentful Paint under 1.5s on a typical connection.

---

## 5. Recommended Tech Stack (100% Free)

### 5.1 Framework
- **Next.js (App Router, Static Export)** or **Astro** — both free, open-source.
  - **Recommendation: Astro.** For a mostly-static content site like a portfolio, Astro ships zero JS by default ("islands architecture"), which gives better performance scores than Next.js for this use case, while still allowing React/Vue components where interactivity is needed (e.g., theme toggle, filters).
  - If you're more comfortable with React and want future flexibility (e.g., adding a blog with dynamic features), **Next.js with `output: 'export'`** is a solid free alternative.

### 5.2 Styling
- **Tailwind CSS** — free, utility-first, fast to iterate, pairs well with either framework.

### 5.3 Content
- Project data: local **JSON or TypeScript** files (`/src/data/projects.ts`).
- Optional: **MDX** for rich project descriptions/blog posts, still free and static.

### 5.4 Icons & Fonts
- **Lucide Icons** or **Heroicons** (free, open-source).
- **Google Fonts** (free) or self-hosted variable fonts via **Fontsource** (npm package, avoids Google Fonts privacy concerns and improves load time).

### 5.5 Images
- Store optimized images in the repo (`/public/images`) or use a free image CDN like **Cloudinary free tier** (25 credits/month) if you want on-the-fly resizing.
- Use `astro:assets` or `next/image` for automatic optimization/lazy-loading if using those frameworks.

### 5.6 Contact Form (no backend)
- **Formspree** (free tier: 50 submissions/month) or **Web3Forms** (free, unlimited with reasonable use) — both let a static HTML form POST directly without any server code.

### 5.7 Hosting & CI/CD
- **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages** — all free for personal projects, all support automatic deploy-on-push from GitHub.
  - **Recommendation: Cloudflare Pages** — generous free tier, fast global CDN, unlimited bandwidth, and easy custom domain setup if you get one later.

### 5.8 Version Control
- **GitHub** (free, public or private repo).

### 5.9 Domain (Optional)
- Free subdomain from your host (e.g., `wisam.pages.dev`, `wisam.vercel.app`) is sufficient for MVP.
- A custom domain is optional and the only non-free component (~$10-15/yr from Namecheap/Cloudflare Registrar).

### 5.10 Analytics (Optional, Free)
- **Cloudflare Web Analytics** (free, no cookies, privacy-friendly) if hosting on Cloudflare Pages.
- **GoatCounter** (free, open-source, privacy-friendly) as an alternative.

### 5.11 Summary Table

| Layer | Choice | Cost |
|---|---|---|
| Framework | Astro (or Next.js static export) | Free |
| Styling | Tailwind CSS | Free |
| Content | Local JSON/MDX | Free |
| Icons/Fonts | Lucide + Fontsource | Free |
| Form | Web3Forms / Formspree | Free |
| Hosting | Cloudflare Pages | Free |
| Version Control | GitHub | Free |
| Analytics | Cloudflare Web Analytics | Free |
| Domain | Free subdomain (custom optional) | Free / ~$12/yr |

---

## 6. Design Guidelines

### 6.1 Visual Direction
- **Style:** Clean, modern, developer-portfolio aesthetic — avoid generic Bootstrap-template look. Favor whitespace, clear type hierarchy, and one or two accent colors rather than a rainbow of gradients.
- **Tone:** Professional but not sterile — a small amount of personality (in copywriting, a subtle animation, or an accent color) helps you stand out from templated portfolios.

### 6.2 Color System
- Choose a neutral base (near-black/near-white, not pure `#000`/`#FFF`) plus **one accent color** tied to your personal brand.
- Support both light and dark themes; define colors as CSS variables/design tokens so theme-switching doesn't require duplicating styles.
- Maintain WCAG AA contrast ratios (4.5:1 for body text) in both themes.

### 6.3 Typography
- One display/heading font (can have personality) + one body font (must be highly readable) — or a single well-designed variable font used at different weights.
- Type scale: use a consistent modular scale (e.g., 1.25 ratio) rather than arbitrary sizes.
- Line length: cap body text at ~65-75 characters per line for readability.

### 6.4 Layout
- Mobile-first responsive grid (CSS Grid/Flexbox via Tailwind).
- Consistent spacing scale (Tailwind's default 4px-based scale works well).
- Project cards: consistent aspect ratio for thumbnails so the grid looks uniform even with different source images.

### 6.5 Imagery
- Use real screenshots/mockups of your projects, not stock photography, wherever possible.
- Compress all images (WebP/AVIF preferred) and provide meaningful alt text for accessibility and SEO.
- Consider a consistent frame/mockup style (e.g., browser chrome or device frame) across all project screenshots for visual cohesion.

### 6.6 Motion
- Keep animations subtle and purposeful: fade/slide-in on scroll, smooth theme transition, hover states on interactive elements.
- Respect `prefers-reduced-motion`.
- Avoid animation that delays the user from reading content (no more than ~300-400ms transitions).

### 6.7 Navigation
- Sticky/fixed header with smooth-scroll anchor links (Home, About, Skills, Projects, Contact) for a single-page layout, or a simple top nav if using multiple pages (e.g., separate `/projects/[slug]` pages, which is better for SEO and shareable project links).
- **Recommendation:** Use multi-page routing for project details (`/projects/tbconnect`) rather than a modal/single-page-anchor approach — this gives each project a shareable, indexable URL, which matters if you want recruiters to link directly to a specific project.

---

## 7. Information Architecture / Site Map

```
/                    → Landing (Hero, About, Skills, Featured Projects, Contact)
/projects            → Full project gallery (all projects, filterable)
/projects/[slug]     → Individual project detail page
/cv.pdf              → Static downloadable CV (optional)
```

---

## 8. Coding Standards

### 8.1 Project Structure (Astro example)
```
/src
  /components       → Reusable UI components (Card, Button, Navbar, ThemeToggle)
  /layouts          → Page layout wrappers (BaseLayout, ProjectLayout)
  /pages            → File-based routes
  /data             → projects.ts, skills.ts, experience.ts (typed content)
  /styles           → global.css, Tailwind config
  /assets           → images, icons
/public             → static files served as-is (favicon, cv.pdf, robots.txt)
```

### 8.2 General Principles
- **TypeScript everywhere** — type your project/skill data models; avoid `any`.
- **Component-driven:** build small, single-responsibility components (`ProjectCard`, `SkillBadge`, `SectionHeading`) rather than large monolithic page files.
- **Single source of truth for content:** all project/skill/experience data lives in `/src/data/*.ts`, typed with interfaces (e.g., `interface Project { ... }`). Pages/components only render this data — never hardcode project details inline in JSX/Astro templates.
- **No inline styles:** use Tailwind utility classes or scoped component styles; avoid magic numbers — use design tokens (spacing/color scale) from the Tailwind config.
- **Accessibility as a requirement, not an afterthought:** every image has `alt`, every interactive element is keyboard-reachable, every button/link has a discernible accessible name.

### 8.3 Naming Conventions
- Components: `PascalCase` (`ProjectCard.astro`, `ThemeToggle.tsx`)
- Files/folders (non-component): `kebab-case` (`project-data.ts`)
- CSS classes (if any custom ones beyond Tailwind): `kebab-case`, BEM-like for anything complex.
- Data fields: `camelCase` (matches the JSON model in §3.3).

### 8.4 Git Workflow
- `main` branch is always deployable (auto-deploys via CI/CD to Cloudflare Pages/Vercel).
- Use feature branches for larger changes (`feat/project-filtering`), merge via PR even if solo — keeps a clean history and lets CI checks run before merge.
- Commit messages: Conventional Commits style (`feat:`, `fix:`, `docs:`, `chore:`) for a clean, readable log.

### 8.5 Linting & Formatting
- **ESLint** + **Prettier** (both free/open-source) configured and run on pre-commit (via Husky + lint-staged, also free).
- Enforce consistent formatting so diffs stay clean and reviewable.

### 8.6 Performance Practices
- Lazy-load below-the-fold images (`loading="lazy"`).
- Use the framework's built-in image optimization (`astro:assets`'s `<Image />` or `next/image`).
- Avoid client-side JavaScript unless a component genuinely needs interactivity (theme toggle, filters) — this is Astro's core strength (islands architecture) but applies as a discipline in any framework.
- Audit with Lighthouse before each major release.

### 8.7 Testing (Lightweight, since this is a static site)
- Manual QA checklist per release: responsive breakpoints, dark/light mode, all links resolve, Lighthouse scores, broken-image check.
- Optional: **Playwright** (free) for basic smoke tests (page loads, nav links work) if you want automated regression coverage.

---

## 9. Milestones (Suggested)

| Phase | Deliverable |
|---|---|
| 1 | Repo setup, framework + Tailwind config, deploy "Hello World" to Cloudflare Pages |
| 2 | Hero, About, Skills sections (static content) |
| 3 | Project data model + project gallery + project detail pages |
| 4 | Dark/light mode, responsive polish, accessibility pass |
| 5 | Contact form integration, SEO meta tags, sitemap |
| 6 | Lighthouse optimization pass, cross-browser QA, launch |
| 7 (optional) | Blog, filtering, animations, analytics |

---

## 10. Open Questions / Decisions Needed
- Single-page (anchor nav) vs. multi-page architecture — **recommended: multi-page** for SEO/shareability (see §6.7).
- Astro vs. Next.js — **recommended: Astro** for best performance on a content-heavy, low-interactivity site (see §5.1).
- Whether to include a blog now or defer to a later phase.
- Whether a custom domain is in scope (only non-free item in the entire stack).
