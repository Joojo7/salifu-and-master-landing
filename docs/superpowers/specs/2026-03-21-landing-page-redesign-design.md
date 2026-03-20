# Landing Page Redesign — FC 25 Wireframe Style

## Overview

Redesign the Salifu & Master landing page to follow the EA SPORTS FC 25 wireframe structure. The page will be a cinematic, dark-themed, image-heavy marketing page with 6 sections: sticky nav, full-bleed hero, features carousel, screenshot gallery, full-width CTA banner, and a compact redesigned footer.

Existing sub-pages (characters, cities, how-to-play, about, privacy, terms) remain unchanged. Only the homepage and shared components (nav, footer) are redesigned.

## New Screenshot Assets

### Desktop (`/public/screenshots/desktop-in-game/`)
- `Screenshot 2026-03-20 at 3.01.24 PM.png` — Shop: Iveco Daily
- `Screenshot 2026-03-20 at 3.03.20 PM.png` — Shop: Hyundai County
- `Screenshot 2026-03-20 at 3.03.58 PM.png` — Shop: Toyota HiAce
- `Screenshot 2026-03-20 at 3.04.14 PM.png` — Shop: Peugeot J5
- `Screenshot 2026-03-20 at 3.04.29 PM.png` — Shop: Renault Estafette
- `Screenshot 2026-03-20 at 4.10.08 PM.png` — Gameplay: driving with sunset skyline
- `Screenshot 2026-03-20 at 4.13.28 PM.png` — Gameplay: intersection scene
- `Screenshot 2026-03-20 at 4.22.45 PM.png` — Gameplay: Peugeot side view driving
- `Screenshot 2026-03-20 at 4.55.36 PM.png` — Gameplay: passenger pickup with character

### Mobile (`/public/screenshots/mobile-in-game/`)
- `Screenshot 2026-03-21 at 12.01.40 AM.png` — Master Kofi dialogue
- `Screenshot 2026-03-21 at 12.01.51 AM.png` — Amelia dialogue
- `Screenshot 2026-03-21 at 12.02.01 AM.png` — "GO!" screen
- `Screenshot 2026-03-21 at 12.03.24 AM.png` — Mobile driving gameplay
- `Screenshot 2026-03-21 at 12.05.27 AM.png` — Mobile driving close-up

**Note:** Screenshot filenames should be renamed to kebab-case descriptive names during implementation (e.g., `shop-hyundai-county.png`, `gameplay-sunset-driving.png`).

---

## Section 1: Sticky Navigation

### Layout
- Fixed to top of viewport
- Three-column layout: logo (left), nav links (center), CTA button (right)

### Behavior
- **Homepage on load:** Always visible, transparent background over the hero
- **Homepage on scroll:** Transitions to solid `$bg-base` with `backdrop-filter: blur(12px)` after scrolling ~100px
- **Sub-pages:** Starts with solid `$bg-base` background immediately (no hero to overlay)
- Links: Characters, Cities, How to Play, About
- "Play Now" button: solid `$accent` fill, rounded, links to `play.salifuandmaster.com`

### Mobile
- Logo left, hamburger right
- "Play Now" stays visible as a compact button
- Hamburger opens full-screen overlay menu

### UX Details
- Link hover: underline slides in from left
- Smooth transition on background change (~200ms)

---

## Section 2: Full-Bleed Hero

### Layout
- `100vh` full viewport, edge-to-edge (no container padding)
- Content centered both vertically and horizontally

### Background
- Desktop gameplay screenshot (`gameplay-sunset-driving` / `4.10.08 PM`) as full-cover background
- Dark gradient overlay from bottom (80% opacity) fading to transparent at top
- Dark vignette around edges
- Subtle Ken Burns zoom effect (scale 1.0 to 1.05 over ~10s, infinite loop) — CSS animation with `will-change: transform`, disabled via `prefers-reduced-motion: reduce`

### Content Stack (centered)
1. Game logo (large, `LOGO_SRC`)
2. Tagline: "Pick up passengers. Make your sales. Survive the streets." — white, medium weight, letter-spaced
3. Two buttons side by side:
   - "Play Now" — solid `$accent`, bold, larger size
   - "Learn More" — white outlined, transparent fill, scrolls to `#features`
4. Sub-text: "Free. No download. Play in your browser." — `$text-secondary`, small
5. Animated scroll-down chevron at bottom

### Animations
- Staggered fade-in on load: logo (0ms) -> tagline (200ms) -> buttons (400ms) -> sub-text (600ms)
- Each element slides up slightly as it fades in

### Mobile
- Same vertical stack, buttons full-width and stacked vertically
- Background image repositioned to keep visual interest

---

## Section 3: Features Carousel

### Layout
- Dark background (`$bg-base`)
- No section title — cards are the content
- `id="features"` for "Learn More" scroll target

### Cards (5 total)

| # | Title | Image | Description |
|---|-------|-------|-------------|
| 1 | The Trotro Shop | `shop-hyundai-county` (3.03.20 PM) | Browse and buy trotros — from the classic Peugeot J5 to the Hyundai County. Each vehicle has unique capacity, speed, and master's cut stats. |
| 2 | Real Ghanaian Routes | `gameplay-sunset-driving` (4.10.08 PM) | Drive actual routes across Accra, Kumasi, and Cape Coast. 14 routes with real street names and landmarks. |
| 3 | Meet the Crew | `master-kofi-dialogue` (12.01.40 AM) | Master Kofi runs the show. Amelia sells jollof. Serwaa keeps you sharp. Every character shapes your journey. |
| 4 | Hustle & Survive | `passenger-pickup` (4.55.36 PM) | Pick up passengers, manage your resources, dodge traffic. Every route is a test of skill and timing. |
| 5 | Upgrade & Compete | `shop-toyota-hiace` (3.03.58 PM) | Earn money, unlock better trotros, climb the leaderboard. Your fleet is your legacy. |

### Card Design (FC 25 style)
- Large 16:9 image taking ~60% viewport width
- Title and description overlaid at bottom-left on a dark gradient within the image
- Dot indicators below, centered
- Left/right arrow buttons on sides

### Behavior
- Auto-advances every 6 seconds (disabled when `prefers-reduced-motion: reduce`)
- Pauses on hover or touch
- Smooth horizontal slide transition, exiting card scales down slightly
- Subtle parallax on image hover

### Mobile
- Full-width swipeable panels
- Text below image instead of overlaid
- Touch/swipe navigation, dots visible

---

## Section 4: In-Game Screenshots Gallery

### Layout
- Dark background (`$bg-elevated` for contrast)
- Small section title: "See It In Action" — `$text-secondary`, uppercase, letter-spaced, centered

### Desktop Screenshots Grid (3 columns)
Row 1:
- `gameplay-sunset-driving` (4.10.08 PM)
- `gameplay-intersection` (4.13.28 PM)
- `gameplay-peugeot-side` (4.22.45 PM)

Row 2:
- `passenger-pickup` (4.55.36 PM)
- `shop-renault-estafette` (3.04.29 PM)
- `shop-peugeot-j5` (3.04.14 PM)

### Mobile Screenshots Row
- 3 mobile screenshots centered below desktop grid
- Displayed in phone mockup frames (CSS border-radius + border treatment to simulate device)
- Images: `mobile-driving` (12.03.24 AM), `master-kofi-dialogue` (12.01.40 AM), `go-screen` (12.02.01 AM)

### UX Details
- Hover: `scale(1.03)` with soft shadow lift
- Click/tap: opens lightbox overlay (full-screen dark backdrop, image centered, close on X or click outside)
- Lightbox accessibility: `role="dialog"`, `aria-modal="true"`, Escape key to close, focus trapped within overlay, left/right arrow keys to navigate between images
- ScrollReveal fade-in on scroll

### Mobile Responsive
- Desktop screenshots: 2-column grid
- Mobile screenshots: horizontal scroll row

---

## Section 5: Full-Width CTA Banner

### Layout
- Full-width, edge-to-edge
- Background: Amelia dialogue screenshot (`12.01.51 AM`) with dark gradient overlay (left-to-right, ~70% on left to ~40% on right)

### Content (left-aligned, FC 25 style)
1. Game logo (small)
2. Headline: "Your trotro is waiting." — large, bold, white
3. Subline: "Free. No download. Play in your browser." — `$text-secondary`
4. "Play Now" button — solid `$accent`

### UX Details
- Content fades in from left on scroll
- Button has subtle pulse/glow animation on idle (`box-shadow` pulse from `0 0 0 0 rgba($accent, 0.4)` to `0 0 0 8px rgba($accent, 0)` over 2s, disabled via `prefers-reduced-motion`)
- Right side: Amelia character and trotro fill the space naturally from the screenshot

### Mobile
- Background repositioned (`object-position`) to keep character visible
- Content centered instead of left-aligned
- Full-width button

---

## Section 6: Redesigned Simple Footer

### Layout
- Background: `$bg-card`
- Thin top border: `$border-default`
- Single row, three columns:
  - **Left:** Game logo (small) + "2026 Salifu & Master"
  - **Center:** Horizontal links — About, How to Play, Characters, Cities, Privacy, Terms — `$text-secondary`, hover to white
  - **Right:** Social icon (Twitter/X)
- Below row: thin divider, then "Made with pancakes" centered in `$text-tertiary`

### UX Details
- Compact: ~120px max height
- Link hover: same underline-slide-in as nav
- No sticky behavior, no back-to-top

### Mobile
- Stacks vertically: logo top, links (2-column grid) middle, social + tagline bottom

---

## Type Definitions

All new types go under `src/types/` per project conventions.

### `src/types/features-carousel.ts`
```typescript
export interface FeatureCardData {
  key: string;
  image: string;
  titleKey: string;
  descriptionKey: string;
}

export interface FeatureCardProps {
  data: FeatureCardData;
  isActive: boolean;
}

export interface CarouselControlsProps {
  total: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}
```

### `src/types/screenshot-gallery.ts`
```typescript
export interface ScreenshotItem {
  src: string;
  alt: string;
  variant: "desktop" | "mobile";
}

export interface ScreenshotGridProps {
  screenshots: ScreenshotItem[];
}

export interface PhoneMockupProps {
  screenshots: ScreenshotItem[];
}
```

### `src/types/lightbox.ts`
```typescript
export interface LightboxProps {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}
```

---

## Components to Create/Modify

### New Components

**Features Carousel** (split to respect 250-line limit):
- `src/components/features-carousel/features-carousel.tsx` — orchestrator: state, auto-advance timer, layout
- `src/components/features-carousel/feature-card.tsx` — individual card: image, title/description overlay, parallax hover
- `src/components/features-carousel/carousel-controls.tsx` — left/right arrows + dot indicators

**Screenshot Gallery** (split to respect 250-line limit):
- `src/components/screenshot-gallery/screenshot-gallery.tsx` — orchestrator: layout, lightbox state
- `src/components/screenshot-gallery/screenshot-grid.tsx` — desktop 3-column grid with hover effects
- `src/components/screenshot-gallery/phone-mockup.tsx` — mobile screenshots in phone frame treatment

**Lightbox:**
- `src/components/lightbox/lightbox.tsx` — full-screen image viewer overlay with keyboard nav

### Modified Components
- `src/components/nav/nav.tsx` — rebuild with FC 25 sticky behavior, scroll spy, backdrop blur
- `src/components/hero/hero.tsx` — rebuild as full-bleed cinematic hero
- `src/components/cta-banner/cta-banner.tsx` — rebuild as full-width image CTA
- `src/components/footer/footer.tsx` — rebuild as compact three-column layout
- `src/app/[locale]/page.tsx` — replace section composition

### Removed from Homepage
These components remain in the codebase (used on sub-pages) but are removed from the homepage:
- `game-concept` — replaced by features carousel
- `in-game-screenshots` — replaced by screenshot gallery
- `characters` — removed (can add back later)
- `cities-showcase` — removed (separate page exists)
- `routes-section` — absorbed into features carousel
- `features` — absorbed into features carousel
- `how-to-play` — removed from homepage (separate page exists)
- `gameplay-showcase` — replaced by screenshot gallery

### Constants Updates

Add to `src/lib/constants.ts`:

```typescript
// Renamed screenshot paths
export const DESKTOP_SCREENSHOT_SRC = {
  shopIvecoDaily: "/screenshots/desktop-in-game/shop-iveco-daily.png",
  shopHyundaiCounty: "/screenshots/desktop-in-game/shop-hyundai-county.png",
  shopToyotaHiace: "/screenshots/desktop-in-game/shop-toyota-hiace.png",
  shopPeugeotJ5: "/screenshots/desktop-in-game/shop-peugeot-j5.png",
  shopRenaultEstafette: "/screenshots/desktop-in-game/shop-renault-estafette.png",
  gameplaySunsetDriving: "/screenshots/desktop-in-game/gameplay-sunset-driving.png",
  gameplayIntersection: "/screenshots/desktop-in-game/gameplay-intersection.png",
  gameplayPeugeotSide: "/screenshots/desktop-in-game/gameplay-peugeot-side.png",
  passengerPickup: "/screenshots/desktop-in-game/passenger-pickup.png",
};

export const MOBILE_SCREENSHOT_SRC = {
  masterKofiDialogue: "/screenshots/mobile-in-game/master-kofi-dialogue.png",
  ameliaDialogue: "/screenshots/mobile-in-game/amelia-dialogue.png",
  goScreen: "/screenshots/mobile-in-game/go-screen.png",
  mobileDriving: "/screenshots/mobile-in-game/mobile-driving.png",
  mobileDrivingCloseup: "/screenshots/mobile-in-game/mobile-driving-closeup.png",
};

export const FEATURE_CAROUSEL_KEYS = [
  "trotroShop",
  "routes",
  "crew",
  "hustle",
  "upgrade",
] as const;

export const FEATURE_CAROUSEL_DATA: Record<
  (typeof FEATURE_CAROUSEL_KEYS)[number],
  { image: string }
> = {
  trotroShop: { image: DESKTOP_SCREENSHOT_SRC.shopHyundaiCounty },
  routes: { image: DESKTOP_SCREENSHOT_SRC.gameplaySunsetDriving },
  crew: { image: MOBILE_SCREENSHOT_SRC.masterKofiDialogue },
  hustle: { image: DESKTOP_SCREENSHOT_SRC.passengerPickup },
  upgrade: { image: DESKTOP_SCREENSHOT_SRC.shopToyotaHiace },
};

export const GALLERY_DESKTOP_SCREENSHOTS = [
  DESKTOP_SCREENSHOT_SRC.gameplaySunsetDriving,
  DESKTOP_SCREENSHOT_SRC.gameplayIntersection,
  DESKTOP_SCREENSHOT_SRC.gameplayPeugeotSide,
  DESKTOP_SCREENSHOT_SRC.passengerPickup,
  DESKTOP_SCREENSHOT_SRC.shopRenaultEstafette,
  DESKTOP_SCREENSHOT_SRC.shopPeugeotJ5,
];

export const GALLERY_MOBILE_SCREENSHOTS = [
  MOBILE_SCREENSHOT_SRC.mobileDriving,
  MOBILE_SCREENSHOT_SRC.masterKofiDialogue,
  MOBILE_SCREENSHOT_SRC.goScreen,
];

export const CTA_BANNER_BG_SRC = MOBILE_SCREENSHOT_SRC.ameliaDialogue;
```

### i18n Key Structure

Add to `messages/en.json`:

```json
{
  "FeaturesCarousel": {
    "trotroShop": {
      "title": "The Trotro Shop",
      "description": "Browse and buy trotros — from the classic Peugeot J5 to the Hyundai County. Each vehicle has unique capacity, speed, and master's cut stats."
    },
    "routes": {
      "title": "Real Ghanaian Routes",
      "description": "Drive actual routes across Accra, Kumasi, and Cape Coast. 14 routes with real street names and landmarks."
    },
    "crew": {
      "title": "Meet the Crew",
      "description": "Master Kofi runs the show. Amelia sells jollof. Serwaa keeps you sharp. Every character shapes your journey."
    },
    "hustle": {
      "title": "Hustle & Survive",
      "description": "Pick up passengers, manage your resources, dodge traffic. Every route is a test of skill and timing."
    },
    "upgrade": {
      "title": "Upgrade & Compete",
      "description": "Earn money, unlock better trotros, climb the leaderboard. Your fleet is your legacy."
    }
  },
  "ScreenshotGallery": {
    "sectionTitle": "See It In Action"
  },
  "CtaBanner": {
    "headline": "Your trotro is waiting.",
    "subline": "Free. No download. Play in your browser.",
    "cta": "Play Now"
  },
  "Hero": {
    "tagline": "Pick up passengers. Make your sales. Survive the streets.",
    "playNow": "Play Now",
    "learnMore": "Learn More",
    "subtext": "Free. No download. Play in your browser."
  },
  "Footer": {
    "madeWith": "Made with pancakes"
  }
}
```

### Image Loading Strategy

- **Hero background image + logo:** Use `priority` prop on Next.js `Image` component (above the fold)
- **Features carousel active card:** Use `priority` for first card, `loading="lazy"` for remaining
- **Screenshot gallery:** All `loading="lazy"`
- **CTA banner background:** `loading="lazy"`
- All large images: use Next.js `Image` with `fill` + `sizes` attribute for responsive optimization

---

## Design Tokens (No Changes)

All existing variables in `$_variables.scss` are sufficient. No new colors or tokens needed.

---

## Animations Summary

| Element | Animation | Trigger |
|---------|-----------|---------|
| Nav background | Transparent -> solid + blur | Scroll past hero |
| Hero content | Staggered fade-in + slide up | Page load |
| Hero background | Ken Burns slow zoom | Continuous |
| Carousel cards | Horizontal slide + scale | Auto/manual navigation |
| Carousel images | Subtle parallax shift | Hover |
| Gallery images | Scale up + shadow lift | Hover |
| Gallery lightbox | Fade in backdrop + scale image | Click |
| CTA content | Fade in from left | Scroll into view |
| CTA button | Subtle pulse/glow | Idle |
| All sections | Fade-in reveal | Scroll (ScrollReveal) |

---

## Pages Affected

- **Homepage (`/[locale]/`)** — full redesign
- **All sub-pages** — nav and footer changes propagate automatically (shared components)
- **Sub-page content** — unchanged
