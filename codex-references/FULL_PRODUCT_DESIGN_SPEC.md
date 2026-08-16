# KONTENO — FULL PRODUCT DESIGN SPEC

Status: APPROVED PRODUCT BLUEPRINT FOR IMPLEMENTATION

This document defines the complete visual/product design of KONTENO. It extends the approved visual baseline in `approved-visuals/` to every important screen so Codex does not invent missing pages.

## 0. Source-of-truth order

1. `/AGENTS.md` — absolute product rules.
2. `approved-visuals/*` — approved brand/visual language.
3. `FULL_SITE_BLUEPRINT.html` — full-screen composition reference for pages not fully shown in the image references.
4. This file — page structure, responsive behavior, states and interaction details.
5. Existing working behavior that is not replaced by the approved UX.

If old implementation conflicts with these references, rebuild the UI while preserving useful behavior.

---

# 1. Brand and visual system

## Brand character
KONTENO is a premium, approachable AI content workspace. It should feel calm, polished, light, understandable and modern — not technical, dark, crypto-like, admin-like or overloaded.

## Core palette
- Background: `#FCFBFF` / `#FFFFFF`.
- Primary purple: `#7C3AED`.
- Deep purple: `#6D28D9`.
- Lavender: `#A78BFA`.
- Soft lavender surface: `#F7F3FF`.
- Secondary surface: `#F3EEFF`.
- Border: `rgba(124,58,237,.12)` or neutral `#E9E5F2`.
- Primary text: `#14111D`.
- Secondary text: `#716B7E`.
- Success: `#16A34A`.
- Warning: `#D97706`.
- Error: `#DC2626`.

## Gradients
Primary CTA: `linear-gradient(135deg,#8B5CF6 0%,#6D28D9 100%)`.
Soft hero glow: radial/linear lavender with white falloff, never saturated neon.
3D illustrations: translucent lilac, soft violet highlights, white glass.

## Typography
Use a high-quality system/Inter-like sans family.
- Display H1 desktop: 64–80px, 0.92–1.0 line-height, weight 760–850, tight tracking.
- Section H2: 46–60px.
- Page title in app: 32–42px.
- Body large: 18–20px.
- Body: 14–16px.
- Labels: 12–14px, medium/semibold.
No thin grey text that becomes unreadable.

## Radius
- Large showcase/card: 28–36px.
- Standard card: 20–28px.
- Controls: 14–18px.
- Pills: 999px.

## Depth
Use thin borders + subtle layered shadows + lavender ambient glow. Avoid heavy black shadows.

## Icons
Use consistent SVG/vector icons. Emoji must never be primary product iconography.

## Exact brand mark
Use `approved-visuals/07_exact_logo.webp` as the logo source of truth. Never replace with a generic square containing `K`.

---

# 2. Global product shell

## Desktop header
Height about 72px, sticky, white translucent surface with blur and 1px bottom border.

Left:
- exact KONTENO logo + wordmark.

Center:
- `Идея`
- `Видео`
- `Изображение`
- `Редактор`

Active item: purple text + subtle lavender pill/underline, not a loud filled tab.

Right:
- theme control (Light active; architecture ready for future Dark),
- notification bell,
- unified Energy balance, e.g. `38 000 ⚡`,
- avatar/profile.

Energy balance is clickable and opens `Пополнить энергию`.

## App content width
Desktop max content 1280–1440px with generous horizontal padding 32–48px.

## Mobile shell
Top bar: logo, Energy, avatar/menu.
Bottom product nav: Idea / Video / Image / Editor using SVG icons and labels.
No horizontal overflow.

---

# 3. Public landing page

Landing order is fixed:

1. Header
2. Hero
3. `Что можно сделать в KONTENO`
4. `Не нужно выбирать нейросеть`
5. `Всё в одном месте`
6. `Под любой формат`
7. Showcase/gallery
8. `Один баланс для всего`
9. Short trust/FAQ area
10. Final CTA `Готов создать что-то своё?`
11. Footer

## 3.1 Hero
Use `01_brand_hero.webp` closely.

Desired feeling: the strongest visual section on the site.

Content:
- small purple badge,
- dominant H1 explaining that content creation is simple in one place,
- short supporting copy,
- primary CTA `Создать проект`,
- optional secondary link `Посмотреть возможности`,
- large KONTENO-specific lavender 3D composition / creator workspace visual,
- floating media/editor symbols.

Do not use generic “text left + ordinary dashboard card right” SaaS composition if it conflicts with reference.

## 3.2 What you can do
Four rich capability cards:
- Идея
- Изображение
- Видео
- Редактор

Each card needs a dimensional visual/mini-scene, title, one-line value, and a subtle action. Card art should resemble the approved soft-glass/3D lavender language.

## 3.3 No need to choose AI
Exact semantic structure:
- Выгодно — cheaper
- Оптимально — recommended, best price/quality
- Максимум — highest quality

Use the approved hierarchy from the visual reference. `Оптимально` is visually selected/recommended.

Important product rule: these are user-facing quality/value choices. KONTENO chooses the underlying AI/model; do not make model names the main UX.

## 3.4 All in one place
Four connected premium cards:
1. Идея — Придумай
2. Создание — Создай
3. Редактор — Доработай
4. Готово — Скачай

Show directional flow and a small benefits bar below: Быстро / Понятно / Надёжно.

## 3.5 Formats
Three large format cards:
- 9:16 — TikTok · Reels · Shorts
- 1:1 — Публикации
- 16:9 — YouTube

Follow the approved device/media compositions. Strong dimensional visual area on top, clean metadata strip below.

## 3.6 Showcase
Editorial gallery of believable output cards rather than stock placeholders:
- vertical social video,
- product image,
- creator portrait,
- ad creative,
- landscape YouTube visual,
- before/after editor example.

Use 2–3 card sizes with controlled masonry/editorial rhythm. Every piece should look like output from the same premium ecosystem.

## 3.7 One balance for everything
Explain Energy with a clean wallet panel and four product chips: Idea, Video, Image, Editor all draw from one balance.

Use current Energy rules only. User-facing wording: `Энергия`, not token terminology.

## 3.8 FAQ / trust
Keep compact. Suggested questions:
- Как KONTENO выбирает нейросеть?
- На что расходуется Энергия?
- Можно ли использовать один баланс во всех инструментах?
- Что произойдёт, если Энергии не хватит?

Do not make unsupported payment/provider claims.

## 3.9 Final CTA
Use the newly approved visual composition:
- badge: `Начни за пару кликов`
- H2: `Готов создать что-то своё?`
- copy: `Начни с идеи или сразу создай изображение или видео.`
- CTA: `Создать проект`
- floating lavender 3D objects: lightbulb, play, image, magic wand, sliders, stars.

Large rounded lavender-white container with soft ambient glow.

---

# 4. Authentication

## 4.1 Sign in
Two-column desktop layout.
Left: brand/soft visual composition and one short product promise.
Right: compact white glass card.

Fields:
- email
- password
- `Войти`
- password recovery
- registration link

If OAuth is not actually configured, do not show fake working social login buttons.

## 4.2 Registration
Same shell. Fields only for data actually needed. Avoid long onboarding forms.

## 4.3 First-run onboarding
Maximum 2–3 lightweight steps:
1. What do you want to create? Video / Image / Ideas / Editing.
2. Preferred format (optional).
3. Open workspace.

Skip is always available.

---

# 5. Dashboard / home after login

Purpose: fastest way to continue or start work.

Top hero panel:
- `Что создаём сегодня?`
- universal prompt input
- quick actions: Идея / Изображение / Видео / Редактор
- current Energy at the edge, not dominating.

Below:
- `Продолжить работу` — recent projects carousel/grid.
- `Быстрый старт` — 4 premium action cards.
- `Для тебя` — 3–4 starter templates/examples.

Empty state: beautiful lavender illustration + single CTA, not a dead blank page.

---

# 6. Idea workspace

Goal: help user go from vague thought to usable concept/script.

Desktop composition:
- page intro left/top: `Идея` + short copy,
- large prompt composer,
- optional objective chips: Reels / TikTok / Shorts / Реклама / Пост,
- optional tone/style chips,
- CTA `Придумать идеи`.

Results appear as polished stacked cards:
- hook/title,
- short concept,
- suggested structure,
- action buttons: `Развить`, `Сделать видео`, `Сделать изображение`, `Скопировать`.

Generation should never be a plain chat transcript only. It is a structured creative workspace.

---

# 7. Image workspace

Desktop: two-column creation workspace.

Left control panel (about 380–430px):
- prompt textarea,
- reference upload,
- format/aspect ratio,
- style presets,
- quality choice: Выгодно / Оптимально / Максимум,
- visible Energy cost,
- CTA `Создать изображение`.

Right canvas:
- before generation: large elegant empty state with examples,
- during generation: skeleton/progress treatment,
- after generation: image result with toolbar.

Result toolbar:
- Скачать
- В редактор
- Создать вариацию
- Улучшить
- Удалить / more menu

Do not expose underlying model selection as primary UX.

---

# 8. Video workspace

Primary modes:
- Текст → видео
- Фото → видео

Tabs are premium segmented controls, not browser-like tabs.

Controls:
- prompt,
- image/video reference upload where applicable,
- format 9:16 / 1:1 / 16:9,
- duration only if supported by current mock/backend,
- motion/style suggestions,
- quality value choice,
- Energy cost,
- CTA.

Right preview/canvas with a player-like result card.

For `Фото → видео`, use the interaction direction from `04_product_tabs.webp`: the uploaded image remains visually central and animation intent is clear.

---

# 9. Editor workspace

Purpose: improve an existing image/video without feeling like a pro editing suite.

Desktop composition:
- large central canvas/preview,
- compact left or right instruction panel,
- bottom contextual toolbar.

Main actions:
- `Изменить словами`
- Crop / aspect ratio
- Light/color where supported
- Remove / replace background where supported
- Enhance / upscale where supported
- Export

Before/after mode should use a clear split handle similar to the approved workflow card visual.

Do not show controls that cannot do anything. Disabled/future features must be explicitly marked.

---

# 10. Projects / History

Page title `Мои проекты`.

Controls:
- search,
- filters: Все / Видео / Изображения / Идеи / Редактор,
- sort recent.

Project cards:
- real preview area,
- project name,
- type,
- date,
- status if relevant,
- overflow menu.

Hover reveals `Открыть`. On mobile use explicit card action.

Empty state: premium illustration + `Создать первый проект`.

---

# 11. Energy purchase page

Dedicated page title: `Пополнить энергию`.

Use `ENERGY_PURCHASE_PAGE_SPEC.md` as behavior source of truth.

Top summary:
- current balance: e.g. `38 000 ⚡`,
- short note: one balance across all tools.

Package choices exactly:
- 500 ₽ → 5 250 ⚡ (+5%)
- 1 000 ₽ → 11 000 ⚡ (+10%)
- 2 500 ₽ → 28 750 ⚡ (+15%)
- 5 000 ₽ → 60 000 ⚡ (+20%)

Default: 1 000 ₽.
2 500 ₽ may carry `Популярно`.
5 000 ₽ = maximum value.

Desktop: four elegant cards plus sticky/adjacent order summary.
Mobile: horizontal snap package slider + order summary below.

Order summary:
- Базовая энергия
- Бонус
- На баланс поступит
- К оплате

CTA: `Перейти к оплате — 1 000 ₽`.
Support text: `На баланс поступит 11 000 ⚡`.

If no real provider/backend exists: clearly show DEMO/MOCK state and do not pretend a real payment or credit happened.

---

# 12. Profile and settings

Profile page sections:
- avatar/name/email,
- account,
- interface,
- notifications,
- billing/history,
- sign out.

Theme setting:
- Light active.
- Dark may be shown as `Скоро` unless actually implemented completely.

Billing history rows:
- date,
- package,
- amount,
- status.
No invented provider details.

---

# 13. Notifications

Bell opens a compact panel.
Notification types:
- generation complete,
- generation failed,
- Energy low,
- payment result if real.

Unread dot is subtle purple. Empty state is friendly and concise.

---

# 14. Critical system states

## Loading / generation
Use a premium progress state with real stage labels where meaningful. Do not fake exact percentages if the system cannot know them.

## Insufficient Energy modal
Must preserve all creation settings.
Content:
- clear amount required,
- current balance,
- recommended minimum package,
- CTA to top up,
- secondary cancel.

After returning from top-up, never auto-trigger expensive generation without explicit user action.

## Failure state
Inline explanation + retry. Never silently consume Energy in a failed/cancelled mock flow.

## Empty states
Each major product page gets a designed empty state with useful next action.

---

# 15. Responsive rules

## Desktop >= 1200
Full header navigation, generous spacing, 2-column workspaces.

## Tablet 768–1199
Reduce art density, keep main controls visible, use 2-column cards where appropriate.

## Mobile <= 767
- bottom product navigation,
- single-column workspaces,
- sticky creation CTA only when it improves usability,
- package cards use horizontal snap,
- modals become bottom sheets when appropriate,
- large 44px+ touch targets,
- no tiny desktop-only labels.

Never simply shrink desktop into an unreadable mobile screen.

---

# 16. Accessibility and polish

- Semantic buttons/links/labels.
- Visible focus states.
- Keyboard usable controls.
- Sufficient text contrast.
- `prefers-reduced-motion` respected.
- Images have useful alt text when semantic.
- Motion: subtle 180–320ms, no excessive parallax.

---

# 17. Definition of visual completion

The implementation is not visually complete until:
- logo matches the approved KONTENO mark;
- landing sections visually resemble the approved references in hierarchy, dimensionality and spacing;
- every product nav item opens a real dedicated workspace;
- app shell feels like the same brand as the landing;
- Energy terminology and formatting are correct everywhere;
- purchase flow follows the current package rules;
- desktop/tablet/mobile have been visually checked;
- no generic emoji/admin/bootstrap fallback remains in primary UI.
