# KONTENO — MASTER CODEX IMPLEMENTATION PROMPT

You are the implementation agent for the existing repository `mdbiplob66789-wq/konteno`.

Your task is to rebuild the current frontend into the complete approved KONTENO product, using the repository's design references as the source of truth.

Do not ask the user to re-upload design references. They are in this repository.

## Mandatory reading before code

Read in this order:
1. `/AGENTS.md`
2. `codex-references/REFERENCE_MANIFEST.md`
3. `codex-references/FULL_PRODUCT_DESIGN_SPEC.md`
4. `codex-references/FULL_SITE_BLUEPRINT.html`
5. `codex-references/ENERGY_CURRENCY_RULES.md`
6. `codex-references/ENERGY_PURCHASE_PAGE_SPEC.md`
7. every file under `codex-references/approved-visuals/`
8. inspect the existing implementation and current behavior

The approved visual references and full product spec are not loose inspiration. They define the target.

---

# Goal

Deliver one coherent production-quality KONTENO frontend where the public landing, application shell, Idea, Video, Image, Editor, Projects, Energy purchase, Profile and system states all look and behave like one premium product.

This is not a generic SaaS redesign. This is KONTENO.

---

# Phase 1 — audit before coding

Write a concise internal `VISUAL / PRODUCT AUDIT` covering:
- current logo mismatch;
- current generic visual patterns that must be removed;
- landing section gaps;
- current navigation structure;
- Idea workspace;
- Image workspace;
- Video workspace;
- Editor workspace;
- Projects/history;
- Energy wallet/purchase flow;
- responsive behavior;
- existing functionality that must be preserved.

Then implement. Do not wait for approval after the audit unless a true external blocker exists.

---

# Phase 2 — foundation

Build a reusable design system inside the existing project instead of repeating styles page by page.

Required semantic pieces:
- color tokens;
- spacing scale;
- typography scale;
- radii;
- elevation/shadows;
- Button variants;
- Badge/Pill;
- Card/GlassCard;
- AppHeader;
- MobileProductNav;
- EnergyBalance;
- QualitySelector;
- EmptyState;
- Modal/BottomSheet;
- UploadZone;
- ResultCard;
- ProjectCard;
- vector icon system.

If the current repository is intentionally a single-file prototype, improve it cleanly without a pointless framework migration. If component extraction can be done safely within the current architecture, do so. Do not rewrite the project merely to satisfy a preferred stack.

---

# Phase 3 — landing page

Implement the complete landing sequence from `FULL_PRODUCT_DESIGN_SPEC.md`:

1. Header
2. Hero
3. `Что можно сделать в KONTENO`
4. `Не нужно выбирать нейросеть`
5. `Всё в одном месте`
6. `Под любой формат`
7. Showcase/gallery
8. `Один баланс для всего`
9. compact FAQ/trust section
10. final CTA `Готов создать что-то своё?`
11. Footer

Critical visual rule:
- premium white/light lavender surfaces;
- dimensional purple/lilac visuals;
- generous whitespace;
- thin borders;
- soft depth;
- polished typography;
- no emoji-based feature tiles;
- no generic square-K logo;
- no Bootstrap/admin dashboard look.

The newest approved CTA / formats / workflow / AI-selection compositions must be reflected closely in layout, hierarchy and styling.

---

# Phase 4 — authenticated application

Create a coherent app shell with desktop header:
- exact KONTENO logo left;
- `Идея`, `Видео`, `Изображение`, `Редактор` center;
- theme control, notifications, Energy balance, profile right.

On mobile, use a compact top bar plus bottom product navigation.

Implement real dedicated workspaces:

## Dashboard
- universal prompt/start panel;
- recent projects;
- quick starts;
- templates/examples;
- polished empty state.

## Idea
- creative brief/prompt composer;
- useful goal/tone format chips;
- generated structured idea cards;
- actions to develop/copy/send into Image or Video.

## Image
- prompt;
- reference upload;
- aspect ratio;
- style presets;
- Выгодно / Оптимально / Максимум selector;
- visible Energy cost;
- creation CTA;
- result canvas and download/editor/variation actions.

## Video
- text-to-video and photo-to-video modes;
- reference upload where relevant;
- prompt;
- aspect ratio;
- supported duration/motion controls only;
- quality selector;
- Energy cost;
- result/player state.

## Editor
- central canvas;
- natural-language edit instruction;
- supported contextual tools;
- before/after treatment;
- export flow.

Do not make all four navigation tabs route to the same generic page.

---

# Phase 5 — Projects / History

Implement `Мои проекты` with:
- search;
- type filters;
- recent sorting;
- real preview cards;
- project actions;
- designed empty state.

Preserve current project/history data behavior where it already works.

---

# Phase 6 — Energy

Follow `ENERGY_CURRENCY_RULES.md` exactly.

Absolute rules:
- one unified Energy balance across KONTENO;
- user-facing name: `Энергия`;
- number first, lightning second: `38 000 ⚡`;
- never show `T`, `token`, `tokens`, `токен`, `токены` in user-facing UI;
- central package config only.

Packages exactly:
- `500 ₽ → 5 250 ⚡ (+5%)`
- `1 000 ₽ → 11 000 ⚡ (+10%)`
- `2 500 ₽ → 28 750 ⚡ (+15%)`
- `5 000 ₽ → 60 000 ⚡ (+20%)`

Default package: 1 000 ₽.
2 500 ₽ may be `Популярно`.
5 000 ₽ is maximum value.

---

# Phase 7 — purchase page

Implement dedicated `Пополнить энергию` page using `ENERGY_PURCHASE_PAGE_SPEC.md`.

Required:
- current balance;
- four synchronized package cards;
- selected Energy strongly visible;
- order summary;
- base / bonus / final Energy / amount due;
- smart minimum package for insufficient Energy;
- prevent double submit;
- preserve creation settings when leaving for top-up;
- never auto-run an expensive generation after returning;
- payment method only when genuinely supported.

If no real payment backend/provider is present, keep checkout explicitly DEMO/MOCK and never credit Energy or imply money moved.

---

# Phase 8 — account pages

Implement or polish:
- sign in;
- registration;
- lightweight onboarding;
- profile/settings;
- notifications panel;
- billing history UI if data exists.

Do not invent unsupported OAuth/payment integrations.

---

# Phase 9 — system states

Create consistent premium states for:
- first-use empty state;
- upload;
- loading;
- generation progress;
- success;
- failure;
- insufficient Energy;
- disabled/future feature;
- notifications empty state.

Do not fake exact progress percentages if unavailable.

---

# Phase 10 — responsiveness

Visually verify at minimum:
- 1440×900 desktop;
- ~1024px tablet;
- 390×844 mobile.

Verify separately:
- landing;
- Dashboard;
- Idea;
- Image;
- Video;
- Editor;
- Projects;
- Energy purchase.

Mobile must be intentionally designed, not a shrunk desktop layout.

---

# Phase 11 — preserve useful behavior

Do not break working behavior from the existing app unless replaced by an approved UX:
- routing/hash routing;
- uploads;
- prompt values;
- demo generation flows;
- local state/localStorage;
- projects/history;
- preview/download behavior;
- responsive navigation;
- accessibility basics.

If implementation is currently demo-only, keep demo status honest.

---

# Phase 12 — accessibility / quality

Required:
- semantic labels and buttons;
- keyboard access;
- visible focus;
- 44px mobile hit targets where practical;
- contrast;
- reduced-motion support;
- sensible alt text;
- no accidental horizontal scrolling;
- no console-breaking errors.

---

# Visual QA requirement

If browser tooling exists:
1. render the pages;
2. compare side-by-side with the approved references;
3. make at least one refinement pass;
4. verify desktop and mobile.

Screenshots used for QA belong in `/tmp`, never in git.

The implementation is not done merely because it is functional. It must visibly match KONTENO's approved design language.

---

# Git safety

Before completion:
- run syntax/tests/lint available in the project;
- run `git diff --check`;
- run `git diff --name-only`;
- confirm approved reference assets were not modified;
- do not commit node_modules, build output, browser downloads, screenshots, databases or other junk.

---

# Final acceptance checklist

Do not mark complete until all are true:

- [ ] exact KONTENO brand/logo used;
- [ ] complete landing built;
- [ ] approved AI-selection section matched;
- [ ] approved workflow section matched;
- [ ] approved formats section matched;
- [ ] approved final CTA matched;
- [ ] Dashboard complete;
- [ ] Idea workspace real and dedicated;
- [ ] Image workspace real and dedicated;
- [ ] Video workspace real and dedicated;
- [ ] Editor workspace real and dedicated;
- [ ] Projects/history complete;
- [ ] one Energy balance everywhere;
- [ ] all user-facing token/T terminology removed;
- [ ] purchase page uses exact current packages;
- [ ] insufficient-Energy state preserves work;
- [ ] profile/settings/notifications coherent;
- [ ] desktop/tablet/mobile checked;
- [ ] no generic/emoji/admin visual fallback remains in primary surfaces;
- [ ] existing useful behavior preserved;
- [ ] tests/checks run;
- [ ] intentional diff only.

---

# Final report format

Return a concise implementation report with these headings:

`VISUAL MATCH`
What changed to match approved KONTENO references.

`PAGES`
Which public/app pages were completed.

`PRODUCT`
Idea / Video / Image / Editor behavior.

`ENERGY`
Formatter, single wallet, package config.

`PURCHASE`
Flow and whether checkout is REAL or MOCK.

`RESPONSIVE / QA`
Viewport checks, tests, syntax, accessibility checks.

`GIT`
Exact `git diff --name-only`.

`BLOCKERS`
Only genuine remaining external blockers.

Do not ask for a new design direction. Execute this design end-to-end.