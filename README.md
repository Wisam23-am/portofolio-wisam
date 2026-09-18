# Wisam — Developer Portfolio Website

A modern, high-performance developer portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, designed in accordance with the [portfolio-prd.md](file:///C:/kerja/portofolio/portfolio-prd.md) requirements.

---

## 🚀 Key Features

- **⚡ Fast & Modern Architecture:** Built on Next.js App Router with 100% static HTML generation (SSG) for sub-second page loads.
- **🎨 Dark & Light Mode:** Seamless theme toggle with local storage persistence and system preference detection via `next-themes`.
- **📁 Content-Driven Architecture:** All profile, skills, experience, and project case studies live in typed data files under [`src/data/`](file:///C:/kerja/portofolio/src/data/) — add or update projects in under 5 minutes without touching UI components.
- **📱 Responsive & Accessible:** Fully mobile-first design with accessible ARIA semantics, WCAG AA contrast ratios, and keyboard navigation.
- **🔍 Full Project Gallery & Filter:** Search by keywords and filter projects dynamically by category (*Full Stack*, *Mobile App*, *DevOps & Systems*, *Cloud & API*) and technology tags.
- **📄 In-Depth Case Studies:** Dedicated multi-page URLs for every project (`/projects/[slug]`) featuring problem statements, technical solutions, architecture breakdowns, quantifiable metrics, and UI mockups.
- **📬 Interactive Contact Form:** Support for free third-party form services (Web3Forms / Formspree) with client-side feedback and validation.
- **🌐 Built-in SEO:** Automatic Open Graph tags, Twitter cards, dynamic `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)

---

## 📂 Project Structure

```text
├── public/
│   ├── images/
│   │   ├── avatar.svg            # Profile avatar image
│   │   ├── og-image.svg          # OpenGraph card preview
│   │   └── projects/             # Project mockup diagrams and previews
│   └── cv.pdf                    # Downloadable resume PDF
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global layout with ThemeProvider, Nav & Footer
│   │   ├── page.tsx              # Home landing page (Hero, About, Timeline, Skills, Projects, Contact)
│   │   ├── globals.css           # Tailwind CSS variables & themes
│   │   ├── not-found.tsx         # Custom 404 page
│   │   ├── robots.ts             # Dynamic robots.txt
│   │   ├── sitemap.ts            # Dynamic sitemap.xml generator
│   │   └── projects/
│   │       ├── page.tsx          # Filterable project gallery
│   │       └── [slug]/page.tsx   # Individual project detail case study page
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header with navigation & theme switch
│   │   ├── Footer.tsx            # Footer with links and copyright
│   │   ├── Hero.tsx              # Landing hero section
│   │   ├── About.tsx             # Bio and engineering philosophies
│   │   ├── Experience.tsx        # Career timeline & education
│   │   ├── Skills.tsx            # Categorized skills & proficiency bars
│   │   ├── FeaturedProjects.tsx  # Highlighted case study cards
│   │   ├── ProjectCard.tsx       # Reusable project card
│   │   ├── ProjectGallery.tsx    # Filter and search engine for projects
│   │   ├── Contact.tsx           # Contact form and direct links
│   │   ├── ThemeToggle.tsx       # Light/Dark/System theme switcher
│   │   └── icons/BrandIcons.tsx  # GitHub & LinkedIn SVG icons
│   ├── data/
│   │   ├── profile.ts            # Bio, social links, location, status
│   │   ├── projects.ts           # All project entries & case studies
│   │   ├── skills.ts             # Categorized technical skills
│   │   └── experience.ts         # Career timeline entries
│   └── types/
│       └── index.ts              # TypeScript interfaces
```

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Build for Production
```bash
npm run build
```

---

## 📝 How to Update Portfolio Content

To update the website content, edit the files in [`src/data/`](file:///C:/kerja/portofolio/src/data/):
- **Profile & Bio:** Edit [`src/data/profile.ts`](file:///C:/kerja/portofolio/src/data/profile.ts)
- **Projects & Case Studies:** Edit [`src/data/projects.ts`](file:///C:/kerja/portofolio/src/data/projects.ts)
- **Skills & Proficiency:** Edit [`src/data/skills.ts`](file:///C:/kerja/portofolio/src/data/skills.ts)
- **Work History:** Edit [`src/data/experience.ts`](file:///C:/kerja/portofolio/src/data/experience.ts)

---

## ☁️ Free Deployment ($0/month)

### Deploy to Vercel
1. Push the code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository — Next.js settings are detected automatically.
4. Click **Deploy**.

### Deploy to Cloudflare Pages
1. Push the code to GitHub.
2. In Cloudflare Dashboard, navigate to **Compute (Workers) > Pages > Connect to Git**.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
