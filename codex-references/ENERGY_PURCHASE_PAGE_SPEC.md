# KONTENO — `Пополнить энергию` specification — CURRENT

This page is an Energy CALCULATOR, not a fixed-package selector. `TARIFFS_AND_ENERGY_V2.md` overrides older package screenshots/spec text.

## Visual target
Build a dedicated responsive Light Theme page consistent with approved KONTENO visuals. Syntx may inform calculator interaction/information hierarchy only; never copy its branding, palette or identity.

## Main layout
Show:
- title `Пополнить энергию`;
- subtitle explaining the unified Energy balance;
- current balance, e.g. `38 000 ⚡`;
- large calculator;
- prominent calculated `Получишь` Energy;
- bonus/rate helper;
- country/billing region where needed;
- only real supported payment methods or explicit DEMO/MOCK state;
- optional promo state if an API exists;
- transparent order summary;
- final CTA.

## Calculator selection
The user chooses the RUB amount directly.

Required controls:
- editable numeric `Сумма пополнения` field;
- continuous range slider synchronized to the RUB amount;
- calculated Energy result;
- current bonus percentage;
- optional helper to next bonus threshold.

The slider is continuous within centrally configured min/max bounds. It MUST NOT snap to four predefined packages.

Do not use four fixed top-up cards as the primary UI.

## Calculation
Unless backend config overrides it:
- `1 ₽ = 10 base Energy`.
- <500 ₽ → 0%
- 500–999 ₽ → +5%
- 1 000–2 499 ₽ → +10%
- 2 500–4 999 ₽ → +15%
- >=5 000 ₽ → +20%

Show live:
- RUB amount;
- base Energy;
- bonus Energy;
- final Energy;
- amount due.

Example for 1 400 ₽:
`Сумма               1 400 ₽`
`Базовая энергия      14 000`
`Бонус +10%           +1 400`
`Получишь             15 400 ⚡`
`К оплате             1 400 ₽`

This is an example, not a package.

## CTA
Dynamic CTA:
`Перейти к оплате — {rubAmount} ₽`
Helper:
`На баланс поступит {finalEnergy} ⚡`

## Insufficient Energy
Show a modal/sheet with current, required and missing Energy. CTA opens the calculator with the minimum RUB amount calculated to cover the shortfall after bonus. The user may change the amount freely.

Preserve prompt/uploads/settings. After real top-up offer `Вернуться к созданию`; never auto-run generation.

## Tariffs are separate
Do not display subscription tariff cards inside this calculator as if they were Energy packages. A subtle link `Смотреть тарифы` is allowed. Subscription purchase and Energy top-up are independent flows.

## Payment safety
Only show payment methods actually supported by backend/provider. If none exists, show a clearly labeled DEMO/MOCK checkout and do not credit Energy.
Prevent double submit. Failed/cancelled payment never credits Energy. Real success refreshes authoritative backend wallet state.

## Responsive
Desktop: two columns — calculator left, order/payment summary right.
Mobile: one column — amount, slider, result, bonus, summary, payment, CTA. No package carousel.

## States
Use explicit safe states such as `idle`, `editingAmount`, `ready`, `creatingCheckout`, `redirecting`, `success`, `failure`, `cancelled`.