# Evolute.partners — Migration Overview

Snapshot of the live Framer-hosted site at `https://evolute.partners` and the plan for porting it to this Next.js app.

---

## 1. URL map

All paths are relative to `https://evolute.partners`.

### Top-level
- `/` — Home ("Capital partners for deep tech")
- `/about-us`
- `/contact`
- `/insights` — index of articles, case studies, news

### Services — Companies
- `/services/companies/m-a`
- `/services/companies/fundraising`
- `/services/companies/corporate-finance`

### Services — Investors
- `/services/investors/deal-origination`
- `/services/investors/deal-evaluation`
- `/services/investors/commercial-due-diligence`

### Industries
- `/industries/digital-technology`
- `/industries/energy-and-sustainability`
- `/industries/food-and-agri`
- `/industries/mobility-and-aerospace`
- `/industries/advanced-materials-and-manufacturing`
- `/industries/health-and-life-sciences`

### Insights (individual posts — blog / case study / news)
- `/insights/eu-inc.-europe's-28th-regime-and-the-quest-for-scale` (Blog)
- `/insights/providing-collie-with-end-to-end-fundraising-support` (Case study)
- `/insights/facilitating-scisports-growth-through-acquisition` (Case study)
- `/insights/evolute-what-is-deep-tech` (Blog)
- `/insights/advanced-materials-manufacturing-sector-deep-dive` (News)
- `/insights/digital-technology-sector-deep-dive` (News)
- `/insights/energy-sustainability-sector-deep-dive` (News)
- `/insights/food-agriculture-sector-deep-dive` (News)
- `/insights/health-and-life-sciences-sector-deep-dive` (News)
- `/insights/mobility-aerospace-sector-deep-dive` (News)

> Note: Framer slugs contain `'` and `.` literals. We should normalise to clean kebab-case slugs on migration and add redirects.

### Legal
- `/legal/terms-conditions`
- `/legal/privacy-statement`
- `/legal/cookie-statement`

### Anchors used in nav
- `/#services` (home-page section jump)

---

## 2. Design system

### 2.1 Colors (extracted from live CSS)

**Neutrals / base**
- Warm off-white background: `#fbfaf8`, occasional `#fffaf7`
- Primary ink / foreground: `#192432`
- Darker variants used on dark sections: `#1f2c3d`, `#243346`, `#28394f`, `#2c3e56`
- Deep navy (hero / gradient ends): `#1d0756`, `#160543`

**Grayscale**
- `#6f7682` (secondary text)
- `#989ca3` (muted / captions)
- `#b7babe`, `#d2d3d6`, `#eaeaeb`, `#f2f3f3` (dividers, surfaces)

**Accent / sector tags** (used as soft chips + paired deep tone)
- Rose `#e8a5a5` / `#8f2c2c`
- Lime `#dceaae` / Olive `#70891f`
- Sand `#d2c4ab` / Clay `#725f3d`
- Lilac `#cfcdf0` / Violet `#443c8f` / Indigo `#808cfc`
- Sage `#acd8aa` / Forest `#3c7a38`
- Sky `#a2d2ee` / Ocean `#1c6e9c`

Overall feel: **warm-neutral canvas, navy ink, pastel sector highlights**. Not the blue-white-cold-startup look — closer to editorial / VC boutique.

### 2.2 Typography

Loaded on the live site:
- **Inter** (and "Inter Placeholder") — default body / UI
- **Space Grotesk** (and "Space Grotesk Placeholder") — display / headings

Hierarchy observed:
- Large display headings (Space Grotesk) with generous leading and limited tracking
- Body in Inter at ~16–18 px
- Monospaced eyebrows / section labels in Fragment Mono, uppercase, tracked

### 2.3 Brand voice & copy

**Positioning:** *"Capital partners for deep tech."* A boutique corporate finance advisor for deep-tech founders and their investors.

**Voice characteristics:**
- Professional but warm — "extension of your team", founder-centric
- Confident and precise — data-driven language ("richest data", "world-class resources")
- Aspirational without hype — "visionary founders who push boundaries", "bridging capital gaps for tech"
- Plain-English service descriptions; no buzzword salad

**Representative headlines / section titles:**
- "Capital partners for deep tech"
- "Bridging capital gaps for tech"
- "Corporate finance for tech pioneers; visionary founders who push boundaries"
- "Empower founders with the richest data and world-class resources"
- "Our services" / "Our highlights" / "What sets us apart"
- "Your partner every step of the way"
- "Our methodology" — Discovery → Design → Build → Execute

**Service page pattern** (e.g., M&A):
Hero (service name + one-line subhead) → paragraph intro → 4 core capabilities → methodology → example engagement → sibling services → industries → contact CTA ("Questions?" + named person).

**Insights taxonomy:** Blog · Case study · News — each post is tagged with one of these three.

---

## 3. High-level migration plan

### Phase 0 — Foundations
1. **Honour `AGENTS.md`**: this project uses a non-standard Next.js build; read `node_modules/next/dist/docs/` before writing route code.
2. Lock fonts: wire Inter + Space Grotesk + Fragment Mono via `next/font/google` and expose them as `--font-inter`, `--font-space-grotesk`, `--font-fragment-mono`. Confirm with the client whether the Fontshare faces (likely Satoshi/Clash) are required — if yes, self-host from Fontshare.
3. Design tokens are in `src/app/globals.css` (done — navy scale, gray scale, sector accents, font stacks).
4. Decide on CMS vs. MDX for `/insights`. Given ~10 posts and a slow publishing cadence, **MDX-in-repo** is probably the right call; move to a CMS only if a non-dev needs to publish.

### Phase 1 — Information architecture & routing
Reproduce the path structure 1:1 so inbound links and SEO carry over:
- `app/page.tsx` — home
- `app/about-us/page.tsx`
- `app/contact/page.tsx`
- `app/services/companies/[slug]/page.tsx` (or static per-slug files)
- `app/services/investors/[slug]/page.tsx`
- `app/industries/[slug]/page.tsx`
- `app/insights/page.tsx` + `app/insights/[slug]/page.tsx`
- `app/legal/[slug]/page.tsx`
- Add 301 redirects for any slug normalisations (e.g. strip the `'` and `.` from the EU Inc post).

### Phase 2 — Shared UI primitives
- Top nav with mega-menu grouping Companies / Investors / Industries
- Footer with duplicated nav + legal + socials
- Building blocks: `Hero`, `Eyebrow` (mono label), `SectionHeading`, `ServiceCard`, `IndustryTag` (pastel chip), `MethodologyStep`, `InsightCard` with category tag, `ContactCTA` (person + form link)

### Phase 3 — Page porting
1. Home (highest-value, many modules) — copy IA, highlights strip, sector grid, what-sets-us-apart, insights teaser, contact block.
2. Service template (shared across 6 service pages) — feed from a typed content object.
3. Industry template (shared across 6).
4. About us.
5. Insights index + MDX posts (migrate copy + imagery from Framer export).
6. Contact (form → HubSpot/Resend/whatever the client uses; ask).
7. Legal pages — flat MDX.

### Phase 4 — Polish
- SEO: per-page `metadata`, OG images, sitemap, robots, structured data for articles.
- Analytics parity with whatever Framer had (confirm: GA4? Plausible?).
- Forms: confirm destination of the contact form today.
- Image pipeline: export Framer assets, optimise, load via `next/image`.
- Accessibility pass (contrast on pastel tags, focus states, landmark structure).
- Lighthouse / Core Web Vitals review before launch.

## Guide
- Exact brand fonts are Inter and Space Grotesk final, Fragment Mono for numbers
