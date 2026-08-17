# CODEX — IMPLEMENT EXACT HOME_FINAL ONLY

Work in repository `mdbiplob66789-wq/konteno`.

Execute GitHub Issue #6 only.

## Mandatory checkout preflight

The approved visual is already committed to the CURRENT `origin/main` at:

`codex-references/approved-visuals/HOME_FINAL.webp`

A previous Codex checkout was stale and therefore did not contain the file. Do not continue from a stale checkout.

Before any implementation work:

```bash
git fetch origin main
git status --short
git rev-parse origin/main
git ls-tree -r --name-only origin/main | grep '^codex-references/approved-visuals/HOME_FINAL.webp$'
```

Read `codex-references/HOME_FINAL_CHECKOUT_GUARD.md` and synchronize the clean task branch with current `origin/main` if needed. Then verify:

```bash
test -f codex-references/approved-visuals/HOME_FINAL.webp
```

Only after the file is present, open and visually inspect it.

## Scope

Implement ONLY the user-approved KONTENO HOME screen shown in `HOME_FINAL.webp`.

Do not create or redesign Dashboard, Idea, Image, Video, Editor, Projects, Profile, Billing, Auth, Onboarding, theme switching, or any other unapproved screen.

The approved HOME structure is frozen. Reproduce it rather than interpreting it.

Critical requirements:
- aligned KONTENO logo;
- header navigation with icons: `Идея / Видео / Изображение / Редактор` distributed across the center;
- notification control, `38 000 ⚡`, avatar;
- approved hero and floating elements;
- exactly four product cards below hero;
- `Лучшие работы` with exactly three approved showcase items;
- do NOT restore `Что можно сделать в KONTENO`;
- four tariffs in approved order: Start / Creator / Pro / Studio;
- Creator is recommended;
- Start: `990 ₽ / мес`, `8 000 ⚡ / мес`;
- Creator: `2 490 ₽ / мес`, `25 000 ⚡ / мес`;
- Pro: `4 990 ₽ / мес`, `60 000 ⚡ / мес`;
- Studio: `9 990 ₽ / мес`, `150 000 ⚡ / мес`;
- compact continuous Energy calculator, never fixed top-up packages;
- `Единый баланс` optically centered;
- Energy format always amount first, lightning second;
- final lavender CTA exactly follows the reference hierarchy.

Never expose `T`, `token`, `tokens`, `токен`, `токены` in user-facing UI.

After implementation:
1. render desktop HOME;
2. compare it directly to `HOME_FINAL.webp` section by section;
3. refine spacing, sizes, typography, card geometry and alignment;
4. verify tablet/mobile adaptation without changing desktop hierarchy;
5. run available tests/lint/syntax;
6. run `git diff --check`;
7. inspect `git diff --name-only` and confirm no unrelated screens were redesigned;
8. open ONE fresh PR to `main` for HOME_FINAL only.

Do not reuse rejected PR #7.