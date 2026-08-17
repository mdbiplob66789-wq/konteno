# KONTENO — HOME_FINAL

Status: USER APPROVED — DO NOT REDESIGN.

This file defines the approved HOME / landing screen that must be implemented before any other unapproved product screen.

## 1. Absolute scope
Implement ONLY HOME in the current task. Do not continue into standalone Dashboard, Tariffs, Energy, Idea, Image, Video, Editor, Projects, Profile, Auth or other pages yet.

The user has approved the composition and hierarchy. Preserve it.

## 2. Header
Desktop header is a single clean white bar.

Left:
- exact KONTENO logo and wordmark, visually level/aligned.

Center product navigation, evenly spaced across the center width:
- lightbulb icon + `Идея`
- video icon + `Видео`
- image icon + `Изображение`
- sliders/editor icon + `Редактор`

Right:
- notification bell with small unread indicator;
- unified balance `38 000 ⚡` (number first, lightning second; no lightning before the number);
- user avatar + compact dropdown chevron.

Never show `T`, token/tokens, токен/токены.

## 3. Hero
Large white/light-lavender premium hero.

Center headline:
`KONTENO —`
`твой личный`
`AI-помощник в создании`
`контента`

`KONTENO` is the purple visual accent. Rest is near-black.

Subtitle:
`От идеи до готового контента — в одном месте.`

Actions:
- primary purple `+ Создать проект`
- secondary white/lavender `Посмотреть возможности`

Floating social/creator UI around hero:
- Подписчики 12.4K +18%
- Лайки 8.7K (red accent metric)
- Репосты 2.3K +15%
- comments card around 1.6K
- bell / media / lightbulb / heart / send-style 3D lavender objects
- new follower notification card.

These are visual storytelling elements, not a literal analytics backend requirement.

## 4. Four product cards
Directly under hero, one row on desktop, identical geometry:
1. `Идея` — `Сценарии, тексты, структуры`
2. `Изображение` — `Картинки, арты, дизайны`
3. `Видео` — `Видеоролики, клипы, рилсы`
4. `Редактор` — `Улучшение и трансформация`

Use the same soft glass/3D icon language but clear, distinct icons.

## 5. Лучшие работы
Single large rounded white card.

Header:
- left: `Лучшие работы`
- right: `Все проекты →`

Three approved showcase tiles on desktop:
- neon sports-car video
- mountain lake image
- gym/fitness video

Cards use strong real-looking previews, rounded corners, subtle play icon where video, and a small type label.

Keep breathing room. Do not add the removed `Что можно сделать в KONTENO` block.

## 6. Tariff plans on HOME
Large rounded section titled `Тарифные планы`.
Subtitle: `Выберите подходящий план для ваших задач`.

Exactly four cards, aligned and equal-height on desktop:

### Start
- `990 ₽ / мес`
- `Для новичков`
- `8 000 ⚡ / мес`
- `Базовые AI-инструменты`
- `Ограниченный объём генераций`
- `Стандартная очередь`
- `Экспорт в популярных форматах`
- CTA `Выбрать`

### Creator — recommended
- `2 490 ₽ / мес`
- badge `Рекомендуем`
- `Для активных авторов`
- `25 000 ⚡ / мес`
- `Увеличенный объём генераций`
- `Все основные инструменты`
- `Более гибкие настройки`
- `Приоритетная очередь`
- filled purple CTA `Выбрать`

### Pro
- `4 990 ₽ / мес`
- `Для профессионалов`
- `60 000 ⚡ / мес`
- `Высокий объём генераций`
- `Премиум-режимы качества`
- `Расширенный экспорт`
- `Высокий приоритет`
- CTA `Выбрать`

### Studio
- `9 990 ₽ / мес`
- `Для команд`
- `150 000 ⚡ / мес`
- `Максимальный объём`
- `Совместная работа`
- `Все инструменты`
- `Приоритетная поддержка`
- CTA `Выбрать`

Tariff values must come from ONE central config object/helper. Never scatter pricing/allowance literals across components.

Below cards:
`При оплате тарифа энергия начисляется ежемесячно и расходуется во всех инструментах KONTENO.`

Important: subscription Energy and separate Energy top-up remain different purchase flows.

## 7. Compact Energy calculator preview
Left card below tariffs:
- title `Пополнение энергии`
- short helper about choosing amount and receiving bonus
- editable amount field
- continuous slider (NOT fixed package selection)
- compact live summary showing base Energy, bonus and total
- wide purple CTA `Пополнить баланс`

Calculation must use the central Energy config/helper from the current product rules. Do NOT hard-code an inconsistent screenshot example if it conflicts with authoritative Energy logic.

## 8. Unified balance card
Right card beside calculator.

Everything must be optically centered and symmetrical.

Content:
- small lavender balance icon
- heading `Единый баланс`
- large `38 000 ⚡`
- helper `Для всех инструментов`
- four tiny product shortcuts: Idea, Image, Video, Editor
- bottom action `История операций →`

No left/right drift, crooked heading, or mismatched centering.

## 9. Final CTA
Full-width rounded lavender panel.
- left: soft 3D rocket visual
- center: `Готов создать что-то своё?`
- supporting line: `Начни прямо сейчас — твои идеи станут реальностью с KONTENO.`
- purple CTA `+ Создать проект`
- right: floating lavender play/media tile and subtle stars.

## 10. Visual system
- white / #FCFBFF foundation
- lavender/purple accent
- dark typography
- thin low-contrast borders
- 20–32px rounded corners
- generous spacing
- soft shadows/glow, never heavy black shadow
- premium dimensional 3D iconography
- no emoji as primary icons
- no generic admin/dashboard aesthetic

## 11. Responsive
Desktop: preserve the approved hierarchy and visual density.
Tablet: 2-column where necessary, without shrinking text to tiny sizes.
Mobile: single-column; product navigation becomes approved mobile pattern; tariffs stack/snap accessibly; calculator above unified balance; touch targets >=44px.

## 12. Behavior
- Logo returns HOME.
- Product nav may route to existing working screens only if present; do not redesign those screens in this task.
- `Создать проект` opens existing project selector/creation entry if available.
- `Все проекты` routes to existing projects/history if available.
- balance opens Energy flow if existing.
- preserve user work/state where existing code already does so.

## 13. Payment safety
Do not fake successful real payments. If checkout backend is absent, keep an explicit safe demo/mock behavior and never silently credit real wallet state.

## 14. Definition of done
- HOME visually matches this approved composition.
- No removed `Что можно сделать в KONTENO` block.
- Header spacing/alignment correct.
- Energy always formatted with lightning AFTER amount.
- All four tariff cards equal/aligned and Creator clearly recommended.
- Unified balance content optically centered.
- Desktop/tablet/mobile checked.
- tests/lint/syntax checks available in repo pass.
- one visual refinement pass after initial implementation.
- ONE PR for HOME only.