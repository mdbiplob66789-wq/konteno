# KONTENO approved visual baseline

The old ZIP workflow has been retired. Approved visual references now live directly in the repository under:

`codex-references/approved-visuals/`

These WebP files are already committed to `main` and are READ-ONLY baseline assets for Codex tasks. A Codex task must inspect them but must not modify, rename, delete, regenerate, duplicate, optimize, or recommit them.

## Required order

1. Read `/AGENTS.md` completely.
2. Open every file in `codex-references/approved-visuals/`.
3. Compare the current KONTENO implementation against the references before editing.
4. Use the references as the visual source of truth rather than inventing a generic SaaS design.

## Visual files

- `01_brand_hero.webp` — KONTENO brandboard, logo usage and approved hero direction.
- `02_landing_core.webp` — `Что можно сделать`, `Не нужно выбирать нейросеть`, `Всё в одном месте`.
- `03_landing_finish.webp` — formats, final CTA and overall landing composition/screenboard guidance.
- `04_product_tabs.webp` — Idea/current-product context, capabilities and animate-photo/product workflow direction.
- `05_purchase.webp` — purchase/payment interaction references. Syntx is UX/layout inspiration only; never copy its branding, dark palette or orange CTA. A dark balance image is future Dark Theme context and may show obsolete values.
- `06_design_showcase.webp` — approved design-system, showcase and creative-format visual language.
- `07_exact_logo.webp` — exact KONTENO logo reference. Do not replace it with a generic `K` tile.

## Current absolute product rules

- Production theme: Light Theme.
- One unified Energy balance for everything.
- User-facing format: `38 000 ⚡` — number first, lightning second.
- No `T`, no user-facing token terminology.
- Packages: `500 ₽ → 5 250 ⚡ (+5%)`, `1 000 ₽ → 11 000 ⚡ (+10%)`, `2 500 ₽ → 28 750 ⚡ (+15%)`, `5 000 ₽ → 60 000 ⚡ (+20%)`.

For the complete implementation requirements, follow `/AGENTS.md`.
