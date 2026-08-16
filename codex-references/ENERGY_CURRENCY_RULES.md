# KONTENO Energy rules — CURRENT

`TARIFFS_AND_ENERGY_V2.md` is the current commercial source of truth.

## One wallet
KONTENO has exactly one unified Energy balance per user. Idea, Video, Image, Editor and future paid AI tools use the same wallet. Do not create separate per-tool balances.

## User-facing format
Currency name: `Энергия` / Energy.
Always show number first and lightning second, e.g. `38 000 ⚡`, `1 300 ⚡`.
Never show `⚡ 38 000`, `38 000 T`, `token`, `tokens`, `токен`, `токены` in user-facing copy.
Use a reusable formatter and vector Zap/Lightning icon in rendered UI.

## Top-up model — calculator, not packages
There are NO fixed Energy top-up packages.

The user chooses an arbitrary valid RUB top-up amount through the `Пополнить энергию` calculator using a numeric field and continuous slider. The selected RUB amount and calculated Energy update live.

Base conversion unless backend/business config overrides it:
`1 ₽ = 10 base Energy`.

Current bonus thresholds:
- below 500 ₽: +0%
- 500–999 ₽: +5%
- 1 000–2 499 ₽: +10%
- 2 500–4 999 ₽: +15%
- 5 000 ₽ and above: +20%

Formula:
`baseEnergy = rubAmount * 10`
`bonusEnergy = round(baseEnergy * bonusRate)`
`finalEnergy = baseEnergy + bonusEnergy`

Thresholds, conversion rate, min/max RUB and rounding rules must live in one central config/helper and be testable.

Any values such as 500 / 1000 / 2500 / 5000 ₽ are bonus thresholds/examples only. They must NOT be rendered as four fixed purchase cards or snap-only package options.

## Four tariffs are separate
KONTENO has exactly four SUBSCRIPTION TARIFFS. Tariffs define access/service level and may include monthly Energy according to central tariff config. Energy top-up is a separate calculator purchase and never changes the tariff.

## Authoritative balance behavior
Header, creation settings, confirmation dialogs, insufficient-Energy flow, calculator, transaction history and profile must all read the same authoritative balance state.
For a frontend-only demo, one clearly named local persistence adapter is acceptable. For production, backend wallet state must be authoritative.

## Insufficient Energy
Do not select a fixed package. Calculate the minimum RUB amount required to cover the missing Energy after the applicable bonus, prefill the calculator with that amount, and allow the user to change it freely. Preserve the user's work and never auto-run generation after return.

## Transactions
Examples:
- `Пополнение энергии  +15 400 ⚡`
- `Создание видео  −1 300 ⚡`
- `Создание изображения  −850 ⚡`
The lightning always follows the amount.