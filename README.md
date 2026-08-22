# Rakheeb Shaikh — Portfolio

A recruiter-focused portfolio built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`. It can be deployed to Vercel,
Netlify, GitHub Pages, or Firebase Hosting as a static site.

## Things to personalize before publishing

- **Resume file** — add your PDF resume at `public/resume.pdf` (the hero's
  "Download Résumé" button already links to `/resume.pdf`).
- **Contact links** — update the email, LinkedIn, and LeetCode URLs in
  `src/components/Contact.jsx` and `src/components/Hero.jsx`.
- **Contact form backend** — the form in `src/components/Contact.jsx` is
  wired to submit to a Formspree endpoint. Create a form at
  [formspree.io](https://formspree.io), then paste your endpoint into the
  `FORM_ENDPOINT` constant at the top of that file. Until then, the form
  will show an honest "not connected yet" message instead of pretending to
  send.
- **Project data** — all project copy lives in `src/data/projects.js` and
  `src/data/skills.js`, so you can update details without touching layout
  code.

## Project structure

```
src/
  components/   Navbar, Hero, About, Skills, Projects, ProjectCard,
                FeaturedProject, DSA, Journey, Contact, Footer, Reveal
  data/         projects.js, skills.js — single source of truth for content
  hooks/        useReveal.js — scroll-reveal IntersectionObserver hook
```
