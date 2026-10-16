# Praxis Networks Website

A responsive multi-page React + Vite website.

| Page | Route |
|---|---|
| Home | `/` |
| About Us | `/about` |
| Products (+ detail pages) | `/products`, `/products/:slug` |
| Services (+ detail pages) | `/services`, `/services/:slug` |
| Contact Us | `/contact` |

## Run locally
1. Install Node.js (LTS, v18+).
2. `npm install`
3. `npm run dev` and open the URL Vite prints.

## Build for production
`npm run build` creates the `dist/` folder. `npm run preview` serves it locally.

## Customize
- **Contact details & form**: edit `src/config.js`.
  - Set `phone` and `email`.
  - Make the form deliver enquiries by either setting `email` (opens the visitor's mail app with a pre-filled message) **or** setting `VITE_FORM_ENDPOINT` in a `.env` file to a Formspree / Web3Forms / custom endpoint (recommended: submits directly in the background).
- **Services, products, industries, FAQs**: edit `src/data.jsx`.
- **Page copy**: edit files in `src/pages/`.
- **Images**: illustrations are stored locally in `public/images/` (SVG), so nothing depends on external image links. To use your own photos, drop files into that folder and update the paths at the top of `src/data.jsx`.

## Hosting
Nested routes need an SPA fallback so they load `index.html`. A `public/_redirects` file is included for Netlify/Cloudflare Pages; on other hosts configure an equivalent rewrite to `/index.html`.

## Deploy on GitHub Pages (custom domain)
1. Push this project to a GitHub repository (branch `main`).
2. Repository **Settings → Pages → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push. Edit the domain in the `CNAME` line if yours differs.
4. Add the DNS records at your registrar (4 `A` records for `@` and a `www` CNAME), then enter the domain under Settings → Pages and tick **Enforce HTTPS**.
5. Optional contact form: Settings → Secrets and variables → Actions → **Variables** → add `VITE_FORM_ENDPOINT`.
