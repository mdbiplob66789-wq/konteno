# CODEX — IMPLEMENT HOME_FINAL ONLY

Work in repository `mdbiplob66789-wq/konteno`.

Execute GitHub Issue #6 completely.

This task implements ONLY the user-approved KONTENO HOME screen. Do not continue into any other unapproved screen.

Read first:
1. `codex-references/HOME_FINAL_IMPLEMENTATION.md`
2. `/AGENTS.md`
3. `codex-references/TARIFFS_AND_ENERGY_V2.md`
4. `codex-references/HEADER_NAV_V2.md`
5. current implementation.

The approved HOME structure is frozen. Do not redesign it, remove approved sections, add new marketing sections, or change the product hierarchy.

Implement the HOME exactly according to `HOME_FINAL_IMPLEMENTATION.md`: aligned header/logo, icon+label product navigation, approved hero, four product cards, `Лучшие работы`, four tariff cards Start/Creator/Pro/Studio, compact continuous Energy calculator preview, optically centered unified balance block, and final lavender CTA.

Keep all tariff prices and monthly Energy allowances in one central config. Currency must be displayed as `38 000 ⚡`, with the lightning AFTER the number. Never expose `T`, token/tokens or токен/токены.

Energy top-up is a continuous calculator, never four fixed packages. Use the authoritative central Energy calculation helper/config rather than hard-coding any inconsistent visual example.

Preserve useful existing working navigation/state behavior, but replace old HOME visual structure where it conflicts with the approved spec. Do not fake payment success or unsupported provider behavior.

Responsive adaptation is required for desktop/tablet/mobile, but preserve the approved desktop hierarchy.

Do not touch unrelated screens except for minimal shared-component changes required for HOME. Do not proactively redesign Idea, Image, Video, Editor, Projects, Dashboard, Profile, Auth, standalone Tariffs or standalone Energy pages.

After implementation:
- run available lint/tests/syntax checks;
- run `git diff --check`;
- verify only intentional files changed;
- do one visual refinement pass against HOME_FINAL requirements;
- open ONE clean PR to `main` for HOME_FINAL only.

Return a concise report with: HOME MATCH / RESPONSIVE / FUNCTIONAL / TESTS / GIT / BLOCKERS.

Start implementation now.