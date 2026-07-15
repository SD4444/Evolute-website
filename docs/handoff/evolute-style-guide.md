# Evolute — Web Style Guide

Extracted from the Evolute deck/proposal system (CFP Composites proposal, 2030 pitch). Feed this to any project that should look like the Evolute brand.

## 1. Brand character

Quiet, editorial, confident. An investment-memo aesthetic: generous whitespace, hairline rules, big understated headlines, almost no color. Structure is expressed with typography and 1px borders — **not** cards, shadows, or rounded containers. No emoji, no gradients, no icons unless functional.

## 2. Color palette

Light surfaces (default):
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FBFAF8` | Page background (warm off-white) |
| `--paper-hover` | `#F1EFEA` | Hover fill on interactive rows |
| `--ink` | `#192432` | Headings, strongest text |
| `--ink-body` | `#1F2C3D` | Body copy, sub-heads |
| `--slate` | `#5B6B7C` | De-emphasized body text |
| `--muted` | `#989CA3` | Eyebrow labels, captions, numbers, arrows |
| `--rule` | `#D2D3D6` | Hairline borders/dividers on light |
| `--rule-alt` | `#C9CBCE` | Secondary hairlines (list items) |
| `--rule-dashed` | `#B4B7BC` | Dashed hairlines (tentative/optional items) |

Dark surfaces (used for 2–3 "statement" sections per page — the asset, the product, the contact/footer):
| Token | Hex | Use |
|---|---|---|
| `--dark-bg` | `#172433` | Dark section background |
| `--dark-panel` | `#101B28` | Inset panels/screenshots on dark |
| `--dark-panel-border` | `#26313E` | Border of those panels |
| `--dark-rule` | `#33414F` | Hairlines/dividers on dark |
| `--dark-text` | `#D2D3D6` | Body text on dark |
| `--dark-text-strong` | `#FBFAF8` | Headings/emphasis on dark |
| (muted on dark) | `#989CA3` | Same muted grey works on both surfaces |

There is **no accent color**. Emphasis = darker ink, larger type, or a `#FBFAF8` span inside grey text on dark. Do not introduce blues/greens.

## 3. Typography

Fonts (Google Fonts):

```html
<link
  href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

- **Display / headings / big numbers:** `'Space Grotesk', sans-serif`, weight **400** (never bold headlines), tight tracking.
- **Body / UI:** `'Inter', sans-serif`, 400–600.
- `* { -webkit-font-smoothing: antialiased; }`

Scale (desktop web, use clamp for responsiveness):

- **H1 (hero):** `clamp(40px, 8.5vw, 84px)`, line-height 1.0, letter-spacing −0.035em, weight 400. Second line of the headline often in `--muted` for a two-tone effect.
- **H2 (section):** `clamp(30px, 5.5vw, 52px)`, line-height 1.06, letter-spacing −0.03em, weight 400, margin-left −0.04em (optical align).
- **Eyebrow label:** `clamp(11px, 1.4vw, 14px)`, uppercase, letter-spacing 0.18em, color `--muted`, 20px below-margin. Pattern: `01 · Your situation`.
- **Micro label:** 11px, uppercase, letter-spacing 0.14em, `--muted`.
- **Card/sub headline:** Space Grotesk `clamp(19px, 2.3vw, 26px)`, letter-spacing −0.02em.
- **Big stat:** Space Grotesk `clamp(30px, 4vw, 44px)` (up to 64px on wide layouts), weight 400, letter-spacing −0.02em, line-height 1. Suffixes like `+` in `--muted`.
- **Lead paragraph:** `clamp(15px, 1.8vw, 19px)`, line-height 1.6, `--ink-body`, max-width 560–640px.
- **Body:** `clamp(13px, 1.5vw, 15px)`, line-height 1.65.

## 4. Layout system

- Full-height sections: `min-height: 100dvh`, padding `clamp(40px, 6vh, 72px) clamp(28px, 7vw, 96px)`; content vertically centered; deck uses `scroll-snap-type: y mandatory` (optional for a website).
- Content max-widths: headlines 900–1000px; paragraphs 560–640px.
- **Hairline grids**: stats/features sit in CSS grid `repeat(auto-fit, minmax(170px–300px, 1fr))` with `gap: clamp(24px, 4vw, 48px)`, separated from the section above by `border-top: 1px solid var(--rule)` + generous padding-top. Columns are optionally divided by `border-left: 1px solid var(--rule)` + 56px horizontal padding.
- **Section header bar** (deck variant): eyebrow left, 1px flex-line middle, Space Grotesk section number right (`01`).
- Left-rail lists: `border-left: 1px solid var(--rule)` + `padding-left: clamp(28px, 3.5vw, 48px)`, items stacked with `gap: clamp(24px, 3.5vh, 36px)`.
- **No border-radius** anywhere except pill buttons (`border-radius: 999px`) and inset screenshot panels (8px).
- **No box-shadows** except on dark screenshot panels: `0 24px 70px rgba(0,0,0,0.45)`.

## 5. Components

- **Pill button (ghost):** transparent bg, `1px solid var(--rule)`, radius 999px, padding 8px 16px, Inter 11px uppercase ls 0.14em, color `--muted`; hover → color `--ink`, border `--muted`. On dark: border `--dark-rule`, hover text `--paper`.
- **Accordion row:** grid `minmax(36px,56px) 1fr auto`; number in Space Grotesk `--muted`; title Space Grotesk `clamp(21px,3vw,30px)` ls −0.02em; `+` glyph rotates 45° when open; rows divided by `border-top: 1px solid var(--rule)`; hover bg `--paper-hover`. Body reveal via `grid-template-rows: 0fr→1fr` transition 0.45s.
- **Stat block:** micro label → big Space Grotesk number → 1-line caption.
- **List chips (mobile):** `1px solid var(--rule-alt)` pill, 7px 12px, 12.5px.
- **Logo:** wordmark SVGs — `evolute-logo-ink.svg` on light, `evolute-logo-white.svg` on dark (included in this folder).

## 6. Motion

- Entrance: `rise` — `opacity 0 → 1`, `translateY(22px) → 0`, 0.6–0.7s ease-out, scroll-driven (`animation-timeline: view()`, range `entry 0%` → `entry 40%`).
- Top scroll-progress bar: fixed 2px `--ink-body` bar, `scaleX` driven by `animation-timeline: scroll()`.
- Hover transitions: 0.2s ease on color/border-color/background.
- Always honor `prefers-reduced-motion: reduce` (kill all animation/transition).

## 7. Voice

Short declarative sentences. Numbered sections ("01 · Your situation"). Middot `·` as separator. Understated claims, specifics over adjectives. British-neutral, no exclamation marks.
