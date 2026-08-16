# KONTENO — FINAL IMPLEMENTATION V3

Status: CURRENT AUTHORITATIVE PRODUCT/UX OVERRIDE.

This document exists to remove all remaining ambiguity. If an older screenshot, old PR, AGENTS paragraph, FULL_PRODUCT_DESIGN_SPEC paragraph, FULL_SITE_BLUEPRINT state, old Energy package table, or older Codex task conflicts with this file, THIS FILE WINS.

## 0. Current source-of-truth order
1. `codex-references/FINAL_IMPLEMENTATION_V3.md`
2. `codex-references/TARIFFS_AND_ENERGY_V2.md`
3. `codex-references/HEADER_NAV_V2.md`
4. `codex-references/LATEST_USER_APPROVED_SECTIONS.md`
5. `codex-references/approved-visuals/08_master_product_v2.webp`
6. other approved visuals under `approved-visuals/`
7. `/AGENTS.md`
8. `CODEX_MASTER_PROMPT.md`
9. `FULL_PRODUCT_DESIGN_SPEC.md`
10. `FULL_SITE_BLUEPRINT.html`
11. existing working behavior that does not conflict with the approved UX.

## 1. Brand / visual language
KONTENO is a premium white/light-lavender AI content product with purple/lilac accents, exact approved KONTENO logo, large confident black typography, rounded premium cards, thin borders, soft depth/glow, polished dimensional lavender visuals and generous whitespace.

No generic admin/SaaS dashboard look. No emoji as primary iconography. No generic square K logo. No dark production theme for this implementation.

Use `08_master_product_v2.webp` as the newest overall composition reference, BUT do not copy any unapproved numerical tariff prices/limits or any Energy package-like numbers visible inside generated mockups. Product logic in this spec wins over image text.

## 2. Landing START is fixed
The first screen must preserve the already-approved/current production hero:
- exact KONTENO logo/header;
- headline: `KONTENO — твой личный AI-помощник в создании контента`;
- supporting line: `От идеи до готового контента — в одном месте.`;
- primary CTA: `+ Создать проект` / `Создать проект`;
- floating social/content metric cards and lavender UI objects in the approved style;
- white/light-lavender premium composition.

Do NOT replace this opening hero with `Готов создать что-то своё?`.

`Готов создать что-то своё?` remains the FINAL CTA near the bottom of the landing.

## 3. Desktop header — wide product navigation
Header structure:
- left fixed zone: exact KONTENO mark + wordmark;
- center wide zone: `Идея`, `Видео`, `Изображение`, `Редактор`;
- right fixed zone: notifications, Energy balance, avatar/profile; theme control only if it is actually useful/implemented.

Critical: product items must be spread through the AVAILABLE CENTER WIDTH. They must not sit in a tight `gap:24px` cluster.

Wide desktop target:
- header padding about 36–52px;
- left zone around 220–260px;
- right zone around 220–280px;
- center zone fills remaining width;
- four nav items distributed evenly with grid `repeat(4,1fr)` or flex `space-between`;
- comfortable click target >=44px high;
- keep labels on one line.

At <900px switch to compact mobile top bar + bottom product navigation.

## 4. Landing page complete order
1. Global header
2. Approved current START hero
3. `Что можно сделать в KONTENO` — 4 rich cards: Идея / Изображение / Видео / Редактор
4. `Не нужно выбирать нейросеть` — Выгодно / Оптимально / Максимум; Оптимально recommended
5. `Всё в одном месте` — Идея → Создание → Редактор → Готово
6. `Под любой формат` — 9:16 / 1:1 / 16:9
7. Showcase / gallery
8. Tariff teaser / four subscription plans
9. `Один баланс для всего` — explain unified Energy wallet
10. Compact trust / FAQ
11. FINAL CTA `Готов создать что-то своё?`
12. Footer

Latest approved sections in `LATEST_USER_APPROVED_SECTIONS.md` are hard visual targets for AI selection, workflow, formats and final CTA.

## 5. Exactly FOUR subscription tariffs
There are exactly four SUBSCRIPTION TARIFFS. They are not Energy packages.

Working tier names:
1. `Старт`
2. `Creator`
3. `Pro`
4. `Studio`

`Creator` should be the recommended/popular visual tier unless central business config says otherwise.

Tariffs exist to define the user's service/access level for generation and product capabilities. They may control, only where backed by central config/real implementation:
- access to Idea / Image / Video / Editor;
- monthly included Energy allowance;
- available value/quality levels;
- generation priority/concurrency;
- project/history/storage limits;
- export/support features.

IMPORTANT:
- Do not invent commercial prices, included Energy counts, unlimited generation claims, team seats, commercial rights or watermark promises if there is no current config/backend definition.
- Put all tariff prices/entitlements in ONE central tariff config.
- If exact commercial numbers are still undecided, use clearly configurable demo values in the implementation layer and mark them as product-config placeholders, not hard business truth.

Tariff purchase/change is a subscription flow.

## 6. Energy is a separate consumable wallet
KONTENO has exactly ONE unified Energy balance across Idea / Image / Video / Editor and future paid AI actions.

Format: number first, lightning second: `38 000 ⚡`.
Never show user-facing `T`, `token`, `tokens`, `токен`, `токены`.

Clicking the balance opens the separate `Пополнить энергию` calculator.

Tariff change must never silently buy Energy.
Energy top-up must never silently change tariff.

## 7. Energy top-up = CONTINUOUS CALCULATOR, NOT PACKAGES
Absolute rule: DO NOT build 4 fixed Energy package cards. DO NOT build a snap-only slider with 500/1000/2500/5000 package stops.

Dedicated page: `Пополнить энергию`.

Desktop composition:
- title + explanation;
- current balance card;
- left/main calculator panel;
- right order/payment summary;
- payment/billing details beneath/adjacent where appropriate.

Calculator controls:
- editable numeric RUB field: `Сумма пополнения`;
- continuous slider synchronized with the field;
- arbitrary valid RUB amount inside centrally configured min/max bounds;
- prominent `Получишь` Energy result;
- current bonus percentage;
- live base Energy / bonus Energy / final Energy / amount due;
- optional helper to next bonus threshold;
- dynamic CTA `Перейти к оплате — X ₽`.

Current economic basis unless backend config overrides it:
- `1 ₽ = 10` base Energy.
- below 500 ₽: +0%
- 500–999 ₽: +5%
- 1 000–2 499 ₽: +10%
- 2 500–4 999 ₽: +15%
- 5 000 ₽ and above: +20%.

Formula:
`baseEnergy = rubAmount * 10`
`bonusEnergy = round(baseEnergy * bonusRate)`
`finalEnergy = baseEnergy + bonusEnergy`

Threshold numbers are bonus thresholds/examples — NOT purchase packages.

Optional quick-fill chips are allowed only as tiny secondary convenience shortcuts. The main UI must still clearly be a free calculator.

## 8. Insufficient Energy flow
If a generation/edit costs more than current Energy:
- do not silently redirect;
- show current, required and missing Energy;
- CTA `Пополнить энергию`;
- calculate the minimum RUB amount that will cover the shortfall after bonus;
- open calculator prefilled with that amount;
- allow user to change the amount freely;
- preserve prompt, uploads, format, quality and other settings;
- after successful real top-up offer return to creation;
- NEVER auto-run the expensive generation after return.

## 9. Product application surfaces
Build coherent, dedicated workspaces — not four labels routing to one screen.

### Dashboard
- `Что создаём сегодня?`
- universal prompt/start panel
- quick start cards
- recent projects
- examples/templates
- designed empty state.

### Идея
- brief/prompt composer
- objective/platform/tone chips where useful
- structured result cards, not plain chat only
- actions: Развить / Сделать видео / Сделать изображение / Скопировать.

### Изображение
Two-column desktop workspace:
- prompt
- reference upload
- aspect ratio
- style presets
- Выгодно / Оптимально / Максимум
- live Energy cost
- generation CTA
- large result canvas
- download/editor/variation/enhance actions.

### Видео
- Текст → видео
- Фото → видео
- prompt/reference
- format
- duration/motion only when supported
- quality selector
- live Energy cost
- large player/result canvas.

### Редактор
- large central canvas
- natural-language edit instructions
- useful supported contextual tools only
- before/after mode
- export.

### Мои проекты / История
- search
- type filters
- sorting
- visual project cards
- generation/history table or list where useful
- premium empty state.

## 10. Profile / Billing
Profile must clearly separate:
- account/profile data
- `Текущий тариф`
- `Баланс энергии`
- tariff subscription management/history if real
- Energy top-up transaction history if real
- notification settings
- interface settings
- sign out.

Do not merge tariff billing and Energy top-ups into one ambiguous purchase concept.

## 11. Payment honesty
Only show payment methods truly supported by the current backend/provider.
The product architecture should support RUB billing and Russian payment methods, but unsupported methods must not be presented as working.

If checkout/backend is not integrated: clearly DEMO/MOCK. Never fake real successful payment or credit Energy in a failed/cancelled/demo flow. Prevent double submit.

## 12. Mobile
Mobile is intentionally designed, not scaled desktop:
- compact top bar: KONTENO + Energy + profile;
- bottom nav: Idea / Video / Image / Editor;
- one-column workspaces;
- calculator: amount → slider → result → bonus → summary → payment → CTA;
- tariff cards stacked or horizontally scrollable with readable comparisons;
- sheets instead of oversized desktop modals where appropriate;
- >=44px practical touch targets;
- no horizontal overflow.

## 13. System states
Design and implement consistent premium states for:
- empty
- upload
- loading
- generating
- success
- failure
- insufficient Energy
- notifications empty
- disabled/future feature.

Do not fake exact progress percentages when unavailable.

## 14. Preservation rules
Preserve useful working behavior unless explicitly replaced:
- routing/hash routing
- uploads
- prompt values
- demo generation logic
- localStorage/local state
- projects/history
- preview/download
- responsive navigation
- accessibility basics.

Do not migrate frameworks without a real technical reason.

## 15. Visual QA
Before completion verify at minimum:
- 1440×900 desktop
- about 1024px tablet
- 390×844 mobile

Check separately:
- landing/start hero
- tariffs
- Energy calculator
- Dashboard
- Idea
- Image
- Video
- Editor
- Projects
- Profile.

Compare against approved references and `08_master_product_v2.webp`. Do at least one visual refinement pass.

## 16. Acceptance blockers
Do not mark complete if ANY of these are true:
- opening hero was replaced by final CTA design;
- desktop product nav is bunched together;
- Energy uses four fixed package cards;
- tariff cards are being used as Energy top-up choices;
- tariffs and Energy are merged into one purchase state;
- `T`/token wording appears to users;
- four product tabs are fake aliases to one page;
- primary UI relies on emoji/generic admin cards;
- responsive/mobile was not checked;
- existing useful behavior was broken without replacement.

## 17. Git / completion
Run available tests/syntax/lint, `git diff --check`, inspect `git diff --name-only`, keep only intentional implementation files, and do not modify the approved reference assets during the Codex implementation PR.

Final report headings:
- `VISUAL MATCH`
- `LANDING`
- `TARIFFS`
- `ENERGY CALCULATOR`
- `PRODUCT`
- `PROJECTS / PROFILE`
- `RESPONSIVE / QA`
- `GIT`
- `BLOCKERS`.