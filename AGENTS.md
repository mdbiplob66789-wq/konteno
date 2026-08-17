# KONTENO — Codex project instructions

## ACTIVE TASK OVERRIDE — Issue #6 / HOME_FINAL

For the current HOME_FINAL implementation task, this override takes precedence over any older or broader product instructions later in this file.

Current task scope is HOME ONLY.

Mandatory literal visual sources:
1. `codex-references/approved-visuals/HOME_FINAL.webp`
2. `codex-references/home-final/REFERENCE_BOARD.html`
3. `codex-references/home-final/REFERENCE_PACK.md`
4. `codex-references/home-final/CODEX_LITERAL_MATCH.md`

For Issue #6:
- do NOT implement or redesign Dashboard, Idea/Image/Video/Editor workspaces, Projects, Profile, Billing, Auth, Onboarding, theme switching or any other screen;
- do NOT restore `Что можно сделать в KONTENO` or any older landing sections not present in HOME_FINAL;
- do NOT add a Light/Dark control to HOME;
- Energy top-up on HOME is an arbitrary-RUB continuous calculator, NOT fixed packages;
- Best Works must visually match the approved car / mountain lake / fitness previews; invented CSS art is rejected;
- `HOME_FINAL.webp` is the literal visual target, not inspiration;
- derived production assets may be cropped from HOME_FINAL using coordinates in `REFERENCE_PACK.md`, but the approved baseline file itself remains read-only.

When this active task conflicts with an older rule below, this ACTIVE TASK OVERRIDE wins.

---

Work only inside the EXISTING KONTENO repository. Do not create a replacement app and do not migrate frameworks without a real technical reason.

## FIRST STEP — mandatory visual/product audit

Before changing any UI, landing, navigation, billing, Energy, theme, Idea, Video, Image, Editor, Projects, Auth or Settings screen:

1. Read this file completely.
2. Read `codex-references/CODEX_MASTER_PROMPT.md`.
3. Read `codex-references/FULL_PRODUCT_DESIGN_SPEC.md`.
4. Open `codex-references/FULL_SITE_BLUEPRINT.html` and inspect every screen in its top blueprint switcher.
5. Open and visually inspect EVERY file under `codex-references/approved-visuals/`.
6. Read `codex-references/REFERENCE_MANIFEST.md`, `ENERGY_CURRENCY_RULES.md`, and `ENERGY_PURCHASE_PAGE_SPEC.md`.
7. Compare the current implementation against the references page-by-page before coding.
8. When an approved visual or blueprint exists, DO NOT invent a generic SaaS alternative.

The approved image baseline is READ-ONLY for Codex implementation tasks. Do not modify, delete, rename, regenerate, optimize, replace or re-commit those WebP files in a task/PR. They are already part of `main` so they remain outside the task diff.

`FULL_SITE_BLUEPRINT.html` and `FULL_PRODUCT_DESIGN_SPEC.md` are also design-source files. Treat them as read-only during the implementation task unless the task explicitly says to revise the design system itself.

### Reference map

- `01_brand_hero.webp` — exact KONTENO brand direction, brandboard/logo usage and approved hero composition.
- `02_landing_core.webp` — approved `Что можно сделать`, `Не нужно выбирать нейросеть`, and `Всё в одном месте` visual direction.
- `03_landing_finish.webp` — approved formats section, final CTA and full UX screenboard/composition guidance.
- `04_product_tabs.webp` — current Idea page to improve, product/capability cards, and Video / animate-photo workflow direction.
- `05_purchase.webp` — purchase-page interaction references. Syntx is UX/layout logic ONLY; never copy its brand, dark palette or orange CTA. The dark Energy reference is future Dark Theme only and may contain obsolete package numbers.
- `06_design_showcase.webp` — approved design-system, showcase and creative-format visual language.
- `07_exact_logo.webp` — exact KONTENO logo reference. Never replace it with a generic square containing the letter `K`.
- `FULL_SITE_BLUEPRINT.html` — complete KONTENO screenboard for Landing, Dashboard, Idea, Image, Video, Editor, Projects, Energy, Profile, Auth and critical system states.
- `FULL_PRODUCT_DESIGN_SPEC.md` — detailed page structure, responsive rules, states, typography, palette, interactions and acceptance criteria.
- `CODEX_MASTER_PROMPT.md` — implementation order and final completion checklist.

If a screenshot inside a composite contains an older/current UI beside an approved target, the approved/newer target wins. Old section references explicitly marked current/remove/improve are not final visual targets.

## Design non-negotiables

- Current production theme is the approved LIGHT Theme.
- Visual language: premium white/light-lavender surfaces, purple/lilac accents, rounded premium cards, thin borders, soft depth/shadows/glows, polished 3D/soft-glass lavender illustrations, strong whitespace, clean typography.
- Do not reduce approved visual sections to plain CSS rectangles, bare text cards, emoji tiles, or generic Bootstrap/admin/SaaS layouts.
- Use proper SVG/vector UI icons instead of emoji as main premium iconography.
- Preserve the KONTENO-specific composition and visual hierarchy from the references while keeping the result responsive and usable.
- Keep architecture ready for a future Dark Theme, but do not ship the final Dark Theme now.
- Public site and authenticated app must feel like one brand, not two unrelated templates.

## Header / product structure

Desktop global header:
- left: exact KONTENO logo + wordmark;
- center: `Идея`, `Видео`, `Изображение`, `Редактор`;
- right: Light/Dark control, notifications, unified Energy balance, avatar/profile.

Core product areas must be real usable workspaces, not misleading labels that all route to one generic screen.

Mobile:
- compact top bar with brand/Energy/profile;
- bottom product navigation for Idea / Video / Image / Editor.

## Required complete product surface

The implementation target includes all of the following, not just the landing page:
- public Landing;
- Dashboard/Home after login;
- Idea workspace;
- Image workspace;
- Video workspace;
- Editor workspace;
- Projects/History;
- `Пополнить энергию`;
- Profile/Settings;
- Auth/registration shell where applicable;
- notifications;
- loading/success/failure/empty states;
- insufficient-Energy modal preserving the user's work;
- responsive desktop/tablet/mobile behavior.

Use `FULL_SITE_BLUEPRINT.html` and `FULL_PRODUCT_DESIGN_SPEC.md` to resolve pages that are not fully visible in the image composites.

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
- compact FAQ/trust;
- final CTA `Готов создать что-то своё?`;
- footer.

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

## Visual QA

When browser tooling is available, verify at minimum:
- 1440×900 desktop;
- approximately 1024px tablet;
- 390×844 mobile;
- Landing;
- Dashboard;
- Idea;
- Image;
- Video;
- Editor;
- Projects;
- Energy purchase.

Compare rendered UI to the approved visual references and make at least one refinement pass.

## Git safety

Reference visuals in `codex-references/approved-visuals/` are baseline/read-only.

Do NOT add generated screenshots, ZIPs, browser binaries, `.pyc`, databases, build artifacts, duplicate reference images, or other accidental binary files to a Codex PR.

Before finishing:
1. run relevant tests/lint/syntax checks;
2. visually verify affected desktop/mobile UI when a browser is available;
3. run `git diff --check`;
4. inspect `git diff --name-only` and ensure only intentional text/code/test files changed;
5. explicitly confirm the approved reference files did NOT enter the task diff;
6. complete the checklist in `codex-references/CODEX_MASTER_PROMPT.md`.
