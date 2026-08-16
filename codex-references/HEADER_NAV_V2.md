# KONTENO — HEADER / PRODUCT NAV V2

Status: CURRENT VISUAL OVERRIDE.

This file overrides older compact header spacing in screenshots/specs.

## Desktop header goal
The top product navigation must feel spacious, premium and balanced across the full width. The items must NOT look bunched together in the center.

Structure:
- left zone: exact KONTENO logo + wordmark;
- center product zone: `Идея`, `Видео`, `Изображение`, `Редактор`;
- right zone: notifications, Energy balance, profile/avatar (plus theme control only where appropriate).

## Spacing
On wide desktop (>=1280px):
- header horizontal padding: approximately 36–52px;
- logo zone: fixed/min width around 220–260px;
- right utility zone: fixed/min width around 220–280px;
- center navigation should consume the available middle width, approximately 560–720px where viewport allows;
- distribute product items with `display:grid; grid-template-columns:repeat(4,1fr)` OR `display:flex; justify-content:space-between`; do NOT use a small `gap:24px` cluster;
- each nav item gets a comfortable click area, minimum ~100–130px wide and 44px high;
- visual distance between labels should read as roughly 70–120px depending on viewport;
- keep all four labels on one line.

The visual result should resemble a deliberately distributed product bar: logo anchored left, four product areas evenly stretched through the middle, wallet/profile anchored right.

## Active state
Active product:
- dark/purple text;
- subtle lavender underline or soft pill/background;
- never a loud block that changes layout width.

Inactive:
- calm dark-grey text with strong enough contrast.

## Responsive
- 1024–1279px: reduce horizontal padding and item min-width, but keep all four items evenly distributed; never collapse them into a tight cluster.
- <900px: switch to the approved mobile pattern: compact top bar + bottom product navigation.

## Landing + app consistency
Use the same four-item spacing logic on the public landing header and authenticated app header so the brand feels consistent.

## Absolute rule
Do not position the four product items using a single small fixed `gap` in a narrow center container. Use the available central width and distribute them evenly.