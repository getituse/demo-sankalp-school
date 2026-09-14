# DESIGN_REFERENCE.md — Sankalp Public School Frontend

This document establishes the reference specifications and constraints derived from `Sankalp-Website-Build-Prompts.md` for the desktop homepage and responsive adaptations.

---

## 1. Desktop Reference Geometry
- **Viewport Dimensions**: Exactly `1586 × 992` CSS pixels (ratio ~8:5).
- **Device Scale Factor**: 1.0 (100% zoom).
- **Composition Style**: Compact, unified, zero excess section gaps; settled at rest without perpetual motion.

### Section Vertical Coordinates (y-axis)
| Region | y-position | Approximate Height | Composition & Roles |
|---|---|---|---|
| Announcement Strip | y = 0 – 30 | 30 px | Navy background (`#143C65`), megaphone icon, announcement copy, utility links, social symbols. |
| Main Header | y = 30 – 98 | 68 px | White background, school crest (`56–60px`), uppercase serif wordmark, tagline, navigation with Home underline, search icon, teal Parent Login button. |
| Hero Section | y = 98 – 446 | 348 px | Cream copy background (`#FEF9F1`), curved left boundary on photo (`#008697` accent edge), 4-student photo, 4 stat counters, admission badge, orange/teal corner bands. |
| Shortcut Cards | y = 462 – 546 | 84 px | 4 pastel tinted cards (Mint, Light Blue, Pale Coral, Light Green), 16px gap. |
| Feature Cards | y = 562 – 730 | 168 px | 3 columns (Academic Excellence, Beyond the Classroom, A Nurturing Campus), ~20px gap, outer columns slightly wider (~1.06 : 1 : 1.06). |
| Community Panels | y = 744 – 899 | 155 px | 3 columns (Upcoming Events, What Parents Say testimonial, Latest News). |
| Footer | y = 912 – 992 | 80 px | Navy background (`#0C3055`), horizontal layout with crest/identity, contact, nav/copyright, leaf slogan. |

### Horizontal Coordinates & Insets (x-axis)
- **Header & Top Strip content**: Inset `x ≈ 96` to `x ≈ 1490` (max-width ~1394px centered).
- **Hero copy area**: Starts near `x ≈ 67`, width ~550–590px for 2-line headline and body copy.
- **Hero photo boundary**: Curved line starting at `x ≈ 675` at the top and `x ≈ 807` at the bottom.
- **Admission badge**: Approx `264 × 100` px, placed `42px` from right and `24px` from bottom of hero.
- **Card rows (Shortcuts, Features, Community)**: Start near `x ≈ 21` and end near `x ≈ 1565` (~1544px total width).
- **Footer content**: Starts near `x ≈ 49`, full-width background.

---

## 2. Color Palette & Tokens

| Token Name | Hex Value | Application |
|---|---|---|
| `--color-navy-announcement` | `#143C65` | Top announcement strip background |
| `--color-navy-footer` | `#0C3055` | Footer background |
| `--color-navy-heading` | `#082959` | Primary headings, brand text, nav links, stat numbers |
| `--color-teal` | `#008697` | Second hero headline line, Parent Login button, active accents |
| `--color-orange-gold` | `#FFAF24` | Primary admission button, star ratings, category accents |
| `--color-cream` | `#FEF9F1` | Hero left copy background |
| `--color-text-body` | `#485469` | Descriptions, supporting text, subtitles |
| `--color-border-light` | `#E5EBF0` | Feature & community card borders |
| `--color-tint-admission` | `#EDF9F7` | Shortcut 1: Online Admission pastel background |
| `--color-tint-portal` | `#EDF7FE` | Shortcut 2: Parent Portal pastel background |
| `--color-tint-payment` | `#FEF5F0` | Shortcut 3: Fee Payment pastel background |
| `--color-tint-bus` | `#EAF9F0` | Shortcut 4: Bus Tracking pastel background |

---

## 3. Typography Hierarchy
- **Brand Wordmark**: Bold uppercase serif (`Georgia`, `Merriweather`, serif), ~21–22px.
- **Hero Title**: Bold serif (`Georgia`, serif), ~48px, line-height ~1.06, two distinct lines ("Learn with Purpose." in navy, "Lead with Confidence." in teal).
- **Section Headings**: Bold serif or clean sans, 16–18px.
- **UI / Body Text**: Clean modern sans-serif (`system-ui`, `-apple-system`, `Inter`, `Arial`), 14–16px.
- **Metadata & Subtitles**: Sans-serif, 11–13px.

---

## 4. Radii & Surface Styling
- **Main Cards (Features, Community)**: `6–8px` border radius, subtle border (`1px solid #E5EBF0`), white surfaces.
- **Shortcut Cards**: `10–12px` border radius, pastel backgrounds, borderless or ultra-subtle tint.
- **CTA Buttons**: `10–12px` border radius.
- **Admission Badge**: Pill-shaped (`9999px` border radius), soft drop shadow, white surface.
- **Icons**: Tinted circular containers (`36–48px`).

---

## 5. Responsive Behavior Rules
- Desktop (≥1280px): Faithful to the 1586×992 compact layout.
- Tablet (768px – 1279px): 2-column shortcuts, 2-column or stacked feature/community cards.
- Mobile (<768px): Vertical reflow, mobile navigation sheet, stacked hero, 2×2 stat counter grid, single column cards.
- No `overflow-x: hidden` hacks on `body`.
