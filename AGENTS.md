# KONTENO — Codex project instructions

Before making any product, UI, billing, balance, navigation, or theme changes, use the approved KONTENO reference pack already stored in this repository:

`codex-references/KONTENO_APPROVED_REFERENCES.zip`

## Required first step for Codex

Extract it into a temporary working directory (do not commit the extracted files unless explicitly asked):

```bash
rm -rf /tmp/konteno-approved-references
mkdir -p /tmp/konteno-approved-references
unzip -q codex-references/KONTENO_APPROVED_REFERENCES.zip -d /tmp/konteno-approved-references
```

Then read, in this order:

1. `/tmp/konteno-approved-references/MASTER_PROMPT_FOR_CODEX.md`
2. `/tmp/konteno-approved-references/TAB_REFERENCE_MAP.md`
3. the relevant images under `/tmp/konteno-approved-references/visuals/`
4. supporting docs under `/tmp/konteno-approved-references/docs/` and `/tmp/konteno-approved-references/APPROVED_TABS/`

The archive contains all approved visual content once, with duplicate historical/tab paths mapped in `TAB_REFERENCE_MAP.md`, so the repository stays lightweight while Codex still has every approved reference.

## Absolute current rules

- Work inside the existing KONTENO repository. Do not create a replacement app.
- Current production theme is the approved Light Theme.
- Keep architecture ready for a future Dark Theme and keep the theme toggle in the global header.
- KONTENO has ONE unified Energy balance for all tools.
- User-facing Energy format is always number first, lightning second: `38 000 ⚡`, `1 300 ⚡`, `5 250 ⚡`.
- Never show `T` as the current currency symbol.
- Final packages: `500 ₽ → 5 250 ⚡ (+5%)`, `1 000 ₽ → 11 000 ⚡ (+10%)`, `2 500 ₽ → 28 750 ⚡ (+15%)`, `5 000 ₽ → 60 000 ⚡ (+20%)`.
- The Syntx purchase screenshots are interaction/layout references only. Do not copy Syntx branding or dark styling.
- When an older screenshot conflicts with `MASTER_PROMPT_FOR_CODEX.md`, the master prompt wins.

Before finishing a task, run the repository's relevant tests/lint/build and visually verify affected desktop/mobile UI when possible.
