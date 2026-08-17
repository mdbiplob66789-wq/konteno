# KONTENO HOME_FINAL — literal reference pack

## Status

This pack represents the exact user-approved HOME screen. It is not inspiration, a moodboard, or a design direction. It is the visual target.

Primary source:
- `codex-references/approved-visuals/HOME_FINAL.webp`

Magnified section board:
- `codex-references/home-final/REFERENCE_BOARD.html`

Reference dimensions: `1122 × 1402`.

## Section crop map

The coordinates below refer to the original `HOME_FINAL.webp` pixel space.

| ID | Section | x | y | width | height |
|---|---|---:|---:|---:|---:|
| 01 | Header | 0 | 0 | 1122 | 70 |
| 02 | Hero | 0 | 65 | 1122 | 300 |
| 03 | Product cards | 30 | 350 | 1062 | 135 |
| 04 | Best works | 30 | 475 | 1062 | 230 |
| 05 | Tariffs | 30 | 700 | 1062 | 378 |
| 06 | Energy + unified balance | 30 | 1072 | 1062 | 196 |
| 07 | Final CTA | 30 | 1260 | 1062 | 142 |

Exact best-work previews visible inside the approved screenshot:

| Asset | x | y | width | height |
|---|---:|---:|---:|---:|
| Sports car preview | 65 | 525 | 312 | 161 |
| Mountain lake preview | 394 | 525 | 211 | 161 |
| Fitness video preview | 625 | 525 | 190 | 161 |

If local image tooling is available, Codex may derive production preview assets from those exact regions of the READ-ONLY `HOME_FINAL.webp` and save the derived production assets outside `codex-references/approved-visuals/`. Do not alter the baseline reference itself.

## Literal-match rules

1. Do not redesign the screen.
2. Do not treat any crop as inspiration.
3. Do not invent alternative illustrations, card art, gradients, hero geometry, spacing, content hierarchy, or decorative arrangements.
4. If something exists in `HOME_FINAL.webp`, reproduce it as closely as the browser implementation reasonably allows.
5. If something is absent from `HOME_FINAL.webp`, do not add it to HOME.
6. Keep the exact section order visible in the approved screen.
7. Best works must visually match the approved car / mountain lake / fitness previews. CSS-generated substitutes are explicitly rejected.
8. Header must match the approved composition: KONTENO left, four icon+label product links across center, bell, `38 000 ⚡`, avatar right.
9. Hero must match the centered approved composition and the relative positions of social cards/decorative objects.
10. Four product cards, Best Works container, tariffs, Energy/balance row, and final CTA should preserve the approved widths, proportions, radii, whitespace and hierarchy.

## Business-logic exception

The screenshot is authoritative for visual geometry, but calculator business logic remains config-driven. Do not hard-code a screenshot example when it conflicts with the authoritative Energy config.

Current approved tariffs:
- Start — `990 ₽ / мес` — `8 000 ⚡ / мес`
- Creator — `2 490 ₽ / мес` — `25 000 ⚡ / мес`
- Pro — `4 990 ₽ / мес` — `60 000 ⚡ / мес`
- Studio — `9 990 ₽ / мес` — `150 000 ⚡ / мес`

Creator is recommended.

Top-up remains an arbitrary-RUB continuous calculator, not fixed packages.

## QA gate

A HOME implementation is not accepted merely because it contains the same sections. Before submitting a PR, compare the rendered HOME against `REFERENCE_BOARD.html` section-by-section and perform at least two visual-refinement passes.

Required comparison order:
`HEADER → HERO → PRODUCT CARDS → BEST WORKS → TARIFFS → ENERGY/BALANCE → FINAL CTA`.
