# CODEX — literal HOME_FINAL implementation mode

Work in repository `mdbiplob66789-wq/konteno` from the latest `origin/main`.

This task is not a redesign. The approved HOME already exists visually.

## Mandatory visual sources

Open these BEFORE coding:
1. `codex-references/approved-visuals/HOME_FINAL.webp`
2. `codex-references/home-final/REFERENCE_BOARD.html`
3. `codex-references/home-final/REFERENCE_PACK.md`
4. `codex-references/HOME_FINAL_IMPLEMENTATION.md`

The first three are the literal visual target. Do not reinterpret them.

## Core rule

Do not ask: “How would I design this?”
Ask: “What CSS/HTML/assets reproduce this approved screen most closely?”

Do not produce a generic KONTENO-inspired SaaS page.
Do not create your own hero composition.
Do not create your own Best Works art.
Do not invent extra badges, headings, sections, navigation items, controls or decoration.

## Exact Best Works requirement

The previous attempt used CSS-generated substitutes for the car / lake / fitness scenes. That is rejected.

Use the exact source regions documented in `REFERENCE_PACK.md`. If image tooling is available, derive production assets from `HOME_FINAL.webp` using those crop coordinates and commit the derived assets outside the read-only reference folder. If extraction tooling is unavailable, use the source image with exact CSS clipping/background positioning rather than inventing replacement art.

## Section-by-section implementation

Implement and visually compare in this order:
1. Header
2. Hero
3. Four product cards
4. Best Works
5. Tariffs
6. Energy calculator + Unified Balance
7. Final CTA

For each section match:
- outer width;
- horizontal/vertical placement;
- relative element sizes;
- typography hierarchy;
- card dimensions;
- padding and gaps;
- border radius;
- border/shadow softness;
- purple/lavender accents;
- location and scale of decorative elements.

Do not move to a “final” state because the copy and card count are correct. Visual geometry matters.

## Scope lock

HOME only. Do not redesign or expand Studio/workspace screens. Do not restore `Что можно сделать в KONTENO`. Do not add Light/Dark controls.

## Business rules

Header balance: `38 000 ⚡`, number first.

Exactly four tariffs:
- Start — `990 ₽ / мес` — `8 000 ⚡ / мес`
- Creator — `2 490 ₽ / мес` — `25 000 ⚡ / мес`
- Pro — `4 990 ₽ / мес` — `60 000 ⚡ / мес`
- Studio — `9 990 ₽ / мес` — `150 000 ⚡ / мес`

Creator is recommended.

Energy top-up is a continuous arbitrary-RUB calculator with input + slider + live base/bonus/final calculation. It is not a set of fixed packages.

Never expose `T`, `token`, `tokens`, `токен`, `токены` on HOME.

Do not fake a successful payment.

## Visual QA requirement

When browser rendering is available:
- render desktop around 1122–1440px;
- compare directly with `REFERENCE_BOARD.html`;
- perform refinement pass #1;
- compare again;
- perform refinement pass #2;
- then verify tablet/mobile adaptation.

If browser screenshots are unavailable, do not compensate by inventing design. Use the explicit crop map and exact image regions.

## Completion gate

Before reporting completion:
- confirm the approved reference was opened;
- confirm Best Works does not use invented CSS art;
- confirm no extra HOME sections exist;
- run available syntax/tests;
- run `git diff --check`;
- list changed files;
- create one fresh PR from latest main if authentication permits.

The deliverable is a browser implementation of the approved screen, not a new design proposal.
