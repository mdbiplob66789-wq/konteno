# CODEX — IMPLEMENT HOME_FINAL ONLY

Work in repository `mdbiplob66789-wq/konteno`.

Execute GitHub Issue #6 completely.

This task implements ONLY the user-approved KONTENO HOME screen. Do not continue into any other unapproved screen.

## Visual source of truth
Use this repository file as the exact approved visual reference:

`codex-references/approved-visuals/HOME_FINAL.webp`

Do not redesign, reinterpret, substitute, or replace that visual. Reproduce its desktop composition as closely as practical.

Read first:
1. `codex-references/approved-visuals/HOME_FINAL.webp`
2. `codex-references/HOME_FINAL_IMPLEMENTATION.md`
3. `/AGENTS.md`
4. `codex-references/TARIFFS_AND_ENERGY_V2.md`
5. `codex-references/HEADER_NAV_V2.md`
6. current implementation.

The approved HOME structure is frozen. Do not redesign it, remove approved sections, add new marketing sections, or change the product hierarchy.

Required HOME structure:
- aligned KONTENO logo;
- icon+label navigation: Идея / Видео / Изображение / Редактор;
- notifications, `38 000 ⚡`, avatar;
- approved hero and floating widgets;
- exactly four product cards;
- `Лучшие работы` with exactly three approved showcase items;
- DO NOT restore `Что можно сделать в KONTENO`;
- tariffs in order Start / Creator / Pro / Studio, Creator recommended;
- Start: 990 ₽ / мес + 8 000 ⚡ / мес;
- Creator: 2 490 ₽ / мес + 25 000 ⚡ / мес;
- Pro: 4 990 ₽ / мес + 60 000 ⚡ / мес;
- Studio: 9 990 ₽ / мес + 150 000 ⚡ / мес;
- compact continuous Energy calculator, never fixed packages;
- optically centered `Единый баланс` block;
- Energy formatting amount first, lightning second;
- final lavender CTA with rocket visual.

Keep tariff prices and monthly Energy allowances in one central config. Never expose `T`, token/tokens or токен/токены.

Preserve useful existing working navigation/state behavior only where it does not conflict with HOME_FINAL. Do not fake payment success or unsupported provider behavior.

Responsive adaptation is required for desktop/tablet/mobile, but preserve the approved desktop hierarchy.

Do not implement or redesign Dashboard, Idea workspace, Image workspace, Video workspace, Editor workspace, Projects, Profile, Auth, Billing, Onboarding or any other unapproved page in this PR.

Before opening PR, render the desktop page and visually compare it section-by-section against `codex-references/approved-visuals/HOME_FINAL.webp`. Continue refining until geometry, hierarchy, spacing, typography, card count and section order match closely.

After implementation:
- run available lint/tests/syntax checks;
- run `git diff --check`;
- verify only intentional files changed;
- do a visual refinement pass;
- open ONE fresh PR to `main` for HOME_FINAL only;
- do not reuse rejected PR #7.

Return: HOME MATCH / RESPONSIVE / FUNCTIONAL / TESTS / GIT / BLOCKERS.

Start implementation now.