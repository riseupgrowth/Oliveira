# Oliveira Landscaping Construction — Website

A high-end, multi-page marketing website for **Oliveira Landscaping Construction**,
serving Boston's South Shore. Built with React + Vite + Tailwind CSS.

> Note: This is now a **landscaping & hardscape** company. All tree-removal / tree-service
> content from the previous version has been removed.

## What's included

- **Pages:** Home, About, Gallery, Service Areas, Contact (real routing via React Router)
- **Gallery:** Real project photos organized by project, showing the process
  (Before → In Progress → Finished) with a full-screen lightbox.
- **Service Areas:** A complete local-SEO page covering 30+ South Shore towns.
- **SEO:** Per-page titles/descriptions, Open Graph + Twitter cards,
  JSON-LD LocalBusiness structured data, `sitemap.xml`, and `robots.txt`.
- **Working contact form** that emails submissions via FormSubmit (see setup below).
- All images optimized and bundled locally in `public/images/`.

## Run it locally

```bash
npm install
npm run dev          # starts the dev server (http://localhost:3000)
```

## Build for production

```bash
npm run build        # outputs to /dist
npm run preview      # preview the production build
```

A pre-built copy of the site is already included in the **`dist/`** folder —
you can upload the contents of `dist/` directly to most hosts (e.g. Hostinger).

## Deploying

- **Hostinger / Apache:** upload the contents of `dist/`. The included `.htaccess`
  (in `public/`, copied to `dist/`) handles single-page-app routing.
- **Vercel / Netlify:** the included `vercel.json` and `public/_redirects` handle routing.
  Build command: `npm run build`, output directory: `dist`.

## Editing content

- **Business info** (phone, email, address, hours, towns, services, reviews):
  `src/data/site.js` — edit once, it updates across the whole site.
- **Gallery projects & captions:** `src/data/gallery.js`
- **Images:** `public/images/` (`site/` = section backgrounds, `projects/<name>/` = gallery)

## Contact form setup (one-time)

The form posts to **FormSubmit.co** and emails: `oliveiracorporation2016@gmail.com`.
The **first** time the form is submitted on the live domain, FormSubmit emails that
address a one-time confirmation link — click it once to activate. After that, all
submissions arrive in the inbox automatically. To change the destination email,
update `BUSINESS.email` in `src/data/site.js`.
