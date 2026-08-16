# KONTENO — TARIFFS & ENERGY V2

Status: CURRENT PRODUCT LOGIC — overrides any older fixed Energy package references.

## 1. Two separate commercial systems

KONTENO has TWO different things and the UI must never merge them:

### A. 4 subscription tariffs
A tariff defines the user's product access and monthly service level: which KONTENO tools are available, quality/priority limits, monthly included Energy allowance if configured, generation limits/concurrency, history/storage/support features.

There are exactly four tariff tiers. Use these working names in UI unless a later business decision renames them:
1. `Старт`
2. `Creator`
3. `Pro`
4. `Studio`

The tariff page is a comparison page with four cards and a monthly/yearly billing toggle when billing supports it. Exact prices, included monthly Energy amounts and numerical limits MUST come from one central tariff config. Do not scatter values through components. If exact commercial values are not yet supplied by backend/config, keep them clearly configurable and do not invent backend entitlements.

Recommended hierarchy:
- `Старт` — entry access to core creation.
- `Creator` — recommended plan for active creators; visually marked `Популярный`.
- `Pro` — higher generation/quality/priority limits.
- `Studio` — maximum service level, larger limits/team-ready architecture where supported.

Tariff cards may compare:
- Idea / Image / Video / Editor access;
- monthly included Energy;
- available quality levels (`Выгодно / Оптимально / Максимум`);
- generation concurrency/priority;
- project/history/storage limits;
- export/watermark rules only if implemented;
- support level.

Do not claim team seats, unlimited generations, watermark removal, commercial rights or other entitlements unless they are implemented/configured.

### B. Separate Energy top-up calculator
Energy is a unified consumable wallet used by paid AI actions across Idea, Image, Video and Editor.

The user DOES NOT choose from four fixed Energy packages.

The user chooses the top-up amount through a CALCULATOR.

This calculator is a separate page/flow from tariff subscription purchase.

## 2. Energy calculator UX

Page: `Пополнить энергию`.

Desktop layout:
- page title and short explanation;
- current balance card, e.g. `38 000 ⚡`;
- large calculator panel;
- payment/order summary panel;
- supported payment method / billing region below or adjacent.

Core calculator controls:
- editable RUB amount field: `Сумма пополнения`;
- continuous range slider tied to the RUB amount (NOT four snapping package stops);
- large read-only result: `Получишь` → calculated Energy;
- bonus indicator;
- effective rate / next bonus level helper where useful;
- order summary;
- CTA `Перейти к оплате — X ₽`.

The amount may be typed directly or changed with the slider. The slider is continuous within centrally configured min/max bounds. Min/max values must live in one config and remain easy to change.

Do not render fixed Energy package cards such as 500 / 1000 / 2500 / 5000 ₽ as the primary selection mechanism.

Optional tiny quick-fill chips are allowed only as convenience shortcuts if later desired, but they must never make the flow look like package selection. The calculator remains primary and arbitrary valid amounts remain selectable.

## 3. Energy calculation

Preserve the existing economic basis unless a later backend config overrides it:
- base conversion: `1 ₽ = 10 base Energy`.

Bonus applies by amount threshold to the whole selected top-up amount:
- below 500 ₽: 0% bonus;
- 500–999 ₽: +5%;
- 1 000–2 499 ₽: +10%;
- 2 500–4 999 ₽: +15%;
- 5 000 ₽ and above: +20%.

Formula:
`baseEnergy = rubAmount * 10`
`bonusEnergy = round(baseEnergy * bonusRate)`
`finalEnergy = baseEnergy + bonusEnergy`

Examples are explanatory only, NOT packages:
- 650 ₽ → 6 500 base + 325 bonus = 6 825 ⚡
- 1 400 ₽ → 14 000 base + 1 400 bonus = 15 400 ⚡
- 3 200 ₽ → 32 000 base + 4 800 bonus = 36 800 ⚡

All calculation constants/thresholds belong in one central config/helper and must have tests.

## 4. Energy formatting

One wallet across all KONTENO tools.

User-facing name: `Энергия`.

Always format number first, lightning second:
- `38 000 ⚡`
- `1 300 ⚡`

Never show user-facing `T`, `token`, `tokens`, `токен`, `токены`.
Use a proper vector lightning icon in premium UI.

## 5. Relationship between tariff and Energy

Tariff subscription and Energy top-up are related but not the same purchase.

A tariff may include a monthly Energy allowance if the central tariff config says so. Extra Energy is added through the calculator.

Changing tariff must not silently purchase Energy.
Topping up Energy must not silently change tariff.

Profile/Billing should show separately:
- `Текущий тариф`;
- `Баланс энергии`;
- tariff billing history/subscription status where real;
- Energy top-up transaction history where real.

## 6. Insufficient Energy flow

When an action costs more Energy than the current balance:
- show required Energy;
- show current Energy;
- show missing Energy;
- offer `Пополнить энергию`;
- prefill the calculator with the MINIMUM RUB amount that will produce enough final Energy after bonus, subject to configured minimum/top-up rounding rules;
- user can still increase/change that amount freely;
- preserve prompt, uploads and generation settings;
- returning from top-up never auto-runs an expensive generation.

Do NOT recommend a fixed package.

## 7. Payments

KONTENO should be architected for RUB top-ups and Russian payment methods, but only display methods actually supported by the connected backend/provider.

If checkout is not integrated, show an explicit DEMO/MOCK state. Never fake a successful payment and never credit Energy after a failed/cancelled/demo checkout.

Prevent double submit. Real payment success must refresh authoritative backend wallet state.

## 8. Visual language

Both tariff and Energy pages use the existing approved KONTENO Light Theme:
- white / light lavender background;
- purple/lilac accents;
- exact KONTENO logo;
- rounded premium glass cards;
- thin borders;
- soft shadow/glow;
- clear black/dark typography;
- vector icons;
- generous whitespace.

Use Syntx only as an interaction/information-density reference for calculator logic. NEVER copy Syntx brand, colors, typography or identity.

## 9. Responsive behavior

Tariffs:
- desktop: four comparison cards in one row when space permits;
- tablet: 2×2;
- mobile: stacked or horizontal snap cards with feature comparison accessible without tiny text.

Energy calculator:
- desktop: calculator + summary two-column composition;
- mobile: one-column, amount field + slider + result first, CTA sticky only if helpful;
- no fixed-package carousel.

## 10. Source-of-truth rule

If `AGENTS.md`, `FULL_PRODUCT_DESIGN_SPEC.md`, `FULL_SITE_BLUEPRINT.html`, `CODEX_MASTER_PROMPT.md`, old screenshots or older PRs mention four fixed Energy top-up packages, that older behavior is SUPERSEDED by this V2 rule.

The four-count rule now applies to SUBSCRIPTION TARIFFS, not Energy top-up amounts.