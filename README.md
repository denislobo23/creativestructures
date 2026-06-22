# Creative Structures

A Next.js (App Router) landing page for a commissioned outdoor-structures
matching service — custom pergolas, patios, pavilions and louvred roofs.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add your images

Put your generated WebP files in `public/images/` using the exact names listed
in `public/images/README.txt` (hero.webp, pergola.webp, patio.webp, etc).
Missing images fall back to the dark background — nothing breaks.

## Connect the enquiry form

1. Create a form at https://formspree.io and copy its endpoint.
2. Open `components/BriefForm.jsx`.
3. Replace `YOUR_FORM_ID` in `FORMSPREE_ENDPOINT` with your real form id.

Until then the form shows a friendly "not connected yet" message instead of
failing silently. Once connected, it submits in place and shows a confirmation.

## Set the contact email

In `app/page.jsx` (footer) change `hello@creativestructures.com.au` to your
preferred enquiries address.

## Build & deploy

```bash
npm run build
npm run start
```

Easiest hosts: **Vercel** (made for Next.js — import the repo and it just works),
Netlify, or Cloudflare Pages. Point `creativestructures.com.au` at the host via
DNS once deployed.

## Structure

```
app/
  layout.jsx     fonts (next/font) + metadata
  page.jsx       all page sections
  globals.css    design system + styles
components/
  BriefForm.jsx  client component, Formspree submit + success state
public/
  images/        your WebP assets go here
```
