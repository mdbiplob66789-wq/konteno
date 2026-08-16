# KONTENO approved references for Codex

This folder is intentionally lightweight so it can live in the main repository without duplicating tens of megabytes of the same reference images.

`KONTENO_APPROVED_REFERENCES.zip` contains:

- final `MASTER_PROMPT_FOR_CODEX.md`;
- all approved KONTENO visual reference content;
- Light Theme references;
- global header/theme/logo references;
- Idea references;
- Video references;
- Image references;
- Editor references;
- My Works/history references;
- Energy/balance/purchase references;
- Profile/notification references;
- Landing references;
- future Dark Theme reference;
- current implementation references;
- Energy currency and purchase-page specs;
- the legacy prototype for behavioral context;
- `TAB_REFERENCE_MAP.md`, which maps every original tab/reference path to the corresponding optimized visual in `visuals/`.

The visual copies inside the repository pack are optimized WebP versions of the approved originals so Codex can inspect them quickly. Duplicate images are stored only once and mapped back to every approved tab/path.

Codex should follow the root `AGENTS.md` automatically. For manual inspection:

```bash
rm -rf /tmp/konteno-approved-references
mkdir -p /tmp/konteno-approved-references
unzip -q codex-references/KONTENO_APPROVED_REFERENCES.zip -d /tmp/konteno-approved-references
```

Then start with:

```text
/tmp/konteno-approved-references/MASTER_PROMPT_FOR_CODEX.md
/tmp/konteno-approved-references/TAB_REFERENCE_MAP.md
```

Current non-negotiable currency example: `38 000 ⚡` — lightning always follows the number.
