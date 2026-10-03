# Jai Indira Agro Engineering — Website

Premium manufacturer website for agricultural machinery. Built with Next.js 14 (App Router), TypeScript-ready JS, Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Architecture

| Path | Purpose |
|------|---------|
| `/` | Home — hero (+ demo video), trust, machinery categories, why us, recognition, quote CTA |
| `/machinery` | Full catalogue, grouped by category |
| `/machinery/[slug]` | Individual machine (specs, price, gallery, video, FAQ, quote) |
| `/applications` | Problem → solution → recommended machines |
| `/about` | Company story, sourced timeline, real awards & photography |
| `/resources` | Documentation hub |
| `/contact` | Request a Quote |
| `/privacy` · `/terms` | Legal |

## Data (single source of truth)

- `data/site.js` — company name, contact, nav, trust items, SEO, hero video ID
- `data/machines.js` — full machine catalogue (10 products) + helpers
- `data/applications.js` — application landing content
- `data/history.js` — sourced company timeline, awards, and photo galleries

**To add a machine:** append an object in `machines.js`, drop images into `public/images/machines/[slug]/`, done.

**To add images:** see `public/images/README.txt`

## Content sourcing

Every photo, spec, price, and award on this site was integrated from two sources:

1. `JIAE_Website_Content_Pack` (supplied certificates, the SHAKTHI 6X42 spec-chart
   PDF and pamphlet, a 2022 email, and factory/field photography).
2. A live fetch of https://www.indiamart.com/jaiindiraagroengineerings/ on
   2026-08-26 (product names, capacities, and IndiaMART's listed prices).

`data/history.js` carries a `source` string on every timeline/award entry for
future reference. All content has been reviewed and approved by the client.
Every `indicativePrice` still carries the standard disclaimer in
`site.pricingDisclaimer` (prices vary with material cost — confirm with JIAE
before ordering), matching normal practice for this kind of equipment.

## Remaining technical setup

Content is final. What's left is deployment configuration, not copy:

1. Add the Web3Forms key
2. Register and set the final domain in `data/site.js → url` (also updates sitemap & metadata)
3. Connect Google Analytics 4 + Search Console
4. Claim / update Google Business Profile
5. Have Privacy & Terms reviewed by counsel
6. Run Lighthouse and fix any issues

## Forms

Quote form uses [Web3Forms](https://web3forms.com). Set:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key
```

in `.env.local`. Without a key the form will show an error — WhatsApp/phone remain available.

## Stack

- Next.js 14 App Router
- React 18
- Tailwind CSS
- lucide-react
- next/font/local (Inter, self-hosted — see `app/fonts/README.txt`)
- Web3Forms
- JSON-LD (Organization, Product, BreadcrumbList)

## Brand assets

`public/images/brand/jia-logo.webp` is the client's real logo (used in the
navbar and footer). `favicon.ico`, `apple-touch-icon.png` and the two
manifest PNGs in `public/icons/` were generated from the same source file at
512, 192, 180, and 32px. Re-export from the original if a higher-resolution
master ever becomes available.

## Deploy

Recommended: Vercel. Connect the GitHub repo and deploy. Add the Web3Forms env var in the Vercel project settings.
