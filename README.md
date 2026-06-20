# Harshit Maheshwari — Portfolio

A premium, recruiter-focused portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Glassmorphism dark theme** with custom design tokens
- **Framer Motion animations**: scroll-triggered reveals, loading screen, page transitions
- **Custom cursor** with laggy ring follower
- **Particle canvas** background with connected dot network
- **Mouse-following gradient** spotlight
- **Typewriter hero** with animated role cycling
- **Animated stat counters**
- **3D hover effect** on project cards
- **Skill progress bars** with category tabs
- **Timeline layouts** for education and experience
- **Project filtering** by category
- **Scroll progress indicator**
- **Back-to-top button**
- **Responsive** — mobile, tablet, desktop
- **SEO optimized** with metadata

---

## 📁 Folder Structure

```
harshit-portfolio/
├── public/
│   ├── resume.pdf              ← ⚠️ Replace with your actual resume PDF
│   └── images/
│       └── profile.jpg         ← ⚠️ Replace with your profile photo
├── src/
│   ├── app/
│   │   ├── globals.css         ← Global styles & CSS variables
│   │   ├── layout.tsx          ← Root layout + SEO metadata
│   │   └── page.tsx            ← Main page assembling all sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      ← Sticky nav with active section detection
│   │   │   └── Footer.tsx      ← Footer with social links
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx
│   │       ├── BackToTop.tsx
│   │       ├── CustomCursor.tsx
│   │       ├── LoadingScreen.tsx
│   │       ├── MouseGradient.tsx
│   │       ├── ParticleCanvas.tsx
│   │       ├── ScrollProgress.tsx
│   │       ├── SectionHeading.tsx
│   │       └── SectionWrapper.tsx
│   ├── hooks/
│   │   ├── useTypewriter.ts
│   │   ├── useScrollProgress.ts
│   │   └── useMousePosition.ts
│   └── lib/
│       ├── data.ts             ← ⚠️ All resume data — edit this first
│       └── utils.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Local Setup

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Steps

```bash
# 1. Clone or extract the project
cd harshit-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/your-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your portfolio is live in ~60 seconds 🚀

---

## 🔧 Customization Guide

### 1. Replace Your Resume PDF

Place your resume PDF at:
```
public/resume.pdf
```
The "Download Resume" buttons across the site will automatically link to this file.

### 2. Add Your Profile Photo

Place your photo at:
```
public/images/profile.jpg
```
Then update `AboutSection.tsx` — replace the emoji placeholder `👨‍💻` with:
```jsx
<Image
  src="/images/profile.jpg"
  alt="Harshit Maheshwari"
  fill
  className="object-cover"
/>
```
Also add `import Image from "next/image"` at the top.

### 3. Update Resume Data

All content lives in one file:
```
src/lib/data.ts
```
Edit the exported constants:
- `personalInfo` — name, email, phone, GitHub, LinkedIn
- `roles` — typewriter strings in hero
- `education` — degrees and courses
- `skills` — all skill categories with levels (0–100)
- `projects` — project cards (add/remove/edit freely)
- `experience` — work experience
- `achievements` — hackathons, awards, patents
- `certifications` — cert cards
- `stats` — the animated counters in hero

### 4. Add Live Project Links

In `src/lib/data.ts`, find each project and set `live`:
```ts
live: "https://your-project.vercel.app",  // or null if no live demo
```

### 5. Connect Contact Form

The contact form currently simulates sending. To wire it to a real backend:

**Option A — Resend (recommended)**
```bash
npm install resend
```
Create `src/app/api/contact/route.ts` using Resend's API, then update `ContactSection.tsx` to POST to `/api/contact`.

**Option B — Formspree**
Replace the form's `onSubmit` handler with a `fetch` POST to your Formspree endpoint.

### 6. Update Colors

All colors are CSS variables in `src/app/globals.css`:
```css
:root {
  --accent: #38BDF8;    /* primary blue */
  --accent-2: #818CF8;  /* purple */
  --accent-3: #34D399;  /* green */
}
```

---

## 📦 Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 15 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| clsx + tailwind-merge | Conditional classes |

---

## ⚡ Performance

- Static site generation (SSG) — no server needed
- First Load JS: ~167 kB (includes all animations)
- Optimized CSS with `critters`
- `next/image` ready for profile photo optimization
- Reduced motion respected via `@media (prefers-reduced-motion)`

---

## 📄 License

Personal portfolio — all rights reserved. Feel free to use as inspiration but please don't deploy as-is with my personal information.
