---
name: Vikas Examination Portal
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00174b'
  on-tertiary-container: '#497cff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  status-answered: '#0d9488'
  status-answered-bg: '#f0fdfa'
  status-unanswered-border: '#94a3b8'
  status-review: '#d97706'
  status-review-bg: '#fffbeb'
  status-review-border: '#fcd34d'
  status-review-answered: '#7c3aed'
  status-review-answered-bg: '#faf5ff'
  status-urgent: '#dc2626'
  status-urgent-bg: '#fef2f2'
  status-urgent-border: '#fca5a5'
  border-subtle: '#e2e8f0'
  border-strong: '#cbd5e1'
  surface-muted: '#f1f5f9'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  timer-display:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

The design system establishes a high-trust, calm, and rigorous academic environment tailored for junior college students, invigilators, and evaluators. The interface minimizes cognitive friction and test-induced anxiety while projecting institution-level dependability. 

The aesthetic blends **Modern Corporate** structure with **Academic Minimalism**:
- **Clarity over novelty:** Clear structural lines, strict content hierarchy, and deliberate use of whitespace prioritize reading comprehension under time pressure.
- **Focus & Serenity:** The visual tone uses deep navy anchors balanced by calming teal accents, eliminating sensory overload.
- **Accessibility as a mandate:** Every state, badge, and navigation item exceeds WCAG AA contrast standards, ensuring clarity across low-spec classroom monitors, tablets, and varied lighting conditions.
- **Purposeful Affordances:** Interactive elements are distinct, feedback is immediate, and critical exam actions (such as submission or section switching) require unambiguous confirmations.

## Colors

The palette is engineered around high legibility, low anxiety, and unambiguous state feedback.

- **Primary (`#0F172A` - Slate 900):** Used for foundational framing, high-emphasis text, primary action buttons, and dominant header panels. Provides grounded academic authority.
- **Secondary (`#0D9488` - Teal 600):** Used for progress indication, active steps, positive focus states, and the "Answered" question status. Teal provides a calm, reassuring signal distinct from aggressive greens.
- **Tertiary (`#2563EB` - Royal/Sapphire Blue):** Used for focused navigation tabs, informative badges, and secondary contextual utilities like formula sheets or guidelines.
- **Neutral (`#64748B` - Slate 500):** Supplies structural borders (`#E2E8F0`), secondary metadata, deactivated states, and muted question numbers.
- **Canvas & Surface Tier:**
  - Base Background: `#F8FAFC` (Slate 50)
  - Surface Card: `#FFFFFF` (Pure White)
  - Muted Surface / Field Fill: `#F1F5F9` (Slate 100)
- **Status & Exam Palette:**
  - *Answered:* `#0D9488` (Teal 600) with `#F0FDFA` (Teal 50) background.
  - *Unanswered / Skipped:* `#94A3B8` (Slate 400) border with white background.
  - *Marked for Review:* `#D97706` (Amber 600) with `#FFFBEB` (Amber 50) background.
  - *Answered & Marked for Review:* `#7C3AED` (Purple 600) with `#FAF5FF` (Purple 50) background.
  - *Critical / Expiring Countdown:* `#DC2626` (Red 600) with `#FEF2F2` (Red 50) background.

## Typography

Typography balances clean structural headers, effortless reading flow for long exam questions, and zero-jitter tabular metrics.

- **Headlines (Plus Jakarta Sans):** Selected for its modern geometric humanist profile. Generous counter-spaces keep titles friendly yet formal.
- **Body & Controls (Inter):** Highly legible, tall x-height, and neutral structure ensure high retention and reduced eye fatigue when reading dense questions, passages, and options.
- **Metrics, Timer & Badges (JetBrains Mono):** Monospaced numbers ensure countdown timers, marks values, question indexes, and candidate roll numbers remain strictly aligned without horizontal shifting during live assessments.

## Layout & Spacing

The portal implements a fluid 12-column layout structured strictly around focused testing ergonomics:

- **Desktop Testing Canvas (≥1024px):** Fixed top test bar (timer, subject switcher, candidate details), a 9-column main pane (question presentation, options, action buttons), and a 3-column persistent sidebar (question palette grid, status summary, calculator trigger).
- **Tablet (768px – 1023px):** Collapsible right drawer for the question palette, reserving full width for question rendering.
- **Mobile Viewports (<768px):** Single-column layout. The question palette is accessible via a bottom sheet drawer. Primary actions ("Clear Response", "Mark for Review", "Save & Next") stick to the bottom viewport with a persistent safe-area pad.
- **Rhythm Rules:** Spacing inside question stems defaults to `space-lg` (1.5rem). Space between question options is fixed to `space-md` (1rem). Dense data tables use `space-sm` vertical padding to maximize visible records per screen.

## Elevation & Depth

Visual hierarchy uses **tonal surfaces and soft ambient shadows** paired with distinct low-contrast borders (`#E2E8F0`). This avoids heavy drop shadows that cause distraction or blur rendering on modest school hardware.

- **Level 0 (Flat Base):** Canvas background `#F8FAFC`.
- **Level 1 (Exam Cards & Panels):** Pure white `#FFFFFF` surface, 1px border `#E2E8F0`, ambient shadow `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`.
- **Level 2 (Dropdowns, Floating Timers, Palette Drawer):** Pure white `#FFFFFF`, 1px border `#CBD5E1`, shadow `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Modal Confirmation & Submission Alerts):** Shadow `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)` with a 40% opacity Slate 900 backdrop scrim.

## Shapes

The design system applies a disciplined **Rounded (Level 2)** geometry:
- Default radius: `0.5rem` (8px) for buttons, text input fields, and individual option containers.
- Medium elements: `0.75rem` (12px) for table headers, segmented tabs, and dialog boxes.
- Large cards (`rounded-xl`): `1.5rem` (24px) for master question cards, result analytics containers, and modal frames.
- Specialized Shapes:
  - Question Palette Nodes: Squircle/rounded-md (`6px`) for question numbers (Answered/Unanswered grid).
  - Status Badges and Timer Pills: Full pill shape (`9999px`) to immediately distinguish analytical chips from actionable card containers.

## Components

### Buttons
- **Primary Action (Save & Next):** Deep Slate 900 background, white text, 8px radius, height 44px, padding 0 20px. Hover: Slate 800.
- **Secondary Action (Mark for Review):** Amber 50 background, Amber 700 text, 1px solid Amber 300 border.
- **Tertiary / Neutral Action (Clear Response):** White background, Slate 600 text, 1px solid Slate 300 border.
- **Critical (Submit Examination):** Teal 600 background, white text. Hover: Teal 700. Active click produces subtle inset depth.

### Option Selectors (Radio & Checkbox)
- Presented as full-width interactive cards rather than plain floating inputs.
- Resting state: White background, 1px solid `#E2E8F0`, padding 16px, 8px radius.
- Selected state: Light teal tint `#F0FDFA`, 2px solid `#0D9488`, bold text weight.
- Index keys (A, B, C, D) are enclosed in an inner circular pill that fills with Teal 600 when selected.

### Question Palette Grid
- Matrix of numbered blocks representing every question.
- Dimensions: 36px x 36px square with 6px border-radius. Font: JetBrains Mono 13px bold.
- States:
  - *Answered:* `#0D9488` background, white text.
  - *Marked for Review:* `#D97706` background, white text.
  - *Answered + Marked:* `#7C3AED` background with a small star badge indicator.
  - *Not Visited:* `#F1F5F9` background, Slate 500 text, 1px solid Slate 200.

### Countdown Timer
- Fixed in top navigation. Container styled as a pill (`rounded-full`), `#F8FAFC` background with a subtle `#E2E8F0` border.
- Numbers rendered in `JetBrains Mono` font.
- Warning State (< 10 minutes remaining): Background transitions to `#FEF2F2`, border to `#FCA5A5`, text to `#DC2626` with an urgent pulse animation.

### Data Tables (Reports & Scorecards)
- Minimalist, bordered rows with no vertical gridlines. Header: Slate 100 with uppercase Slate 600 label text.
- Alternate rows remain pure white with a 1px bottom border `#F1F5F9`.
- Row height: 48px standard, 36px compact. Numeric columns align right in monospaced format.

### Status Indicators & Badges
- 24px height, padding 2px 10px, rounded-full. Contains a 6px status dot followed by uppercase label.
- High color contrast ratio (minimum 4.5:1) strictly enforced for all text-to-badge background pairings.