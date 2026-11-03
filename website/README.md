# Megnetora AI Solutions: Website

Marketing website for **Megnetora AI Solutions**, built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Run locally

```bash
cd website
npm install
npm run dev        # http://localhost:3000
```

Production build: `npm run build && npm start`.

## Page sections

Hero → Industries → Services (3 pillars) → Solutions (8 products) → Approach (Attract · Automate · Accelerate) → Process → Why Megnetora → FAQ → Contact form → Footer.

## Editing content

All text (services, solutions, FAQ, contact details, social links) is in
[`src/content/site.ts`](src/content/site.ts). Layout code doesn't need to change.

**Before launch, replace the placeholders in `site.ts`:**
- `contact.email` (currently `hello@megnetora.ai`)
- `contact.phone` (currently `+91 00000 00000`)
- `social` links (currently `#`)

## Contact form

The form is handled by a Server Action (`src/app/actions/contact.ts`) with server-side
validation and a spam honeypot. To receive enquiries, set `CONTACT_WEBHOOK_URL`
(see `.env.example`) to any webhook that accepts JSON, such as Slack, Zapier, Make, n8n or Formspree.
Without it, enquiries are only printed in the server log.

## Deploy

Deploys as-is on Vercel (set the project root to `website/`), or on any Node.js host with `npm run build && npm start`.

## Structure

```
src/
  app/
    layout.tsx         fonts (Lexend + Inter), metadata
    page.tsx           page composition + JSON-LD (Organization, FAQ)
    icon.svg           favicon
    actions/contact.ts contact form Server Action
  components/          Header, Hero, Sections, Contact, Footer, Logo, Icons
  content/site.ts      all website copy
public/                logo-mark.svg, logo-mark-white.svg
```
