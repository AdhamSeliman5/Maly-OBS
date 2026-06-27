# Maly-OBS Landing — Comprehensive UI/UX Audit Report

**Date:** June 27, 2026  
**Auditor role:** Expert UI/UX Designer + Senior Frontend Engineer  
**Stack:** React 18 · Vite · Tailwind CSS v3 · Framer Motion · RTL Arabic  
**Scope:** All 7 home components (`Navbar`, `Hero`, `SystemPreview`, `PlatformPower`, `Features`, `Pricing`, `Footer`) + all 13 module marketing pages (canonical: `POSPage.tsx`)

---

## Executive Summary

The landing page has a strong visual foundation — the ocean dark theme, teal/green accent palette, Framer Motion animations, and the bento-grid layout are all high quality. However, the audit uncovered **4 critical bugs** (broken navigation, undefined Tailwind color classes, perpetually dimmed mobile decorators, missing assets), **5 high-priority UX gaps** (small touch targets, hidden hero images on mobile, CTA friction, inconsistent button shapes, pricing anomaly), and **8 medium-priority consistency issues**. The issues are concentrated in the module pages and in cross-route navigation.

---

## Section 1 — Mobile Responsiveness

### 1.1 Hero Floating Badges Overflow Risk
**File:** `src/components/Hero.tsx` · Lines 375–422

The two floating status badges use `absolute -bottom-5 -right-5` and `absolute -top-5 -left-5` relative to the dashboard mockup card. On screens narrower than ~375px, these badges can bleed outside the viewport because the mockup wrapper has no `overflow-clip-margin` or safe padding override. The outer column `flex justify-center lg:justify-end lg:py-32` does not guarantee inset safety.

**Fix:**
```tsx
// Wrap the relative "relative" div in a padded container
<div className="relative px-6 py-6">   {/* absorbs the -5 overhang */}
  <div className="relative">           {/* original wrapper */}
    ...badges...
  </div>
</div>
```

### 1.2 Hero Visual Column Visible on Mobile (Not Hidden)
**File:** `src/components/Hero.tsx` · Line 258

The dashboard mockup column is not hidden on mobile — it uses `flex justify-center` and renders full-size below the text. On screens under 480px, the `w-[320px]` mockup forces horizontal overflow or pushes content below the fold. Since the grid is `grid-cols-1 lg:grid-cols-2`, both columns stack on mobile, making the page extremely tall.

**Recommendation:** Either hide the mockup on mobile (`hidden sm:flex` on the visual column) or reduce mockup width to 100% with `max-w-[90vw]` on mobile:

```tsx
// In Hero.tsx, visual column wrapper:
className="hidden sm:flex justify-center lg:justify-end lg:py-32"
// OR
className="flex justify-center lg:justify-end lg:py-32 w-full"
// and on the inner mockup div:
className="relative w-full sm:w-[400px] lg:w-[460px] ..."
```

### 1.3 Hero Module Pages: Hero Image Completely Hidden on Mobile ⚠️ HIGH PRIORITY
**File:** `src/pages/POSPage.tsx` (and all 12 other module pages) · Line 182

```tsx
className="relative hidden lg:block"  // hero image column
```

The product screenshot that anchors each module's hero section is **completely hidden on all mobile and tablet viewports** (below `lg` = 1024px). This is the primary visual proof-point for each module — showing nothing to the majority of mobile users is a critical UX miss. The hero reads as text-only on mobile, which reduces trust and engagement.

**Fix:** Show a reduced-size, full-width image below the text on mobile:
```tsx
// Remove "hidden lg:block" and replace with:
<motion.div className="w-full lg:w-1/2 mt-8 lg:mt-0">
  <img
    src="/assets/images/pos-hero.png"
    alt="واجهة نقطة البيع"
    className="w-full rounded-2xl border border-ocean-700/60"
    loading="eager"
  />
</motion.div>
```

### 1.4 Touch Target Sizes — Dot Indicators are 6×6px ⚠️ CRITICAL
**File:** `src/components/SystemPreview.tsx` · Lines 310–322

```tsx
className={[
  i === index
    ? 'w-6 h-[6px] bg-brand-teal'        // active: 24×6px
    : 'w-[6px] h-[6px] bg-slate-600 ...',  // inactive: 6×6px — WAY too small
]}
```

The inactive slide indicator dots are **6×6px** — far below the WCAG 2.5.5 guideline of 44×44px minimum touch target. Users with larger fingers or motor impairments will consistently miss these.

**Fix in `SystemPreview.tsx`:**
```tsx
// Wrap each dot button in a larger tap area:
<button
  key={i}
  onClick={() => goTo(i, i > index ? 1 : -1)}
  aria-label={`الشريحة ${i + 1}`}
  className="p-3 -m-3 rounded-full ..."  // adds ~24px invisible tap zone on each side
>
  <span className={[
    'block rounded-full transition-all duration-300',
    i === index ? 'w-6 h-[6px] bg-brand-teal' : 'w-[6px] h-[6px] bg-slate-600',
  ].join(' ')} />
</button>
```

### 1.5 Feature Bento Card Decorators Permanently Dimmed on Mobile ⚠️ HIGH PRIORITY
**File:** `src/components/Features.tsx` · Lines 634–641

```tsx
className={[
  isWide ? 'w-full md:w-auto md:shrink-0' : 'mt-4',
  'opacity-60 group-hover:opacity-100',  // hover only — never 100% on touch
  'transition-opacity duration-300',
].join(' ')}
```

The KPI chips, inventory bars, and other decorators inside bento cards are locked at **60% opacity** on mobile because CSS `:hover` never fires on touch screens. This creates a permanently washed-out appearance for the data visualizations that are meant to be the most engaging part of the cards.

**Fix:** Remove the opacity dim behavior, or trigger it only on pointer devices:
```tsx
// Replace:
'opacity-60 group-hover:opacity-100'
// With:
'opacity-100 @supports (pointer: fine) { opacity-60 group-hover:opacity-100 }'
// Simplest practical fix:
'opacity-90 md:opacity-60 md:group-hover:opacity-100'
```
Or simply remove opacity-60 since the subtle dim adds little value and breaks mobile.

### 1.6 Pricing Grid — Tablet Layout Imbalance
**File:** `src/components/Pricing.tsx` · Line 191

```tsx
className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
```

At `md` breakpoint (768–1279px), the 3 plans render as 2+1. The highlighted Enterprise plan ends up **alone on the second row** and left-aligned, rather than centered. This breaks the visual symmetry and reduces the visual impact of the featured plan.

**Fix:**
```tsx
// Option A: Force 3-col from md:
className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"

// Option B: Center the orphan card on tablet:
className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch [&>*:last-child]:md:col-span-2 [&>*:last-child]:md:max-w-sm [&>*:last-child]:md:mx-auto"
```

### 1.7 Footer CTA Band — Long Button Text on Mobile
**File:** `src/components/Footer.tsx` · Line 129

```tsx
للاقتراحات والتحسينات راسلنا عبر البريد
```

This email button contains 38 characters of Arabic text. On mobile (`sm:flex-row` wraps to full-width column), the button renders fine as a block, but on narrow screens the text can overflow the button's visible area if font scaling is applied. Add `text-center` and `overflow-hidden` to the email button:

```tsx
// Add: text-center overflow-hidden text-ellipsis whitespace-nowrap
// Or break into two lines with explicit px constraint
```

### 1.8 Scroll Indicator — Not Hidden on Short Screens
**File:** `src/components/Hero.tsx` · Lines 437–452

```tsx
className="absolute bottom-8 left-1/2 -translate-x-1/2 ..."
```

The "اكتشف المزيد" scroll indicator is absolutely positioned at `bottom-8`. On devices where the full Hero section is shorter than the viewport (e.g., landscape phones), this overlaps with content. It should be hidden on landscape mobile:

```tsx
className="absolute bottom-8 left-1/2 -translate-x-1/2 ... hidden landscape:hidden sm:landscape:flex"
```

---

## Section 2 — Visual Hierarchy & Contrast

### 2.1 Low-Contrast Text Classes Used for Body Copy
**Multiple files**

Several `text-slate-500` (`#64748b`) and `text-slate-600` (`#475569`) classes are used for meaningful text on dark backgrounds:

| Color | Hex | Contrast on ocean-900 (#040d1a) | Rating |
|-------|-----|----------------------------------|--------|
| `text-white` | #ffffff | 21:1 | AAA ✅ |
| `text-slate-200` | #e2e8f0 | ~17:1 | AAA ✅ |
| `text-slate-300` | #cbd5e1 | ~12:1 | AAA ✅ |
| `text-slate-400` | #94a3b8 | ~6.5:1 | AA ✅ |
| `text-slate-500` | #64748b | ~3.7:1 | Fails AA for body text ⚠️ |
| `text-slate-600` | #475569 | ~2.3:1 | Fails AA/Large ❌ |

**Problematic uses:**
- `src/components/Hero.tsx` L322: `text-slate-500` — date in dashboard mockup (decorative, acceptable)
- `src/components/Footer.tsx` L165: `text-slate-600` — copyright notice `© {YEAR}` — real content, should be at least `text-slate-500`
- `src/components/Footer.tsx` L321: `text-slate-700` — "Crafted with..." — fails all WCAG levels
- `src/components/SystemPreview.tsx` L157: `text-brand-teal/70` with 70% opacity — section eyebrow label readability
- All module pages: `text-[10px]` labels at `text-slate-500` — very small AND low contrast

**Fix:** Replace `text-slate-600` and `text-slate-700` with `text-slate-500` minimum for any real content. Reserve `text-slate-600+` for purely decorative flourishes.

### 2.2 "It's CONTROL." English Slogan — Intentional but Potential Confusion
**File:** `src/components/Hero.tsx` · Lines 167–180

The English slogan is a deliberate brand decision and well-executed. The `tracking-widest uppercase` style on the preceding line creates clear separation. No change needed. ✅

### 2.3 Section Background Transitions — Effective and Consistent
The alternating `bg-ocean-950` / `bg-ocean-900` pattern across sections creates subtle depth without jarring jumps. The hairline gradient separators in PlatformPower are elegant. ✅

### 2.4 Gradient Text Legibility — Teal-to-Green Works Well
The `bg-gradient-to-l from-brand-teal to-brand-green` on headline accents is consistently applied across sections and reads well at display sizes. At body sizes it would fail, but it's correctly used only at `text-3xl+`. ✅

### 2.5 Pricing Visual Hierarchy — Enterprise Plan Distinction
The gradient border wrapper for the Enterprise plan is the best-in-class approach for "1px gradient border" in CSS (solid padding + gradient background). The teal glow shadow reinforces the selection. However, the `text-ocean-400` label inside `CardInner` for the plan caption (`text-xs text-slate-500`) renders the subtitle at low contrast — change to `text-slate-400`.

### 2.6 Ambient Glow Orbs — Performance & Subtlety
**File:** `src/components/Hero.tsx` · Lines 88–107

The two animated glow orbs using Framer Motion `animate={{ scale, opacity }}` are GPU-composited and should be fine. The `rgba(20,184,166,0.13)` and `rgba(34,197,94,0.09)` opacity values are tastefully subtle. ✅

### 2.7 Eyebrow Badge Consistency
All section headers use the same pattern:
```tsx
px-4 py-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-wide
```
This is perfectly consistent across `Hero`, `Features`, `Pricing`, `PlatformPower`. ✅

Module pages use inline `style={{ color: ACCENT + '0.85)' }}` for their `SectionLabel` component — visually identical but a different implementation. Consider extracting `SectionLabel` into a shared component.

---

## Section 3 — Consistency & Design Patterns

### 3.1 Undefined Tailwind Color Classes Across All Module Pages ⚠️ CRITICAL BUG
**File:** All 13 module pages (canonical: `src/pages/POSPage.tsx`) · Dozens of instances

The custom Tailwind config defines `ocean-500` through `ocean-950` only:
```ts
// tailwind.config.ts
ocean: {
  950: '#020b16',
  900: '#040d1a',
  800: '#07152a',
  700: '#0a1f38',
  600: '#0d2a4d',
  500: '#1a3f6b',
}
```

All module pages use `text-ocean-300` and `text-ocean-400` extensively, but **these classes do not exist** in the design system. Tailwind will not generate CSS for them, so:
- All body copy using `text-ocean-300` will render as the body default color (`#e2e8f0`) — not the intended subtle grey
- All secondary labels using `text-ocean-400` will also use the default color
- Navigation links like `text-ocean-400 hover:text-cyan-400` will render white → cyan on hover (wrong starting state)

**Affected classes used in module pages:**
- `text-ocean-300` (body paragraphs, secondary descriptions)
- `text-ocean-400` (back links, secondary buttons, stat text)
- `border-ocean-700` and `border-ocean-800` (section separators) — also undefined (only `ocean-700` is defined via `0a1f38`)

Wait: `ocean-700: '#0a1f38'` IS defined. `border-ocean-700` ✅. But `border-ocean-800/60` — `ocean-800` is also defined. Let me correct: the missing classes are specifically **`ocean-300` and `ocean-400`**.

**Fix — Option A (Recommended):** Extend `tailwind.config.ts` with the missing shades:
```ts
// tailwind.config.ts
ocean: {
  950: '#020b16',
  900: '#040d1a',
  800: '#07152a',
  700: '#0a1f38',
  600: '#0d2a4d',
  500: '#1a3f6b',
  400: '#2a5d9f',  // Add
  300: '#4a7ec7',  // Add
  200: '#7ba9e0',  // Add (optional)
},
```

**Fix — Option B:** Replace all `text-ocean-300` → `text-slate-300` and `text-ocean-400` → `text-slate-400` across all module pages.

### 3.2 Button Shape Inconsistency — rounded-full vs rounded-2xl vs rounded-xl
**Multiple files**

Primary CTA buttons use three different border-radius styles:

| Context | Button Class | Visual |
|---------|-------------|--------|
| Navbar CTA | `rounded-full` | Pill |
| Hero primary CTA | `rounded-full` | Pill |
| Footer WhatsApp CTA | `rounded-2xl` | Rounded rect |
| Footer Email CTA | `rounded-2xl` | Rounded rect |
| Pricing plan CTAs | `rounded-2xl` | Rounded rect |
| Module Hero CTAs | `rounded-xl` | Less-rounded rect |
| Module Walkthrough tabs | `rounded-full` | Pill |

The `rounded-full` pill shape is used for the most prominent CTAs (Navbar, Hero) but reverts to `rounded-2xl` or `rounded-xl` in Pricing and module pages. This inconsistency signals different component origins (likely designed separately). 

**Recommendation:** Standardize primary CTAs at `rounded-full` (pill) across all sections. Secondary/outline CTAs can use `rounded-xl`. Update `Footer.tsx`, `Pricing.tsx`, and all module page CTA buttons.

### 3.3 Icon Badge Shape Inconsistency
**Multiple files**

| Component | Icon size | Container | Radius |
|-----------|-----------|-----------|--------|
| Features bento cards | 22px | 48×48px | `rounded-2xl` |
| PlatformPower cards | 22px | 48×48px | `rounded-xl` |
| Pricing plan icons | 22px | 48×48px | `rounded-2xl` |
| Module pages | 20px | 44×44px (`h-11 w-11`) | `rounded-xl` |

Minor but noticeable at close inspection: `Features` and `Pricing` use `rounded-2xl` while `PlatformPower` and module pages use `rounded-xl`. Standardize to `rounded-2xl` (16px) for all 48px icon containers.

### 3.4 Invalid Tailwind Class: `duration-250` ⚠️
**File:** `src/components/Pricing.tsx` · Line 382

```tsx
'transition-all duration-250',
```

`duration-250` is **not a valid Tailwind CSS class**. Tailwind's built-in duration scale: 75, 100, 150, 200, 300, 500, 700, 1000ms. The transition silently falls back to Tailwind's default (150ms). The CTA button hover animation will feel abrupt.

**Fix:**
```tsx
'transition-all duration-200',  // or duration-300
```

### 3.5 Deprecated Class: `hover:border-opacity-50` ⚠️
**File:** `src/components/PlatformPower.tsx` · Line 180

```tsx
hover:border-opacity-50
```

The `border-opacity-*` utilities are deprecated in Tailwind v3 in favor of the opacity modifier syntax. This class will produce no visible effect in modern Tailwind.

**Fix:**
```tsx
// Remove hover:border-opacity-50 and instead use opacity modifier on the border color:
// Change: border-brand-teal/20 → hover:border-brand-teal/40
// Or: border-sky-500/20 → hover:border-sky-500/40
```

### 3.6 "اقرأ المزيد" Link — Hidden from Screen Readers
**File:** `src/components/Features.tsx` · Lines 584–620

The visible "اقرأ المزيد" decorative link has `tabIndex={-1}` and `aria-hidden="true"`, while the full-card overlay `Link` correctly handles keyboard navigation and has a proper `aria-label`. This setup is correct. ✅

However, the decorative link uses `opacity-0 group-hover:opacity-90` — it only appears on desktop hover. This is fine since it's supplementary to the full-card clickability, but consider adding a persistent subtle indicator (e.g., a small arrow icon at `opacity-30`) so mobile users have a visual affordance that the card is clickable.

### 3.7 Footer WhatsApp Link — Hardcoded Instead of Using Constants
**File:** `src/components/Footer.tsx` · Line 90

```tsx
href="https://wa.me/201100028752"   // ← hardcoded
```

Every other primary CTA uses `WHATSAPP_CTA_URL` from `constants.ts`, which also includes the pre-filled message template. The Footer CTA is hardcoded and skips the pre-fill. If the phone number changes, this will be missed.

**Fix:**
```tsx
import { WHATSAPP_CTA_URL } from '../constants'
// ...
href={WHATSAPP_CTA_URL}
```

### 3.8 Repeated Animation Helpers Across 13 Module Pages
Each module page defines its own local `fadeUp` and `stagger` functions — 13 near-identical copies. This creates maintenance drift risk (already evident: `fadeUp` delay param differs slightly between pages).

**Fix:** Extract to a shared utility:
```ts
// src/utils/animations.ts
export const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
})
export const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
```

### 3.9 Pricing — Enterprise Highlighted Instead of Mid Tier
**File:** `src/components/Pricing.tsx` · PLANS data

The Enterprise plan (most expensive, 900 EGP) carries the "الأكثر مبيعاً / طلباً" badge and gradient border treatment. Standard SaaS pricing UX convention highlights the **middle tier** (Pro, 750 EGP) as the "recommended" option to anchor perceived value — making Starter look affordable (by comparison to Pro) and Enterprise seem like an upgrade. Highlighting the highest tier as "most popular" can signal that the product is premium-first, which may reduce conversions from cost-sensitive SMB buyers.

**Recommendation:** Move `highlighted: true` and `tag` to the `Pro` plan, or confirm this is intentional based on sales data.

### 3.10 Features Bento — Missing One Module in Row 6
**File:** `src/components/Features.tsx` · Row 6

Row 6 has `reports` at `colSpan: 'two'` with no accompanying `colSpan: 'one'` card. This leaves an empty cell in the 3-column grid. While this may be intentional for visual rhythm, it creates an asymmetric gap. Consider either adding a placeholder card or making `reports` `colSpan: 'three'` for that row, moving `settings` to a separate visual treatment.

---

## Section 4 — Navigation & Flow

### 4.1 Hash Navigation Broken on Module Pages ⚠️ CRITICAL BUG
**Files:** `src/components/Navbar.tsx` L7–12, `src/components/Footer.tsx` L6–10

```tsx
const NAV_LINKS = [
  { label: 'الرئيسية',   href: '#home'     },
  { label: 'المميزات',   href: '#features' },
  { label: 'الأسعار',    href: '#pricing'  },
  { label: 'تواصل معنا', href: '#contact'  },
]
```

With `HashRouter`, the application URL on a module page looks like: `example.com/#/features/pos`. Clicking `<a href="#home">` appends a fragment to the **current** URL → `example.com/#/features/pos#home`. This does NOT navigate to the home route — it tries to scroll to an element with `id="home"` on the current module page (which doesn't exist), so nothing happens.

Users who navigate to a module page **cannot use the Navbar to return to any home section**. The Navbar is effectively broken on all 13 module pages.

**Fix — Navbar.tsx and Footer.tsx:**
```tsx
// For HashRouter, navigation back to home sections must use
// the hash router prefix. Convert anchor hrefs to absolute paths:
const NAV_LINKS = [
  { label: 'الرئيسية',   href: '/'         },  // navigates to Home route
  { label: 'المميزات',   href: '/#features'},  // NOTE: won't auto-scroll in HashRouter
  { label: 'الأسعار',    href: '/#pricing' },
  { label: 'تواصل معنا', href: '/#contact' },
]
// Use <Link to="/"> instead of <a href="#home"> for React Router navigation
// For in-page scroll, use useNavigate + scrollIntoView after navigation
```

A complete fix requires using React Router's `Link` + a post-navigation scroll mechanism. Simplest fix: use the full path and accept that in-page anchoring is lost (the home page scrolls to top), then users can scroll:
```tsx
// In Navbar, replace <a> with <Link to="/">
import { Link, useLocation } from 'react-router-dom'
// Only show hash-based scroll links when on the home route:
const isHome = useLocation().pathname === '/'
href={isHome ? '#home' : '/'}
```

### 4.2 Module Page Back Link — `Link to="/#features"` Incorrect in HashRouter
**Files:** All module pages · `BackStrip` component

```tsx
<Link to="/#features" ...>العودة إلى جميع الوحدات</Link>
```

In HashRouter, `Link to="/#features"` generates `href="#/#features"` which is malformed. The `#/` prefix is the HashRouter route prefix, then `#features` adds a second fragment — browsers handle this inconsistently.

**Fix:**
```tsx
<Link to="/" ...>العودة إلى جميع الوحدات</Link>
// Users will land at top of home page; Features section is visible after short scroll
// Or use: window.history.back() for proper browser-back behavior
```

### 4.3 Module Page CTAs Link to `/#contact` — Same HashRouter Issue
**Files:** All module pages · `Hero` and `CtaSection` components

```tsx
<Link to="/#contact" className="...">ابدأ الآن مجاناً</Link>
```

Same issue as 4.2. These CTAs should link directly to `WHATSAPP_CTA_URL` since `#contact` = `<footer id="contact">` which is always accessible by scrolling. Or navigate to home and scroll:

```tsx
import { WHATSAPP_CTA_URL } from '../constants'
<a href={WHATSAPP_CTA_URL} target="_blank" rel="noopener noreferrer">
  ابدأ الآن
</a>
```

### 4.4 CTA Messaging Contradiction: "ابدأ الآن مجاناً" Links to Sales Contact
**Files:** All module pages · `CtaSection`

The primary CTA on every module page reads **"ابدأ الآن مجاناً"** ("Start Now for Free") but links to `/#contact` (the footer with a WhatsApp/email contact form). There is no free trial — the landing page shows a minimum price of 400 EGP/month. The word "مجاناً" (free) is misleading and will create friction when users realize they need to pay.

**Fix:** Change CTA copy to something honest:
```tsx
// Options:
"ابدأ الآن"              // "Start Now"
"تواصل معنا"            // "Contact Us"  
"احجز نسختك التجريبية"  // "Reserve Your Trial"
"ابدأ تجربتك"           // "Start Your Trial"
```

### 4.5 No Keyboard Skip-Link for RTL
**File:** `src/main.tsx`, `index.html`

There is no `<a href="#main-content" class="sr-only focus:not-sr-only">` skip-link before the Navbar. Screen reader users and keyboard navigators must tab through all 4 nav links + CTA button before reaching main content on every page load. Add a skip-nav link.

### 4.6 Missing WhatsApp Pre-fill on Module Page CTAs
**File:** All module pages

Module page CTAs that do link to WhatsApp use the bare URL `https://wa.me/201100028752` without the pre-filled message from `WHATSAPP_CTA_URL`. This means users arriving from a POS or Inventory page will send a blank WhatsApp message, losing the context that `WHATSAPP_CTA_URL` provides ("أريد الاستفسار عن نظام Maly-OBS"). 

Module-specific pre-fills would be even better:
```ts
// e.g., for POS page:
`https://wa.me/201100028752?text=مرحباً،%20أريد%20الاستفسار%20عن%20وحدة%20نقطة%20البيع%20(POS)`
```

### 4.7 No "Back to Top" on Long Module Pages
Module pages are 1000–1500px tall on desktop. There is no back-to-top button or sticky secondary navigation. Users who scroll to the FAQ or CTA section must manually scroll all the way back up to reach the Navbar. Add a `fixed bottom-6 right-6` back-to-top button that appears after 400px scroll.

### 4.8 SystemPreview — Mouse-pause Only, No Touch Equivalent
**File:** `src/components/SystemPreview.tsx` · Lines 178–179

```tsx
onMouseEnter={() => setPaused(true)}
onMouseLeave={() => setPaused(false)}
```

The auto-advance carousel pauses on mouse hover (desktop) but has no equivalent touch behavior. On mobile, the carousel auto-advances even while a user is reading the label. Add `onTouchStart={} / onTouchEnd={}` or simply pause on any focus within the component.

---

## Section 5 — Code & Asset Integrity Issues

### 5.1 SystemPreview Images Missing from Repo ⚠️ CRITICAL
**File:** `src/components/SystemPreview.tsx` · Lines 9–41

All 5 slide images reference paths that don't exist:
```
./assets/main-dashboard.png   ❌ not in /public
./assets/main-orders.png      ❌ not in /public
./assets/main-preparation.png ❌ not in /public
./assets/main-reports.png     ❌ not in /public
./assets/main-mobile.png      ❌ not in /public
```

The SystemPreview browser mockup — the single most impactful conversion element on the home page — shows **5 broken image slots**. This is likely the highest-priority visual bug on the entire site.

**Fix:** Add the actual app screenshots to `public/assets/`. In the interim, add a placeholder state:
```tsx
// In SystemPreview.tsx, add error handling:
<motion.img
  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
  ...
/>
// And add a placeholder div behind the img:
<div className="absolute inset-0 flex items-center justify-center text-slate-600 text-sm">
  {current.label}
</div>
```

### 5.2 Favicon Missing
**File:** `index.html` · Line 5

```html
<link rel="icon" type="image/png" href="./assets/logo_icon.png" />
```

`logo_icon.png` does not exist in `public/assets/`. Only `logo_splash_light.png` is present. The favicon will be a broken link, showing the browser's default blank favicon.

**Fix:** Either rename the existing logo or use it directly:
```html
<link rel="icon" type="image/png" href="./assets/logo_splash_light.png" />
```

### 5.3 Module Page Image Paths Inconsistent
**Files:** All module pages

- POSPage uses: `/assets/images/pos-*.png` (absolute path from root)
- All other module pages use: `./assets/prep-hero.png`, `./assets/inv-hero.png`, etc. (relative path)

With Vite's `base: '/'` config, both should resolve equally. But the inconsistency suggests copy-paste drift. Standardize to `/assets/images/{module}-{type}.png` across all pages.

### 5.4 ModuleDetail Fallback Route — Stale Data
**File:** `src/pages/ModuleDetail.tsx`

The generic fallback page at `/features/:moduleId` only has data for 6 modules: `orders`, `hr`, `inventory`, `reports`, `shipping`, `permissions`. The Features bento grid links to `dashboard`, `staff`, `ads`, `manufacturing`, `expenses`, `debts`, `order-entry`, `pos` — most of which have dedicated pages. However, if a dedicated route were removed or mis-typed, users would hit the fallback and see wrong content.

Additionally, some `RelatedModules` sections in module pages still link to `/features/orders` and `/features/hr` — routes that don't have dedicated pages and hit the fallback with mismatched data.

**Fix:** Audit all `to="/features/..."` links in `RelatedModules` sections and ensure they point to routes that have dedicated pages.

---

## Section 6 — Actionable Recommendations (Prioritized)

### 🔴 P0 — Critical (Fix Before Launch)

| # | Issue | File(s) | Action |
|---|-------|---------|--------|
| 1 | SystemPreview shows 5 broken images | `SystemPreview.tsx` | Add `main-*.png` assets to `/public/assets/` |
| 2 | Navbar hash links broken on module pages | `Navbar.tsx`, `Footer.tsx` | Replace `<a href="#...">` with `<Link to="/">` + scroll logic |
| 3 | `text-ocean-300/400` classes don't exist | All 13 module pages | Add shades to `tailwind.config.ts` OR mass-replace with `text-slate-300/400` |
| 4 | Dot indicator touch targets: 6×6px | `SystemPreview.tsx` | Wrap in `p-3 -m-3` tap zone |
| 5 | Favicon `logo_icon.png` is missing | `index.html` | Use existing `logo_splash_light.png` |

### 🟠 P1 — High Priority (Fix in Next Sprint)

| # | Issue | File(s) | Action |
|---|-------|---------|--------|
| 6 | Hero image hidden on mobile (all module pages) | All 13 module pages | Remove `hidden lg:block`, show full-width below text on mobile |
| 7 | "ابدأ الآن مجاناً" copy is misleading | All 13 module pages | Change to "تواصل معنا" or "ابدأ الآن" |
| 8 | BackStrip `Link to="/#features"` malformed in HashRouter | All 13 module pages | Change to `<Link to="/">` |
| 9 | Footer WhatsApp hardcoded, skips pre-fill message | `Footer.tsx` L90 | Replace with `WHATSAPP_CTA_URL` constant |
| 10 | Decorator opacity-60 permanently on touch | `Features.tsx` L636 | Remove `opacity-60`, add `md:opacity-60 md:group-hover:opacity-100` |

### 🟡 P2 — Medium Priority (Design Polish Sprint)

| # | Issue | File(s) | Tailwind Change |
|---|-------|---------|-----------------|
| 11 | `duration-250` invalid Tailwind class | `Pricing.tsx` L382 | `duration-250` → `duration-200` |
| 12 | `hover:border-opacity-50` deprecated | `PlatformPower.tsx` L180 | Remove; use `hover:border-{color}/50` syntax |
| 13 | Primary CTA shape inconsistency | `Footer.tsx`, `Pricing.tsx`, module pages | Standardize primary CTAs to `rounded-full` |
| 14 | Icon badge shape inconsistency | `PlatformPower.tsx`, module pages | `rounded-xl` → `rounded-2xl` for 48px containers |
| 15 | `text-slate-600/700` used for real content | `Footer.tsx` L165, L321 | `text-slate-600` → `text-slate-500`, `text-slate-700` → `text-slate-500` |
| 16 | SystemPreview carousel auto-advances on mobile while reading | `SystemPreview.tsx` | Add `onTouchStart/End` pause logic |

### 🔵 P3 — Refactoring & Architecture

| # | Issue | File(s) | Action |
|---|-------|---------|--------|
| 17 | 13 copies of `fadeUp`/`stagger` | All module pages | Extract to `src/utils/animations.ts` |
| 18 | `SectionLabel` component duplicated 13× | All module pages | Extract to `src/components/SectionLabel.tsx` |
| 19 | Module image path inconsistency | POSPage vs others | Standardize to `/assets/images/{mod}-{type}.png` |
| 20 | Add skip-nav link for keyboard accessibility | `index.html` / `App.tsx` | `<a href="#main-content" class="sr-only focus:not-sr-only">` |
| 21 | Back-to-top button missing on module pages | All module pages | Add fixed `bottom-6 right-6` button, visible after 400px scroll |
| 22 | Enterprise plan highlighted vs Mid tier convention | `Pricing.tsx` | Move `highlighted: true` to Pro plan (review with stakeholders) |
| 23 | `RelatedModules` links to non-existent routes | Multiple module pages | Audit all `/features/orders`, `/features/hr` links |

---

## Appendix A — Component-Level Quick Reference

### Navbar.tsx
- ✅ Glass blur effect scales well with scroll state
- ✅ Hamburger touch target: `p-2.5` ≈ 42×42px (borderline acceptable, could be `p-3`)
- ✅ Mobile CTA `py-3` = 48px height ✓
- ❌ Hash links don't work on module pages (P0)
- ❌ No active link indicator for current route

### Hero.tsx
- ✅ Animation stagger and entrance timing are polished
- ✅ Dashboard mockup is rich and engaging on desktop
- ⚠️ Floating badges can overflow on <375px screens (P2)
- ⚠️ `min-h-[calc(100vh-4rem)]` may be too tall on landscape phones
- ✅ Trust micro-stats are compact and credible

### SystemPreview.tsx
- ❌ All 5 slide images are broken (P0 — must add assets)
- ✅ RAF-based progress bar is smooth
- ✅ Tab roles (`role="tab"`, `aria-selected`) are correct
- ❌ Dot indicators: 6×6px touch targets (P0)
- ⚠️ No touch-pause behavior

### PlatformPower.tsx
- ✅ 3-column responsive grid works well
- ✅ Per-card border color differentiation is clear
- ❌ `hover:border-opacity-50` is deprecated (P2)
- ⚠️ Icon badge radius inconsistency: `rounded-xl` vs `rounded-2xl` elsewhere (P2)

### Features.tsx
- ✅ Z-pattern bento layout is visually distinctive and original
- ✅ Full-card overlay Link is properly implemented with `focus-visible:ring-2`
- ✅ Decorators (DashboardDecorator, etc.) add excellent visual richness
- ❌ Decorator opacity-60 is stuck on mobile (P1)
- ⚠️ Row 6 has an empty 3rd cell (minor visual gap)
- ✅ Per-module color theming is coherent and aids visual scanning

### Pricing.tsx
- ✅ Gradient border technique for Enterprise is correct and elegant
- ❌ `duration-250` is invalid (P2)
- ⚠️ Tablet 2+1 grid layout leaves Enterprise card alone on second row (P2)
- ⚠️ Enterprise highlighted over Pro — review with business (P3)
- ✅ Feature checklist contrast is good on highlighted vs standard cards

### Footer.tsx
- ❌ WhatsApp link hardcoded, bypasses constants (P1)
- ⚠️ `text-slate-700` "Crafted with ♥" line fails WCAG contrast (P2)
- ✅ Social media link hover states are well-differentiated by brand color
- ✅ CTA band layout is strong

### Module Pages (POSPage.tsx as canonical)
- ❌ `text-ocean-300/400` classes don't exist in Tailwind config (P0)
- ❌ Hero image hidden on mobile (P1)
- ❌ "ابدأ الآن مجاناً" misleading copy (P1)
- ❌ BackStrip and CTA `Link to="/#..."` malformed in HashRouter (P1)
- ✅ Walkthrough tab + image panel layout is excellent on desktop
- ✅ FAQ accordion animation is smooth
- ✅ PainStrip stat cards create effective emotional urgency
- ✅ RelatedModules section aids cross-sell navigation

---

## Appendix B — Specific Tailwind Class Changes Summary

```
// Pricing.tsx L382
- 'transition-all duration-250'
+ 'transition-all duration-200'

// PlatformPower.tsx L180
- hover:border-opacity-50
+ (remove; border opacity is controlled by the /XX modifier on the color class)

// Footer.tsx L90
- href="https://wa.me/201100028752"
+ href={WHATSAPP_CTA_URL}

// Footer.tsx L165
- className="text-slate-600 text-xs"
+ className="text-slate-500 text-xs"

// Footer.tsx L321
- className="text-xs text-slate-700 text-center"
+ className="text-xs text-slate-500 text-center"

// Features.tsx L636
- 'opacity-60 group-hover:opacity-100'
+ 'opacity-90 md:opacity-60 md:group-hover:opacity-100'

// SystemPreview.tsx — dot buttons (wrap in tap zone)
- className="rounded-full transition-all duration-300 ..."
+ className="p-3 -m-3 rounded-full transition-all duration-300 ..." (outer button)
  + inner <span> carries the visual dot

// tailwind.config.ts — add missing ocean shades
+ ocean: { ..., 400: '#2a5d9f', 300: '#4a7ec7' }

// All module pages — CTA copy
- "ابدأ الآن مجاناً"
+ "ابدأ الآن" or "تواصل معنا"

// index.html L5
- href="./assets/logo_icon.png"
+ href="./assets/logo_splash_light.png"
```

---

*Report generated by automated codebase analysis and manual component audit. All line numbers reference the repository state at the time of audit (June 27, 2026).*
