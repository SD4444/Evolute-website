---
name: evolute-brand
description: Apply Evolute's brand identity (logo, colours, typography, iconography, photography, voice) when designing or building UI, marketing assets, or any user-facing artefacts for the Evolute website. Use whenever creating components, pages, copy, illustrations, or visuals that should feel "on-brand". Triggers on requests like "make it on-brand", "apply brand", "use brand colours/fonts", "Evolute style".
version: 1.0.0
user-invocable: true
---

# Evolute brand guidelines

Evolute is a capital strategy partner for ambitious **deep tech** companies and investors. The brand is data-driven, expert, modern, and quietly confident. Visual language is clean, minimal, and professional with a touch of warmth.

**Tagline:** _Capital partners for deep tech._
**Mantra:** _Never stop evolving._

Apply every section below when producing UI, marketing assets, copy, or illustrations.

---

## 1. Logo

The logo is composed of a **logo mark** (checkmark glyph — represents thoroughness and attention to detail) and a **word mark** (`evolute`, lowercase). Use the full logo by default; the mark alone is acceptable in tight or favicon-like contexts.

**Rules**
- Minimum height: **20px**.
- Always preserve clear space around the logo proportional to the mark height.
- Preferred ad placement: bottom-left or bottom-right corner.
- Three colour variants: **Dark teal**, **Light teal**, **White**. Pick the variant with the strongest contrast against the background.
  - Light background → Dark teal logo.
  - Dark background → Light teal or White logo.
- Combined / industry logos exist (logo paired with industry colour) — only use these in the matching industry context.

**Never**
- Squash, tilt, rotate, skew, or distort.
- Add drop shadows, outlines, or text effects.
- Mirror the logo.
- Recolour with unofficial colours.

---

## 2. Colour system

### Primary palette

| Name | Hex | Role |
|---|---|---|
| Frosted Almond | `#FBFAF8` | Primary light / page background |
| Academic Blue | `#192432` | Primary dark / primary text |
| Bombay | `#989CA3` | Neutral grey / secondary text, captions |

Academic Blue ranks from `25` (lightest) to `950` (darkest):

| Step | Notes |
|---|---|
| `25 / 50 / 100 / 200` | Backgrounds, surfaces, dividers (AAA contrast on dark) |
| `300 / 400` | Subtle UI, hover states (AA contrast) |
| `500 / 600 / 700` | Mid tones, secondary elements |
| `800` | Body text on light, used in gradients |
| `900 / 950` | Headlines, highest-emphasis text |

Specific named values from the guideline:
- Academic Blue 950 — `#121923` (headlines on light)
- Academic Blue 800 — `#1F2C3D` (body on light)
- Academic Blue 100 — `#D2D3D6` (body on dark)

**Always check WCAG contrast** for product/web (AA minimum, AAA preferred). Less critical for print/campaign work.

### Industry palette (secondary)

These pair a soft tint with a saturated accent. **Only use within the matching industry context — never mix industries or use these as generic accents.**

| Industry | Tint | Accent |
|---|---|---|
| Digital Technology | Akaroa `#D2C4AB` | `#725F3D` |
| Energy & Sustainability | Spring Sun `#DCEAAE` | `#70891F` |
| Food & Agri | Sprout `#ADD8AA` | `#3C7A38` |
| Mobility & Aerospace | Glacier `#A2D3EE` | `#1C6E9C` |
| Advanced Materials & Manufacturing | Moon Raker `#D0CDF1` | `#443D8F` |
| Health & Life Sciences | Orchid `#E8A5A5` | `#902C2C` |

### Gradients

Use Academic Blue gradients with a soft-light noise overlay for hero / feature sections:
- Dark gradient: Academic Blue `950` → `800`, noise on soft light.
- Light gradient: Academic Blue `25` → `100`, noise on soft light.

---

## 3. Typography

### Families

- **Headings:** `Space Grotesk` — modern sans-serif, clean, minimal, digital-age feel.
- **Body & fallback:** `Inter` — high-readability sans-serif for professional environments.

### Hierarchy

| Style | Family | Line-height | Letter-spacing |
|---|---|---|---|
| Display | Space Grotesk | 100% | -4% |
| Headline 1 | Space Grotesk | 100% | -4% |
| Headline 2 | Space Grotesk | 100% | -2% |
| Subheadline | Inter | 110% | -2% |
| Body | Inter | 150% | 0% |

Sizes can scale with context, but **never break the hierarchy**.

### Headline writing rules
- Use **sentence case** (only the first letter capitalised).
- Use punctuation **sparingly** — only to add rhythm or pose a question.
- Examples from the guidelines: _"Capital partners in deep tech."_, _"Unlock true sustainable growth"_.

### Type colour pairings

On light backgrounds:
- Offering / eyebrow: `Bombay #989CA3`
- Headline: `Academic Blue 950 #121923`
- Body: `Academic Blue 800 #1F2C3D`

On dark backgrounds:
- Offering / eyebrow: `Bombay #989CA3`
- Headline: `Frosted Almond #FBFAF8`
- Body: `Academic Blue 100 #D2D3D6`

---

## 4. Iconography

- **Set:** Google Material Symbols, **Sharp** style only.
- **Weight:** 300.
- **Grade:** 0.
- The thin sharp set complements the slim Space Grotesk / Inter typography. Do not mix in rounded, outlined, or filled variants.

---

## 5. Photography

Three approved categories:

1. **People** — modern professionals in business-casual attire, subtle smiles, contemporary and luxurious feel.
2. **Environment** — landscapes that represent the industries Evolute serves; emphasise modern professionalism.
3. **Patterns** — subtle, calming patterns/textures; can be combined with people or environment shots.

**Never**
- Heavily Photoshopped or surreal imagery.
- Stock-photo clichés that feel staged or unrealistic.
- Imagery that doesn't reflect reality — visuals must remain believable and relatable.

---

## 6. Voice & messaging

- **Expertise:** capital strategy for deep tech; fundraising, buy & sell advisory, strategic consultancy.
- **Differentiators:** data-driven, embedded as part of the client's team, deep tech specialists.
- **Tone:** confident, expert, restrained. Avoid hype, exclamation marks, and salesy language.
- **Tagline:** _Capital partners for deep tech._
- **Mantra (sign-off):** _Never stop evolving._

### Service vocabulary
- Fundraising services — capital raising advisory, investor relations & networking, capital structure optimization, performance benchmarking & KPIs.
- Buy & sell advisory — capital structure optimization, due diligence support, exit strategy planning, acquisition scan / pre-due diligence.
- Strategic consultancy — shareholder audit & governance, captable scenario analysis, valuation analysis, market positioning & investment strategy, business strategy & capital market alignment.

---

## 7. Application checklist

Before shipping any brand-facing artefact, verify:

- [ ] Logo at ≥20px height with proper clear space, correct colour variant for the background.
- [ ] All text uses Space Grotesk (headings) and Inter (body) — no other typefaces.
- [ ] Headlines in sentence case, punctuation used sparingly.
- [ ] Colours come from the primary palette (or a single industry palette where appropriate).
- [ ] Body/headline text passes WCAG AA at minimum on web/product.
- [ ] Icons are Material Symbols Sharp, weight 300, grade 0.
- [ ] Photography fits People / Environment / Patterns and looks realistic.
- [ ] Voice is restrained, expert, deep-tech-focused; tagline/mantra used correctly when present.
- [ ] No prohibited treatments: distorted logo, drop shadows, outline logo, mismatched industry colours, generic AI aesthetics.

---

**Source:** `docs/BRAND_GUIDELINES.pdf` (Brand guidelines v0.1, January 2025).
