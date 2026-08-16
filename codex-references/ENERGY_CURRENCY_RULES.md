# KONTENO Energy rules

## One wallet

KONTENO has exactly one unified Energy balance per user. Idea, Video, Image, Editor and future paid AI tools use the same wallet.

Do not create separate per-tool balances.

## User-facing format

Currency name: `Энергия` / Energy.

Always show number first and lightning second:
- `38 000 ⚡`
- `1 300 ⚡`
- `5 250 ⚡`

Never show:
- `⚡ 38 000`;
- `38 000 T`;
- `token`, `tokens`, `токен`, `токены` in user-facing copy.

In rendered premium UI prefer a reusable vector Zap/Lightning icon after the localized number. A text formatter may use the `⚡` glyph for tests/plain text.

## Final top-up packages

Use one central configuration everywhere:

| RUB | Base Energy | Bonus | Final Energy |
|---:|---:|---:|---:|
| 500 ₽ | 5 000 | +5% | 5 250 ⚡ |
| 1 000 ₽ | 10 000 | +10% | 11 000 ⚡ |
| 2 500 ₽ | 25 000 | +15% | 28 750 ⚡ |
| 5 000 ₽ | 50 000 | +20% | 60 000 ⚡ |

`5 000 ₽` is the maximum-value package. `2 500 ₽` may be marked `Популярно`.

## Authoritative balance behavior

Header, creation settings, confirmation dialogs, insufficient-Energy flow, purchase page and transaction history must all read the same authoritative balance state.

For a frontend-only demo, one clearly named local persistence adapter is acceptable. For production, backend wallet state must be authoritative.

## Transactions

Examples:
- `Пополнение энергии  +11 000 ⚡`
- `Создание видео  −1 300 ⚡`
- `Создание изображения  −850 ⚡`

The lightning always follows the amount.
