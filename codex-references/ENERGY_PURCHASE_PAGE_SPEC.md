# KONTENO — `Пополнить энергию` specification

## Visual target

Build a dedicated responsive Light Theme page consistent with the approved KONTENO visual baseline. Use `approved-visuals/05_purchase.webp` for interaction/information hierarchy only where it shows Syntx. KONTENO branding, purple/lilac palette and premium component language must come from the KONTENO references.

## Main layout

Show:
- page title `Пополнить энергию`;
- subtitle explaining the unified balance;
- current balance, e.g. `38 000 ⚡`;
- package selection;
- selected Energy as a prominent value;
- country/billing region;
- real supported payment method selection or honest MOCK/DEMO state;
- promo code section;
- transparent order summary;
- final CTA.

## Package selection

Only four packages exist:
- 500 ₽ → 5 250 ⚡ (+5%)
- 1 000 ₽ → 11 000 ⚡ (+10%)
- 2 500 ₽ → 28 750 ⚡ (+15%)
- 5 000 ₽ → 60 000 ⚡ (+20%)

Default: `1 000 ₽ → 11 000 ⚡`.

Four package cards and the range slider must share one selected-package state. The slider snaps only to the four packages; no arbitrary amounts.

When selection changes, synchronize:
- selected card;
- slider;
- prominent selected Energy;
- bonus;
- summary;
- CTA;
- amount due.

## Insufficient Energy

Do not silently redirect.

Show a modal/sheet containing:
- current balance;
- required Energy;
- missing Energy;
- CTA `Пополнить энергию`.

Select the smallest package whose final Energy covers the shortfall. Preserve the user's creation prompt/settings/context. After a successful real top-up, offer `Вернуться к созданию`; never auto-trigger the expensive generation.

## Country and payment

Country/billing region is selectable unless account billing data is authoritative.

Only render payment methods actually supported by the backend/provider. Possible methods such as Russian card, SBP, international card, PayPal or crypto must not be presented as real unless the integration exists.

If the repository has no real payment provider/backend, render a clearly labeled MOCK/DEMO state. Do not fake checkout success and do not credit Energy.

## Promo

States:
- empty;
- validating;
- valid;
- invalid;
- applied;
- removed/reset.

Do not invent working promo codes when no promo API exists.

## Summary example

`Пакет                1 000 ₽`
`Базовая энергия      10 000`
`Бонус +10%           +1 000`
`Получишь             11 000 ⚡`
`К оплате             1 000 ₽`

## CTA

Preferred:
- `Перейти к оплате — 1 000 ₽`
- helper: `На баланс поступит 11 000 ⚡`

Never put the lightning before the number.

## State model

Use explicit safe states such as:
- `idle`
- `packageSelected`
- `paymentMethodSelected`
- `promoValidating`
- `ready`
- `creatingCheckout`
- `redirecting`
- `success`
- `failure`
- `cancelled`

Prevent double submit.

Failed/cancelled payment never credits Energy. A real success must refresh authoritative backend wallet state rather than trusting the browser.
