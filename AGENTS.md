# KONTENO — Codex project instructions

Work only inside the EXISTING KONTENO repository. Do not create a replacement app and do not migrate frameworks without a real technical reason.

## Important: no binary reference bundle

Do NOT look for, recreate, download, add, rename, or modify any ZIP/PNG/WebP reference bundle as part of a Codex PR. The previous binary reference archive was intentionally removed because Codex PR publishing does not support adding binary files reliably.

For the current task, use the user-provided task prompt as the primary product/design specification together with the existing repository code. Do not add binary assets unless the user explicitly asks and the publishing path supports them.

## Absolute current KONTENO rules

- Current production theme is the approved Light Theme.
- Keep architecture ready for a future Dark Theme and keep a Light/Dark control in the global header, but do not build the final Dark Theme yet.
- Main navigation: `Идея`, `Видео`, `Изображение`, `Редактор`.
- KONTENO has exactly ONE unified Energy balance for every paid tool.
- User-facing currency name is Energy / `Энергия`, not tokens.
- Energy formatting is ALWAYS number first, lightning second: `38 000 ⚡`, `1 300 ⚡`, `5 250 ⚡`.
- Never show `T` as the current currency symbol.
- Final packages:
  - `500 ₽ → 5 250 ⚡ (+5%)`
  - `1 000 ₽ → 11 000 ⚡ (+10%)`
  - `2 500 ₽ → 28 750 ⚡ (+15%)`
  - `5 000 ₽ → 60 000 ⚡ (+20%)`
- One central package configuration must be reused everywhere.
- The Energy purchase page should be a premium KONTENO Light Theme flow with package selection, snap slider, country/payment method UI, promo UI, transparent order summary, insufficient-Energy flow and safe checkout states.
- Only show payment methods actually supported by the repository/backend. If there is no real provider, keep it honestly MOCK/DEMO and never fake a successful real payment.
- Do not copy Syntx branding, dark palette or orange styling.
- Preserve existing working creation/upload/project/navigation behavior unless the task explicitly replaces it.
- Use reusable components/helpers and accessible responsive UI.

## Before finishing any task

1. Inspect the existing repository before editing.
2. Keep changes text/code-only unless binary publishing is explicitly required and supported.
3. Run relevant tests, syntax/lint/build checks available in the repository.
4. Visually inspect affected desktop/mobile UI when the environment supports a browser.
5. Confirm `git diff --name-only` contains only intentional task files.
6. Never add ZIPs, generated screenshots, browser downloads, `.pyc`, databases, build artifacts or other binary files to a Codex PR.
