# NEXT CODEX TASK — visual rebuild of KONTENO

## Goal

Rebuild the existing KONTENO frontend so it follows the APPROVED KONTENO visual baseline in `codex-references/approved-visuals/` instead of inventing a generic SaaS interface.

This is a visual/product correction pass, not a new product and not a framework rewrite.

## Mandatory first phase: VISUAL AUDIT — no coding yet

Before editing any file:

1. Read `/AGENTS.md`.
2. Read `codex-references/README.md`, `REFERENCE_MANIFEST.md`, `ENERGY_CURRENCY_RULES.md`, and `ENERGY_PURCHASE_PAGE_SPEC.md`.
3. Open and inspect EVERY image under `codex-references/approved-visuals/`.
4. Inspect the current implementation.
5. Write a concise `VISUAL AUDIT` in the task log comparing current UI vs each approved reference:
   - exact logo/brand mismatch;
   - hero composition;
   - card/illustration style;
   - landing sections;
   - product workspace/navigation;
   - purchase page;
   - typography/spacing/depth;
   - desktop/mobile behavior.
6. Only after that audit, start coding.

Do not ask the user to re-upload references. They are already in `main`.

## Critical visual rule

The reference images are the visual source of truth. Do NOT create another generic SaaS/admin/Bootstrap-style design.

Specifically avoid the rejected pattern:
- generic square `K` logo;
- plain text-left + ordinary dashboard-card hero;
- bare cards using glyphs/emoji instead of premium illustrations;
- simple CSS rectangles standing in for the approved 3D/soft-glass format visuals;
- visually flat workflow cards;
- arbitrary new visual language unrelated to the references.

Use `07_exact_logo.webp` for the actual brand mark.

## Previous PRs

PR #2 and PR #3 are rejected/superseded visual attempts. Do NOT use their visual layer as a design target and do NOT resurrect their branches.

You may independently reuse only sound technical ideas if useful:
- one unified Energy balance;
- central Energy package configuration;
- number-first lightning formatting;
- smart minimum package on insufficient balance;
- honest MOCK/DEMO checkout when no backend exists;
- no double-submit.

Reimplement those cleanly on the fresh `main` baseline where needed.

## Landing rebuild

Match the approved visual character and composition section-by-section:

### Hero
Use `01_brand_hero.webp` and `07_exact_logo.webp` closely:
- exact KONTENO branding;
- strong premium hero hierarchy;
- large purple/lilac AI visual treatment;
- layered/floating interface elements where shown;
- polished white/lavender depth;
- clear CTA.

### What you can do
Use `02_landing_core.webp`:
- Idea / Image / Video / Editor;
- visually rich premium cards;
- 3D/soft-glass lavender visual language;
- not emoji tiles.

### No need to choose AI
Use `02_landing_core.webp`:
- Выгодно / Оптимально / Максимум;
- Оптимально clearly recommended;
- match visual hierarchy and depth.

### All in one place
Use `02_landing_core.webp`:
- Идея → Создание → Редактор → Готово;
- premium visual flow, not four bare boxes.

### Formats
Use `03_landing_finish.webp`:
- 9:16 / 1:1 / 16:9;
- visually dimensional premium format presentation.

### Showcase + final CTA
Use `03_landing_finish.webp` and `06_design_showcase.webp`.

### Unified balance
Use current Energy rules and the approved design system. Package values must be current even if an old screenshot differs.

## Product workspaces

Global desktop header:
- exact KONTENO logo left;
- center: Идея / Видео / Изображение / Редактор;
- right: theme control, notifications, unified Energy balance, profile.

Use `04_product_tabs.webp` for product/workspace visual context. The current Idea screenshot inside that reference is explicitly context/to-improve, not a final target if it is marked current.

Each of the four navigation items must be a real usable workspace. Preserve working routes/uploads/prompts/projects/history/demo behavior while upgrading visual quality.

## Energy

Follow `ENERGY_CURRENCY_RULES.md` exactly.

One wallet only. Number first, lightning second. No T. No user-facing token terminology.

Final packages only:
- 500 ₽ → 5 250 ⚡ (+5%)
- 1 000 ₽ → 11 000 ⚡ (+10%)
- 2 500 ₽ → 28 750 ⚡ (+15%)
- 5 000 ₽ → 60 000 ⚡ (+20%)

## Purchase page

Follow `ENERGY_PURCHASE_PAGE_SPEC.md` and use `05_purchase.webp` for UX hierarchy.

Never copy Syntx visual branding. Never copy obsolete package values from screenshots.

If no real payment backend/provider exists, keep checkout explicitly MOCK/DEMO and never credit Energy.

## Theme

Light Theme is the production target. Build semantic tokens and a proper theme control, but do not ship an unfinished Dark Theme. Dark reference content is future context only.

## Implementation constraints

- Work in the existing project.
- Do not create a replacement app.
- Do not migrate framework without a real technical reason.
- Preserve existing working behavior unless it conflicts with an approved UX target.
- Reusable helpers/components where appropriate.
- Use SVG/vector iconography; no emoji as primary premium icons.
- Reference WebPs are READ-ONLY and must not enter the PR diff.
- Do not add any new binary assets to the PR.

## Visual QA is mandatory

When browser tooling is available:
- desktop 1440×900;
- tablet around 1024px;
- mobile 390×844;
- purchase page separately;
- each product tab separately.

Generate any screenshots only in `/tmp`, never in git.

Compare the rendered result side-by-side with the approved references and make at least one refinement pass after comparison.

If browser installation is blocked, use any browser already present in the environment before giving up. Clearly report any remaining visual-QA limitation.

## Tests / Git safety

Run relevant syntax/tests plus `git diff --check`.

Before publishing, show `git diff --name-only`.

The PR must contain only intentional text/code/test files. It must NOT contain:
- `codex-references/approved-visuals/**`;
- ZIP/PNG/WebP/JPG screenshots;
- browser binaries/downloads;
- generated build junk/databases/node_modules.

## Final report

Report:
- `VISUAL MATCH` — what was changed to match each reference group;
- `PRODUCT` — Idea/Video/Image/Editor behavior preserved/implemented;
- `ENERGY` — wallet/formatter/packages;
- `PURCHASE` — exact behavior and REAL vs MOCK status;
- `QA` — tests + visual desktop/mobile checks;
- `GIT` — exact `git diff --name-only`;
- `BLOCKERS` — only real remaining external blockers.

Do not create a new visual interpretation. Rebuild KONTENO against the approved references already present in `main`.
