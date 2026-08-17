# HOME_FINAL checkout guard

This task must start from the current `origin/main` that contains the approved HOME visual.

Required reference path:

`codex-references/approved-visuals/HOME_FINAL.webp`

Before doing any implementation work, run:

```bash
git fetch origin main
git status --short
git rev-parse origin/main
git ls-tree -r --name-only origin/main | grep '^codex-references/approved-visuals/HOME_FINAL.webp$'
```

If the working tree is clean and the checkout is older than `origin/main`, synchronize the task branch with the latest `origin/main` before coding. Do not continue from a stale checkout.

After synchronization, verify:

```bash
test -f codex-references/approved-visuals/HOME_FINAL.webp
```

Then visually inspect `HOME_FINAL.webp` and implement ONLY that approved HOME screen according to Issue #6.

Do not infer the visual from old README content. The actual file on current `origin/main` is authoritative.