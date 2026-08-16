# KONTENO — Codex project instructions

Work only inside the EXISTING KONTENO repository. Do not create a replacement app and do not migrate frameworks without a real technical reason.

## FIRST STEP — mandatory visual audit

Before changing any UI, landing, navigation, billing, Energy, theme, Idea, Video, Image or Editor screen:

1. Read this file completely.
2. Open and visually inspect EVERY file under `codex-references/approved-visuals/`.
3. Treat those visuals as the approved KONTENO design baseline, not as optional inspiration.
4. Compare the current implementation against the references section-by-section before coding.
5. When an approved visual exists, DO NOT invent a generic SaaS alternative.

The approved visual baseline is READ-ONLY for Codex tasks. Do not modify, delete, rename, regenerate, optimize, replace or re-commit those WebP files in a task/PR. They are already part of `main` so they remain outside the task diff.

### Reference map

- `01_brand_hero.webp` — exact KONTENO brand direction, brandboard/logo usage and approved hero composition.
- `02_landing_core.webp` — approved `Что можно сделать`, `Не нужно выбирать нейросеть`, and `Всё в одном месте` visual direction.
- `03_landing_finish.webp` — approved formats section, final CTA and full UX screenboard/composition guidance.
- `04_product_tabs.webp` — current Idea page to improve, product/capability cards, and Video / animate-photo workflow direction.
- `05_purchase.webp` — purchase-page interaction references. Syntx is UX/layout logic ONLY; never copy its brand, dark palette or orange CTA. The dark Energy reference is future Dark Theme only and may contain obsolete package numbers.
- `06_design_showcase.webp` — KONTENO design system, showcase direction and creative-format visual language.
- `07_exact_logo.webp` — exact KONTENO logo reference. Never replace it with a generic square containing the letter `K`.

If a screenshot inside a composite contains an older/current UI beside an approved target, the approved/newer target wins. Old section references explicitly marked current/remove/improve are not final visual targets.

## Design non-negotiables

- Current production theme is the approved LIGHT Theme.
- Visual language: premium white/light-lavender surfaces, purple/lilac accents, rounded premium cards, thin borders, soft depth/shadows/glows, polished 3D/soft-glass lavender illustrations, strong whitespace, clean typography.
- Do not reduce approved visual sections to plain CSS rectangles, bare text cards, emoji tiles, or generic Bootstrap/admin/SaaS layouts.
- Use proper SVG/vector UI icons instead of emoji as main premium iconography.
- Preserve the KONTENO-specific composition and visual hierarchy from the references while keeping the result responsive and usable.
- Keep architecture ready for a future Dark Theme, but do not ship the final Dark Theme now.

## Header / product structure

Desktop global header:
- left: exact KONTENO logo + wordmark;
- center: `Идея`, `Видео`, `Изображение`, `Редактор`;
- right: Light/Dark control, notifications, unified Energy balance, avatar/profile.

Core product areas must be real usable workspaces, not misleading labels that all route to one generic screen.

## Energy — absolute current rules

KONTENO has exactly ONE unified Energy balance across Idea, Video, Image, Editor and future paid AI tools.

User-facing currency name is `Энергия` / Energy.

Energy formatting is ALWAYS number first, lightning second:
- `38 000 ⚡`
- `1 300 ⚡`
- `5 250 ⚡`

Never show:
- `T`;
- `token`, `tokens`, `токен`, `токены` in user-facing UI;
- `⚡ 38 000`.

Use a reusable formatter and a vector Zap/Lightning icon in the actual UI.

Final packages — use one central package config everywhere:
- `500 ₽ → 5 250 ⚡ (+5%)`
- `1 000 ₽ → 11 000 ⚡ (+10%)`
- `2 500 ₽ → 28 750 ⚡ (+15%)`
- `5 000 ₽ → 60 000 ⚡ (+20%)`

`5 000 ₽` = maximum value. `2 500 ₽` may be marked popular.

## Approved landing sections

Preserve/build this product story with the visual references as the source of truth:
- Hero;
- `Что можно сделать в KONTENO`;
- `Не нужно выбирать нейросеть` — Выгодно / Оптимально / Максимум;
- `Всё в одном месте` — Идея → Создание → Редактор → Готово;
- `Под любой формат` — 9:16 / 1:1 / 16:9;
- showcase/gallery;
- `Один баланс для всего`;
- final CTA `Готов создать что-то своё?`.

## Purchase flow

Dedicated page: `Пополнить энергию`.

Required behavior:
- current balance, e.g. `38 000 ⚡`;
- four synchronized package cards + snap slider;
- default `1 000 ₽ → 11 000 ⚡`;
- selected Energy is visually prominent;
- smart minimum package when the user arrives after insufficient Energy;
- country/billing region;
- payment method only if actually supported by backend/provider;
- promo states without fake working promo codes;
- transparent base / bonus / final Energy / amount due summary;
- CTA e.g. `Перейти к оплате — 1 000 ₽` and `На баланс поступит 11 000 ⚡`;
- prevent double submit;
- failed/cancelled payment never credits Energy;
- if no backend/provider exists, remain explicitly MOCK/DEMO and never pretend money or Energy moved;
- insufficient-Energy modal preserves creation settings and must not auto-trigger an expensive generation after return.

## Existing behavior

Preserve working routing, uploads, prompts, creation/demo flows, projects/history, local state, preview/download behavior, responsive navigation and accessibility unless an approved reference explicitly replaces the UX.

## Git safety

Reference visuals in `codex-references/approved-visuals/` are baseline/read-only.

Do NOT add generated screenshots, ZIPs, browser binaries, `.pyc`, databases, build artifacts, duplicate reference images, or other accidental binary files to a Codex PR.

Before finishing:
1. run relevant tests/lint/syntax checks;
2. visually verify affected desktop/mobile UI when a browser is available;
3. run `git diff --check`;
4. inspect `git diff --name-only` and ensure only intentional text/code/test files changed;
5. explicitly confirm the approved reference files did NOT enter the task diff.
