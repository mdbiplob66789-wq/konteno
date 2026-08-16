# KONTENO approved reference manifest

This manifest maps the read-only visual baseline stored in `codex-references/approved-visuals/`.

## Priority order

When product text, old code, an older screenshot, or a previous Codex PR conflicts with the approved visual baseline, use this priority:

1. Current absolute product rules in `/AGENTS.md`.
2. Approved visual baseline in `approved-visuals/`.
3. Current working behavior that must be preserved.
4. Older/current UI screenshots only as context.
5. Previous Codex PRs are not design references.

## Files

### 01_brand_hero.webp
Use for the KONTENO brand language, exact logo/wordmark usage, hero hierarchy, large premium purple/lilac visual treatment, floating UI elements and overall premium first impression.

Do not replace the approved brand with a generic square `K` mark or a plain text-left/card-right SaaS hero.

### 02_landing_core.webp
Use for the core middle landing sections:
- `Что можно сделать в KONTENO`;
- `Не нужно выбирать нейросеть`;
- `Всё в одном месте`.

Match the sense of depth, 3D/soft-glass illustrations, card hierarchy, spacing and lavender visual system rather than reducing the sections to plain rectangles with text.

### 03_landing_finish.webp
Use for:
- `Под любой формат` with 9:16 / 1:1 / 16:9 visual devices;
- final CTA;
- overall landing/screenboard rhythm and composition.

### 04_product_tabs.webp
Use for KONTENO product-area context, the current Idea screen that needs improvement, capabilities and the animate-photo/video workflow.

A screen explicitly representing current/to-fix UI is context, not permission to preserve its defects. Improve it in the approved KONTENO design language.

### 05_purchase.webp
Use only for purchase/payment UX logic and information hierarchy.

Syntx screenshots are interaction references only. Never copy Syntx branding, dark brown palette, orange CTA or unsupported payment methods.

Any dark KONTENO balance reference is for future Dark Theme only. Package values shown in older screenshots can be obsolete; current package values from `/AGENTS.md` always win.

### 06_design_showcase.webp
Use for the approved KONTENO design system, premium card language, creative-format visuals and showcase/gallery presentation.

### 07_exact_logo.webp
The exact approved KONTENO logo reference. The product logo must visually follow this file. Never substitute a generic `K` tile.

## Codex rule

These files are READ-ONLY baseline assets already in `main`. A task may inspect them but must not modify, rename, delete, duplicate, optimize or recommit them. Only text/code/test implementation files belong in a normal Codex PR.
