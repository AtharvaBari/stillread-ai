---
name: Luminous Drift
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f4850'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#00668a'
  on-secondary: '#ffffff'
  secondary-container: '#40c2fd'
  on-secondary-container: '#004d6a'
  tertiary: '#366175'
  on-tertiary: '#ffffff'
  tertiary-container: '#4f7a8e'
  on-tertiary-container: '#fbfdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#bee9ff'
  tertiary-fixed-dim: '#a1cde3'
  on-tertiary-fixed: '#001f2a'
  on-tertiary-fixed-variant: '#1e4c5f'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 1.75rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies a serene, weightless reading environment designed to reduce cognitive strain and induce focus. Catering to modern readers, digital curators, and long-form content consumers, it turns reading on mobile screens into a tranquil, meditative retreat.

The design language balances **modern ethereal glassmorphism** with crisp, architectural typography. Interfaces feature translucent panes, fluid ambient blurs, and soft specular highlights reminiscent of diffused morning light through sea glass. Structural UI elements float seamlessly over liquid atmospheric gradients, anchored by a deep obsidian pill navigation bar that provides grounded contrast to airy cyan and sky-blue backdrops.

## Colors

The palette draws inspiration from boundless skies and frosted crystal, balancing low-saturation ethereal mist with crisp nautical contrasts.

- **Primary (`#0284c7`):** Directs the eye to focal interactions, active states, and emphasized metadata. Ensures WCAG AA compliance against frosted substrates.
- **Secondary (`#38bdf8`):** Glows, inner rim illumination, focus halos, and secondary interactive accents.
- **Tertiary (`#bae6fd`):** Translucent backdrop washes, pill highlights, and soft tag fills.
- **Neutral Deep (`#0f172a`):** Rich slate obsidian used for high-contrast typography, crisp icons, and the iconic floating bottom navigation bar.
- **Base Canvas (`#f0f9ff` to `#e0f2fe`):** Subtle ambient mesh gradients that shift imperceptibly under frosted glass containers.

### Layer & Transparency Tokens
- **Glass Panel Surface:** `rgba(255, 255, 255, 0.62)` with `backdrop-filter: blur(20px) saturate(180%)`.
- **Glass Border / Inner Rim:** `rgba(255, 255, 255, 0.75)` along top and left edges; `rgba(56, 189, 248, 0.20)` on bottom and right.
- **Dark Pill Navigation:** `rgba(15, 23, 42, 0.88)` with `backdrop-filter: blur(24px)` and a subtle `rgba(255, 255, 255, 0.12)` perimeter trace.

## Typography

Plus Jakarta Sans delivers structural geometry with humanized curves, aligning cleanly with ultra-rounded physical containers. 

- **Display & Headlines:** Set tight tracking (`-0.01em` to `-0.02em`) to maintain optical density over luminous glass backgrounds. Use bold and semi-bold weights to anchor visual hierarchy against translucent layers.
- **Body Text:** Engineered with a generous line-height multiplier (`1.6x` to `1.66x`) to maximize comfort during continuous, extended reading sessions.
- **Labels & Microcopy:** Crisp medium-to-semibold weights with slight positive tracking to ensure absolute clarity at diminutive scales across translucent pills and badges.

## Layout & Spacing

The layout is built around mobile-first ergonomics, utilizing an expansive single-column flow bounded by generous viewport margins. 

- **Vertical Rhythm:** Content breathes with airy spacing. Section separates favor larger vertical intervals (`space-lg` to `space-xl`) rather than harsh dividing rules.
- **Safe Clearance:** To accommodate the floating dark pill navigation bar, all scrollable root containers must maintain a dynamic bottom clearance padding of `calc(4.5rem + env(safe-area-inset-bottom, 24px))`.
- **Responsive Adaptations:**
  - **Mobile (<640px):** Single-column fluid stack, `1.25rem` screen margins, edge-padded glass cards.
  - **Tablet (640px–1024px):** 6-column grid, elevated maximum content container width (680px for reader mode, 840px for library views).
  - **Desktop (>1024px):** Centered reader shell with max-width `740px` for optimal typographic measure (60–75 characters per line), flanked by ethereal blurred ambient background panels.

## Elevation & Depth

Depth is articulated through refractive index and light attenuation rather than opaque drop shadows.

- **Level 0 (Atmospheric Bed):** Dynamic multi-point radial gradients featuring `#e0f2fe`, `#f0f9ff`, and faint `#bae6fd` orbs that drift gently beneath the content plane.
- **Level 1 (Frosted Cards & Sheets):** 
  - Fill: `rgba(255, 255, 255, 0.58)`
  - Filter: `backdrop-filter: blur(24px) saturate(160%)`
  - Border: `1px solid rgba(255, 255, 255, 0.65)`
  - Shadow: `0 12px 32px -4px rgba(2, 132, 199, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)`
- **Level 2 (Active Overlays, Modals & Floating Shelves):**
  - Fill: `rgba(255, 255, 255, 0.78)`
  - Filter: `backdrop-filter: blur(32px) saturate(190%)`
  - Border: `1px solid rgba(255, 255, 255, 0.9)`
  - Shadow: `0 20px 40px -8px rgba(2, 132, 199, 0.14), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)`
- **Level 3 (Anchored Dark Nav Pill):**
  - Fill: `rgba(15, 23, 42, 0.85)`
  - Filter: `backdrop-filter: blur(28px) saturate(200%)`
  - Border: `1px solid rgba(255, 255, 255, 0.14)`
  - Shadow: `0 16px 36px -6px rgba(15, 23, 42, 0.28), 0 0 20px 2px rgba(56, 189, 248, 0.15)`

## Shapes

The interface embraces organic curvature. Containers avoid rigid or sharp angles, relying instead on ultra-smooth pebble and pill profiles that evoke flowing water.

- **Primary Cards & Modals:** Radii are standardized between `28px` and `32px` (`rounded-3xl`), producing a soft, cushion-like presentation.
- **Floating Controls & Badges:** Full circular or pill curvature (`border-radius: 9999px`).
- **Inner Nested Elements:** Calculate nested radius via `R_inner = R_outer - padding` to guarantee perfect concentric curvature.

## Components

### Buttons
- **Primary Action:** Solid pill (`rounded-full`) in `#0284c7` with smooth gradient wash into `#0369a1`. High-contrast pure white text, inner specular top rim `inset 0 1px 0 rgba(255, 255, 255, 0.35)`, and a subtle ambient blue drop glow (`0 8px 20px -4px rgba(2, 132, 199, 0.35)`).
- **Secondary (Glass):** Frosted pill with `background: rgba(255, 255, 255, 0.5)`, text `#0f172a`, and subtle border `rgba(255, 255, 255, 0.7)`. Scales subtly (`transform: scale(0.97)`) on press.

### Floating Dark Pill Navigation Bar
- **Shell:** Centered bottom-docked pill (`height: 64px`, `min-width: 280px`, `max-width: 340px`), positioned `24px` above the bottom margin.
- **Micro-interactions:** Icons rendered in `#94a3b8`. When active, an icon shifts to `#38bdf8`, paired with an underlying ambient cyan micro-glow dot and a gentle vertical bounce transition.
- **Reading Progress Mode:** When deep in an article, the navigation bar morphs smoothly into a slim reading tracker pill showing scroll percentage and estimated time remaining.

### Cards
- **Article & Content Cards:** Clothed in `rounded-3xl` (28px) glass panels. Subtle hover or active touch lifts the card by `-2px` and intensifies the specular top border highlight from white to cyan-tinted glow (`#38bdf8`).

### Chips & Badges
- **Status & Reading Tags:** Pill geometry with soft fills (`rgba(186, 230, 253, 0.45)`), border `1px solid rgba(56, 189, 248, 0.3)`, text `#0369a1`, tracking `label-sm`.

### Input Fields
- **Search & Filter Bars:** `rounded-full` enclosures with `background: rgba(255, 255, 255, 0.45)`, inset border `1px solid rgba(255, 255, 255, 0.8)`. Focused state expands an ethereal cyan outer ring (`box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.35)`).

### Selection Controls
- **Checkboxes & Radios:** Fully rounded switch and circular toggles with translucent sky trackbeds. Activated toggles reveal an energetic cyan fill with an inset luminous white pearl knob.

### Reading Reader Controls (Specialized)
- **Floating Typography Hud:** A mini frosted glass pill appearing on secondary tap, featuring smooth haptic sliders for font sizing, theme temperature, and vertical tracking adjustments.