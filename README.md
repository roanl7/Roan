# ROAN

**Smart choices for modern living.**

ROAN is an editorial shopping and product-discovery site built with [Astro](https://astro.build) + TypeScript. It's an affiliate/editorial publication — ROAN doesn't sell, ship, or process payments for any product; every product page links out to the retailer, platform, or service where the purchase or sign-up actually happens.

## Tech stack

- **Astro 5** (static output) + **TypeScript**
- **Content Collections** for products and journal articles — adding a product is just adding a Markdown file, no code changes needed
- Plain CSS with a small design-token system (see `src/styles/global.css`)
- **@astrojs/sitemap** for an auto-generated `sitemap.xml`

## Project structure

```
src/
  components/       Reusable UI (Header, Footer, ProductCard, SEO, etc.)
  content/
    products/
      tech/          9 tech products
      skincare/      10 skincare products (incl. SK-II)
      books/         7 books
      audible/       8 Audible membership/trial/gift entries
      tools/         Revolut + Hotmart
    articles/        Journal posts
    config.ts        Content collection schemas
  data/site.ts       Nav, categories, footer links, brand info
  layouts/           BaseLayout.astro
  pages/             File-based routes (home, shop, category pages, legal, etc.)
  styles/global.css  Design tokens + base styles
  utils/seo.ts        Canonical URL + JSON-LD helpers
public/               robots.txt, favicon.svg, assets/
```

## Adding a new product

Drop a new Markdown file into `src/content/products/<category>/`, following the frontmatter shape defined in `src/content/config.ts` (name, category, affiliateUrl, heroImage, etc.). The category index page and its `[slug].astro` template pick it up automatically at build time — no other changes required. `category` must be one of: `tech`, `skincare-beauty`, `books`, `audible`, `tools`.

`heroImage` is optional — entries with no supplied image (the Audible membership/trial/gift plans, the Hotmart resource) render a neutral placeholder instead of a fabricated photo. Use `disclosureText` to override the default Amazon Associates line for non-Amazon entries (Revolut, Hotmart, Audible), and `language: "pt"` to flag content that isn't in English (used on the Hotmart entry) — it shows a "PT" badge on cards and a banner on the product page.

## Local development

This project's dependencies were **not installed** in the environment that generated it (no network access there), so before running anything locally:

```bash
npm install
npm run dev       # local dev server
npm run build      # runs `astro check` + production build to /dist
npm run preview    # preview the production build locally
```

**Static review performed in this environment:** every `.astro` and `.ts` file was hand-reviewed for consistent prop shapes, optional-field handling (missing images, missing badges), matching imports, and valid frontmatter against the Zod schema in `src/content/config.ts`. `npm install` / `npm run build` could not be executed here (no network access in this sandbox) — treat your first local `npm run build` as the real first build, and fix anything TypeScript/`astro check` surfaces (none was anticipated, but this hasn't been machine-verified).

## Before deploying

- Update the `site` URL in `astro.config.mjs` (currently a placeholder: `https://roan.example.com`) to your real domain.
- Add a 1200×630 `roan-social-share.jpg` to `public/assets/` (see the note left in that folder) — it's the default Open Graph/Twitter image.
- The founder photo is already in place (`public/assets/founder/founder-photo.jpg`, used by `src/components/FounderSection.astro` on Home and About). Swap the file if a different photo is ever supplied — no other code changes needed.
- Double-check every affiliate/referral link still resolves and current terms (pricing, trial length, plan details) match what's shown on the retailer/platform side — none of that was invented here, but it can change on their end at any time.

## Deploying to Netlify

1. Push this repo to GitHub (see below).
2. In Netlify: **Add new site → Import an existing project** → connect GitHub → select the repo.
3. Build command: `npm run build` · Publish directory: `dist` (already set in `netlify.toml`, Netlify should auto-detect it).
4. Deploy. Netlify will run `npm install` and `npm run build` on its own servers, where network access is available.

### Publishing to GitHub, step by step

```bash
cd roan
git init
git add .
git commit -m "Initial ROAN site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Then in Netlify, connect that GitHub repo and deploy as described above. Every future `git push` to `main` will trigger a new Netlify build automatically.

## Content notes

- Product and article copy avoids inventing prices, availability, reviews, ratings, certifications, or medical/performance claims, and never states specific Audible trial lengths, commission values, or Revolut fees. Where the source brief didn't specify something, neutral wording was used instead.
- Books, Audible, and Tools now all have real content: 7 books, 8 Audible entries, and 2 Tools entries (Revolut, Hotmart).
- The Hotmart entry is clearly flagged as Portuguese-language content (a "PT" badge on its card, a banner on its page) rather than being presented as English content.
