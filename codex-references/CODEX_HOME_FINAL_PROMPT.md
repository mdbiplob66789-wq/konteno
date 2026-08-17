# CODEX — IMPLEMENT HOME_FINAL LITERALLY, NOT BY INTERPRETATION

Work in repository `mdbiplob66789-wq/konteno` from the latest `origin/main`.

Execute GitHub Issue #6 only.

## First: synchronize checkout

```bash
git fetch origin main
git status --short
git rev-parse origin/main
```

If the task checkout is behind and the working tree is clean, update it to current `origin/main` before coding.

## Mandatory visual sources — open all four

1. `codex-references/approved-visuals/HOME_FINAL.webp`
2. `codex-references/home-final/REFERENCE_BOARD.html`
3. `codex-references/home-final/REFERENCE_PACK.md`
4. `codex-references/home-final/CODEX_LITERAL_MATCH.md`

These are NOT inspiration. They describe the already-approved screen that must be reproduced.

Do not redesign, reinterpret, simplify, or substitute the composition.

## Rejected behavior from previous attempt

The previous attempt matched the section list but invented its own visual treatment, including CSS-generated car/lake/fitness artwork. That approach is rejected.

For Best Works use the exact source regions documented in `REFERENCE_PACK.md`. If local image tooling is available, derive the three production preview assets from the read-only `HOME_FINAL.webp`; otherwise use exact clipping/background positioning from that source. Do not invent replacement art.

## Scope

HOME only.

Do not redesign or expand Dashboard, Idea/Image/Video/Editor workspaces, Projects, Profile, Billing, Auth, Onboarding or theme switching.

Do not restore `Что можно сделать в KONTENO` or any older landing sections absent from HOME_FINAL.

Do not add a Light/Dark toggle.

## Literal section order

`HEADER → HERO → FOUR PRODUCT CARDS → ЛУЧШИЕ РАБОТЫ → TARIFFS → ENERGY + UNIFIED BALANCE → FINAL CTA`

Match each section's relative geometry, spacing, typography hierarchy, card proportions, radii, borders, shadows, purple/lavender treatment and decorative placement against `REFERENCE_BOARD.html`.

## Fixed product rules

Header balance: `38 000 ⚡`, number first.

Exactly four tariffs:
- Start — `990 ₽ / мес` — `8 000 ⚡ / мес`
- Creator — `2 490 ₽ / мес` — `25 000 ⚡ / мес`
- Pro — `4 990 ₽ / мес` — `60 000 ⚡ / мес`
- Studio — `9 990 ₽ / мес` — `150 000 ⚡ / мес`

Creator is recommended.

HOME top-up is an arbitrary-RUB continuous calculator with synchronized input + slider + live base/bonus/final calculation. It is NOT fixed packages.

Never expose `T`, `token`, `tokens`, `токен`, `токены` on HOME.

Do not fake successful payment.

## Visual acceptance gate

A page is NOT accepted just because the text and section count are correct.

Before finishing:
1. compare HEADER against reference;
2. compare HERO;
3. compare PRODUCT CARDS;
4. compare BEST WORKS;
5. compare TARIFFS;
6. compare ENERGY/BALANCE;
7. compare FINAL CTA;
8. perform visual refinement pass #1;
9. compare again;
10. perform visual refinement pass #2;
11. verify tablet/mobile adaptation;
12. run available tests/syntax;
13. run `git diff --check`;
14. inspect changed files.

If GitHub authentication is unavailable, do NOT pretend a PR was created. Return the exact commit SHA and complete transferable file contents/patch instead.

Do not reuse rejected PR #7.
