# KONTENO — CODEX EXECUTE V3

You are implementing the existing repository `mdbiplob66789-wq/konteno`.

Do NOT invent a new product or visual direction. Execute the approved KONTENO design and product logic end-to-end.

## Read first, in this exact order
1. `codex-references/FINAL_IMPLEMENTATION_V3.md`
2. `codex-references/TARIFFS_AND_ENERGY_V2.md`
3. `codex-references/HEADER_NAV_V2.md`
4. `codex-references/LATEST_USER_APPROVED_SECTIONS.md`
5. `codex-references/approved-visuals/08_master_product_v2.webp`
6. every other file under `codex-references/approved-visuals/`
7. `/AGENTS.md`
8. `codex-references/CODEX_MASTER_PROMPT.md`
9. `codex-references/FULL_PRODUCT_DESIGN_SPEC.md`
10. `codex-references/FULL_SITE_BLUEPRINT.html`
11. inspect the current implementation and preserve useful working behavior.

When documents conflict, `FINAL_IMPLEMENTATION_V3.md` wins.

## Non-negotiable current decisions
- Preserve the CURRENT landing start hero: `KONTENO — твой личный AI-помощник в создании контента`. Do not replace it with the bottom CTA.
- `Готов создать что-то своё?` is the FINAL CTA near the bottom.
- Desktop header product nav `Идея / Видео / Изображение / Редактор` must be stretched evenly across the available center width, not bunched together.
- There are exactly FOUR SUBSCRIPTION TARIFFS. Tariffs control service/access level and generation capabilities.
- Tariffs are NOT Energy packages.
- Energy top-up is a separate CONTINUOUS CALCULATOR using arbitrary valid RUB amount + numeric field + continuous slider.
- Do NOT create four fixed Energy top-up cards and do NOT create a snap-only package slider.
- One unified Energy wallet across Idea/Image/Video/Editor.
- User-facing Energy is always number first + lightning after it, e.g. `38 000 ⚡`. Never show `T` or token terminology.

## Execute full scope
Build/refine all of the following as one coherent premium KONTENO product:
- complete public landing;
- current approved start hero;
- four product capability section;
- AI quality/value section;
- workflow section;
- formats section;
- showcase;
- four-tariff section/page;
- one-balance section;
- FAQ/trust;
- final CTA;
- Dashboard;
- Idea workspace;
- Image workspace;
- Video workspace;
- Editor workspace;
- Projects/History;
- Energy calculator/top-up;
- Profile/Settings/Billing separation;
- notifications;
- auth/onboarding where applicable;
- loading/empty/error/insufficient-Energy states;
- responsive desktop/tablet/mobile.

## Tariffs
Use four cards: `Старт`, `Creator`, `Pro`, `Studio` unless current central business config already defines names.
`Creator` is visually recommended by default.
Keep ALL tariff prices, included Energy, access and numerical limits in one central config.
Do not invent hard business claims when not configured.

## Energy calculator
Implement `Пополнить энергию` as a calculator, not package selection.
Required:
- current balance;
- editable RUB amount field;
- continuous slider;
- arbitrary valid amount inside configured min/max;
- live base Energy;
- live bonus;
- live final Energy;
- dynamic amount due;
- dynamic CTA;
- insufficient-Energy prefill with minimum calculated RUB to cover shortfall;
- preserve creation state;
- no automatic generation after return.

Current basis unless backend config overrides:
`1 ₽ = 10` base Energy.
Bonus thresholds:
- <500 ₽ = 0%
- 500–999 ₽ = 5%
- 1000–2499 ₽ = 10%
- 2500–4999 ₽ = 15%
- >=5000 ₽ = 20%.

Thresholds are NOT packages.

## Visual quality
Use the exact approved KONTENO light visual language:
- white/light lavender surfaces;
- purple/lilac accents;
- exact logo;
- large confident typography;
- premium rounded cards;
- thin borders;
- soft depth/glow;
- polished vector/3D visual language;
- generous whitespace.

Do not fall back to emoji tiles, generic Bootstrap/admin panels or a generic square K.

## Implementation behavior
Preserve useful existing routing, uploads, prompts, demo generation flows, localStorage/local state, history/projects, preview/download, responsive navigation and accessibility unless replaced by approved UX.
Do not migrate framework without a real reason.
Do not fake unsupported payment providers, OAuth or backend operations.

## QA before PR
Do not stop after audit. Implement everything, then visually verify and refine.
Check at minimum:
- 1440×900
- ~1024px
- 390×844

Check landing, tariffs, Energy calculator, Dashboard, Idea, Image, Video, Editor, Projects and Profile separately.
Run available tests/lint/syntax, `git diff --check`, then inspect `git diff --name-only`.
Do not modify approved reference assets in the implementation PR.

## Finish
Open one clean PR against `main` with only intentional implementation changes.

Final report must contain:
`VISUAL MATCH`
`LANDING`
`TARIFFS`
`ENERGY CALCULATOR`
`PRODUCT`
`PROJECTS / PROFILE`
`RESPONSIVE / QA`
`GIT`
`BLOCKERS`

Do not ask the user for the design again. Do not wait for approval after the audit. Start implementing now and complete the full scope.