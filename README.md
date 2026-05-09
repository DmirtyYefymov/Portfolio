# Dmytro Yefymov — Portfolio

Personal portfolio website.

**Live:** [dmytroyefymov.netlify.app](https://dmytroyefymov.netlify.app/)

## Tech Stack

- **Framework** — Next.js 16 (App Router, Turbopack)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + CSS Modules
- **Animations** — GSAP (ScrollTrigger, char-by-char text reveal)
- **Testing** — Playwright (E2E)
- **Deployment** — Netlify + GitHub Actions CI

## Features

- Smooth scroll single-page navigation (Home, About, Services, Contact)
- GSAP-powered entrance animations and scroll-triggered transitions
- Accessible accordion for the Services section (`aria-expanded`, keyboard nav)
- Responsive mobile menu with keyboard and Escape key support
- SEO: Open Graph tags, `robots.ts`, `sitemap.ts`, structured metadata
- Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`
- PWA-ready: `site.webmanifest`, full favicon set (SVG, PNG, ICO, Apple Touch)
- Optimized images: AVIF/WebP formats, `next/image` with blur placeholder

## Project Structure

```
src/
  app/
    _components/     # Page sections: Hero, About, Services, Contact, Header, Footer
    layout.tsx       # Root layout with metadata and fonts
    page.tsx         # Home page
    robots.ts        # robots.txt generation
    sitemap.ts       # Sitemap generation
  components/ui/     # Shared UI primitives (SplitText)
  constants/         # Navigation items, social links, site URL
  hooks/             # useMediaQuery, useMousePosition, useScrollPosition
  lib/               # Utility functions
public/
  favicon/           # Favicon assets and site.webmanifest
  fonts/             # PP Neue Montreal (local font)
  images/            # Static images
```

## Deployment

The project deploys automatically to Netlify on every push to `main`.

GitHub Actions runs lint, format check, and type check on every push and pull request before the deploy proceeds.

To deploy your own instance:
1. Fork the repo
2. Connect it to Netlify ("Import from Git")
3. Netlify picks up `netlify.toml` automatically — no manual configuration needed
