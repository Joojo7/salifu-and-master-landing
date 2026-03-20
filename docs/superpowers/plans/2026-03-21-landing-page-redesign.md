# Landing Page Redesign (FC 25 Style) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Salifu & Master landing page homepage to follow the EA SPORTS FC 25 wireframe — cinematic hero, features carousel, screenshot gallery, full-width CTA, redesigned nav and footer.

**Architecture:** Server components by default (Next.js App Router), client components only where interactivity is needed (nav, carousel, lightbox). SCSS Modules for styling, Bootstrap utilities for layout. Constants-driven data, i18n via next-intl.

**Tech Stack:** Next.js 16 (App Router), TypeScript, SCSS Modules, Bootstrap 5, next-intl

**Spec:** `docs/superpowers/specs/2026-03-21-landing-page-redesign-design.md`

---

## File Map

### New Files
| File | Responsibility |
|------|---------------|
| `src/types/features-carousel.ts` | Types for carousel components |
| `src/types/screenshot-gallery.ts` | Types for gallery components |
| `src/types/lightbox.ts` | Types for lightbox component |
| `src/components/features-carousel/features-carousel.tsx` | Carousel orchestrator (client) |
| `src/components/features-carousel/features-carousel.module.scss` | Carousel styles |
| `src/components/features-carousel/feature-card.tsx` | Individual feature card |
| `src/components/features-carousel/feature-card.module.scss` | Card styles |
| `src/components/features-carousel/carousel-controls.tsx` | Arrows + dots |
| `src/components/features-carousel/carousel-controls.module.scss` | Controls styles |
| `src/components/screenshot-gallery/screenshot-gallery.tsx` | Gallery orchestrator (client) |
| `src/components/screenshot-gallery/screenshot-gallery.module.scss` | Gallery styles |
| `src/components/screenshot-gallery/screenshot-grid.tsx` | Desktop screenshot grid |
| `src/components/screenshot-gallery/screenshot-grid.module.scss` | Grid styles |
| `src/components/screenshot-gallery/phone-mockup.tsx` | Mobile screenshots in frames |
| `src/components/screenshot-gallery/phone-mockup.module.scss` | Phone frame styles |
| `src/components/lightbox/lightbox.tsx` | Fullscreen image overlay (client) |
| `src/components/lightbox/lightbox.module.scss` | Lightbox styles |

### Modified Files
| File | Changes |
|------|---------|
| `src/lib/constants.ts` | Add screenshot paths, carousel data, gallery arrays |
| `messages/en.json` | Add FeaturesCarousel, ScreenshotGallery, updated Hero/CtaBanner/Footer keys |
| `src/components/nav/nav.tsx` | Rebuild with homepage transparent/solid behavior, backdrop blur |
| `src/components/nav/nav.module.scss` | New styles for transparent/scrolled states |
| `src/components/hero/hero.tsx` | Full-bleed cinematic hero with two CTAs |
| `src/components/hero/hero.module.scss` | Ken Burns, staggered fade-in, vignette |
| `src/components/cta-banner/cta-banner.tsx` | Full-width image background with left-aligned content |
| `src/components/cta-banner/cta-banner.module.scss` | Image CTA styles, pulse animation |
| `src/components/footer/footer.tsx` | Three-column compact layout |
| `src/components/footer/footer.module.scss` | New footer styles |
| `src/app/[locale]/page.tsx` | Replace all homepage sections |

### Screenshot Renames
Rename files in `/public/screenshots/desktop-in-game/` and `/public/screenshots/mobile-in-game/` from `Screenshot 2026-...` to kebab-case names.

---

## Task 1: Rename Screenshot Files

**Files:**
- Modify: `/public/screenshots/desktop-in-game/` (9 files)
- Modify: `/public/screenshots/mobile-in-game/` (5 files)

- [ ] **Step 1: Rename desktop screenshots**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing/public/screenshots/desktop-in-game
mv "Screenshot 2026-03-20 at 3.01.24 PM.png" "shop-iveco-daily.png"
mv "Screenshot 2026-03-20 at 3.03.20 PM.png" "shop-hyundai-county.png"
mv "Screenshot 2026-03-20 at 3.03.58 PM.png" "shop-toyota-hiace.png"
mv "Screenshot 2026-03-20 at 3.04.14 PM.png" "shop-peugeot-j5.png"
mv "Screenshot 2026-03-20 at 3.04.29 PM.png" "shop-renault-estafette.png"
mv "Screenshot 2026-03-20 at 4.10.08 PM.png" "gameplay-sunset-driving.png"
mv "Screenshot 2026-03-20 at 4.13.28 PM.png" "gameplay-intersection.png"
mv "Screenshot 2026-03-20 at 4.22.45 PM.png" "gameplay-peugeot-side.png"
mv "Screenshot 2026-03-20 at 4.55.36 PM.png" "passenger-pickup.png"
```

- [ ] **Step 2: Rename mobile screenshots**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing/public/screenshots/mobile-in-game
mv "Screenshot 2026-03-21 at 12.01.40 AM.png" "master-kofi-dialogue.png"
mv "Screenshot 2026-03-21 at 12.01.51 AM.png" "amelia-dialogue.png"
mv "Screenshot 2026-03-21 at 12.02.01 AM.png" "go-screen.png"
mv "Screenshot 2026-03-21 at 12.03.24 AM.png" "mobile-driving.png"
mv "Screenshot 2026-03-21 at 12.05.27 AM.png" "mobile-driving-closeup.png"
```

- [ ] **Step 3: Verify renames**

```bash
ls public/screenshots/desktop-in-game/ && ls public/screenshots/mobile-in-game/
```

Expected: All kebab-case filenames, no spaces in names.

---

## Task 2: Add Constants and Types

**Files:**
- Modify: `src/lib/constants.ts`
- Create: `src/types/features-carousel.ts`
- Create: `src/types/screenshot-gallery.ts`
- Create: `src/types/lightbox.ts`

- [ ] **Step 1: Add screenshot constants to `src/lib/constants.ts`**

Append after the existing `FOOTER_LINK_DATA` constant (line 133):

```typescript
// New screenshot assets
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
  { src: DESKTOP_SCREENSHOT_SRC.gameplaySunsetDriving, alt: "Driving through the city at sunset" },
  { src: DESKTOP_SCREENSHOT_SRC.gameplayIntersection, alt: "Navigating a busy intersection" },
  { src: DESKTOP_SCREENSHOT_SRC.gameplayPeugeotSide, alt: "Peugeot J5 on the open road" },
  { src: DESKTOP_SCREENSHOT_SRC.passengerPickup, alt: "Picking up passengers at a stop" },
  { src: DESKTOP_SCREENSHOT_SRC.shopRenaultEstafette, alt: "Renault Estafette in the shop" },
  { src: DESKTOP_SCREENSHOT_SRC.shopPeugeotJ5, alt: "Peugeot J5 stats and pricing" },
];

export const GALLERY_MOBILE_SCREENSHOTS = [
  { src: MOBILE_SCREENSHOT_SRC.mobileDriving, alt: "Mobile gameplay on Coastal Road" },
  { src: MOBILE_SCREENSHOT_SRC.masterKofiDialogue, alt: "Master Kofi giving instructions" },
  { src: MOBILE_SCREENSHOT_SRC.goScreen, alt: "GO! Round starting" },
];

export const HERO_BG_SRC = DESKTOP_SCREENSHOT_SRC.gameplaySunsetDriving;
export const CTA_BANNER_BG_SRC = MOBILE_SCREENSHOT_SRC.ameliaDialogue;
```

- [ ] **Step 2: Create `src/types/features-carousel.ts`**

```typescript
export interface FeatureCardData {
  key: string;
  image: string;
}

export interface FeatureCardProps {
  data: FeatureCardData;
  isActive: boolean;
  title: string;
  description: string;
}

export interface CarouselControlsProps {
  total: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}
```

- [ ] **Step 3: Create `src/types/screenshot-gallery.ts`**

```typescript
export interface ScreenshotItem {
  src: string;
  alt: string;
}

export interface ScreenshotGridProps {
  screenshots: ScreenshotItem[];
  onImageClick: (index: number) => void;
}

export interface PhoneMockupProps {
  screenshots: ScreenshotItem[];
  onImageClick: (index: number) => void;
  indexOffset: number;
}
```

- [ ] **Step 4: Create `src/types/lightbox.ts`**

```typescript
export interface LightboxProps {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}
```

- [ ] **Step 5: Verify TypeScript compiles**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing && npx tsc --noEmit
```

Expected: No type errors.

---

## Task 3: Update i18n Messages

**Files:**
- Modify: `messages/en.json`

- [ ] **Step 1: Add new i18n keys**

Add `FeaturesCarousel` and `ScreenshotGallery` top-level keys. Update existing `Hero`, `CtaBanner`, and `Footer` keys.

Add after `"InGameScreenshots"` section (around line 68):

```json
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
```

Update the existing `"Hero"` section (lines 16-20) to:

```json
"Hero": {
  "title": "Salifu & Master",
  "tagline": "Pick up passengers. Make your sales. Survive the streets.",
  "playNow": "Play Now",
  "learnMore": "Learn More",
  "subtext": "Free. No download. Play in your browser.",
  "playCta": "Play Now"
},
```

The existing `"CtaBanner"` (lines 326-330) and `"Footer"` (lines 512-527) keys already match the spec. No changes needed for those.

---

## Task 4: Rebuild Navigation

**Files:**
- Modify: `src/components/nav/nav.tsx`
- Modify: `src/components/nav/nav.module.scss`

- [ ] **Step 1: Rewrite `src/components/nav/nav.tsx`**

Replace entire file with:

```typescript
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { NAV_PAGE_LINKS, NAV_LOGO_SRC, GAME_URL } from "@/lib/constants";
import styles from "./nav.module.scss";

export function Nav() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [scrolled, setScrolled] = useState(!isHomePage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href={`/${locale}`} className={styles.logo}>
          <Image
            src={NAV_LOGO_SRC}
            alt={t("logo")}
            width={80}
            height={30}
            className={styles.logoImage}
          />
        </a>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <button
            className={styles.close}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {NAV_PAGE_LINKS.map((link) => (
            <a
              key={link.href}
              href={`/${locale}${link.href}`}
              className={styles.link}
              onClick={handleLinkClick}
            >
              {t(link.key)}
            </a>
          ))}
          <a
            href={GAME_URL}
            className={styles.cta}
            onClick={handleLinkClick}
          >
            {t("play")}
          </a>
        </div>

        <a href={GAME_URL} className={styles.ctaMobile}>
          {t("play")}
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Rewrite `src/components/nav/nav.module.scss`**

Replace entire file. Key changes: transparent default, solid on scroll, backdrop blur, underline hover animation, mobile CTA button always visible.

```scss
@use "../../styles/variables" as *;

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: background-color 200ms ease, backdrop-filter 200ms ease;
}

.scrolled {
  background-color: rgba($bg-base, 0.9);
  backdrop-filter: blur(12px);
}

.logo {
  text-decoration: none;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.8;
  }
}

.logoImage {
  width: 80px;
  height: auto;
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.link {
  color: $text-secondary;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  position: relative;
  transition: color 200ms ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $accent;
    transition: width 200ms ease;
  }

  &:hover {
    color: $text-primary;

    &::after {
      width: 100%;
    }
  }
}

.cta {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background-color: $accent;
  color: $bg-base;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.875rem;
  border-radius: 100px;
  transition: background-color 200ms ease;

  &:hover {
    background-color: $accent-hover;
  }
}

.ctaMobile {
  display: none;
}

.close {
  display: none;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: $text-primary;
    transition: transform 200ms ease, opacity 200ms ease;
  }

  &.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}

@media (max-width: 767.98px) {
  .links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    background-color: $bg-base;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 300ms ease;
    z-index: 1001;

    &.open {
      right: 0;
    }
  }

  .link {
    font-size: 1.25rem;
  }

  .cta {
    font-size: 1rem;
    padding: 0.75rem 2rem;
  }

  .ctaMobile {
    display: inline-block;
    padding: 0.375rem 1rem;
    background-color: $accent;
    color: $bg-base;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.75rem;
    border-radius: 100px;
    margin-right: 0.75rem;
  }

  .close {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: $text-primary;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .hamburger {
    display: flex;
  }
}
```

- [ ] **Step 3: Verify nav renders**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing && npm run build
```

Expected: Build succeeds.

---

## Task 5: Rebuild Hero

**Files:**
- Modify: `src/components/hero/hero.tsx`
- Modify: `src/components/hero/hero.module.scss`

- [ ] **Step 1: Rewrite `src/components/hero/hero.tsx`**

```typescript
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { LOGO_SRC, HERO_BG_SRC, GAME_URL } from "@/lib/constants";
import styles from "./hero.module.scss";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap}>
        <Image
          src={HERO_BG_SRC}
          alt=""
          fill
          className={styles.bgImage}
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay} />

      <div className={`${styles.content} text-center`}>
        <h1 className={styles.logoWrap}>
          <Image
            src={LOGO_SRC}
            alt={t("title")}
            width={400}
            height={150}
            className={styles.logoImage}
            priority
          />
        </h1>
        <p className={styles.tagline}>{t("tagline")}</p>
        <div className={styles.buttons}>
          <a href={GAME_URL} className={styles.playBtn}>
            {t("playNow")}
          </a>
          <a href="#features" className={styles.learnBtn}>
            {t("learnMore")}
          </a>
        </div>
        <p className={styles.subtext}>{t("subtext")}</p>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.chevron} />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Rewrite `src/components/hero/hero.module.scss`**

```scss
@use "../../styles/variables" as *;

.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bgWrap {
  position: absolute;
  inset: 0;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    animation: kenBurns 10s ease-in-out infinite alternate;
  }
}

.bgImage {
  object-fit: cover;
  object-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  box-shadow: inset 0 0 150px 60px rgba(0, 0, 0, 0.5);
}

.content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.logoWrap {
  margin: 0;
  animation: fadeSlideUp 600ms ease-out both;
}

.logoImage {
  width: clamp(240px, 30vw, 400px);
  height: auto;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));
}

.tagline {
  color: $text-primary;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  letter-spacing: 0.05em;
  max-width: 500px;
  animation: fadeSlideUp 600ms ease-out 200ms both;
}

.buttons {
  display: flex;
  gap: 1rem;
  animation: fadeSlideUp 600ms ease-out 400ms both;
}

.playBtn {
  display: inline-block;
  padding: 0.875rem 2.5rem;
  background-color: $accent;
  color: $bg-base;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 100px;
  transition: background-color 200ms ease, transform 150ms ease;

  &:hover {
    background-color: $accent-hover;
    transform: scale(1.02);
  }
}

.learnBtn {
  display: inline-block;
  padding: 0.875rem 2.5rem;
  background-color: transparent;
  color: $text-primary;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 100px;
  border: 2px solid rgba($text-primary, 0.5);
  transition: border-color 200ms ease, transform 150ms ease;

  &:hover {
    border-color: $text-primary;
    transform: scale(1.02);
  }
}

.subtext {
  color: $text-secondary;
  font-size: 0.875rem;
  animation: fadeSlideUp 600ms ease-out 600ms both;
}

.scrollHint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: fadeSlideUp 600ms ease-out 800ms both;
}

.chevron {
  display: block;
  width: 24px;
  height: 24px;
  border-right: 2px solid $text-secondary;
  border-bottom: 2px solid $text-secondary;
  transform: rotate(45deg);
  animation: bounce 2s ease-in-out infinite;
}

@keyframes kenBurns {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(8px); }
}

@media (max-width: 767.98px) {
  .buttons {
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
  }

  .playBtn,
  .learnBtn {
    text-align: center;
  }

  .bgImage {
    object-position: 60% center;
  }
}
```

- [ ] **Step 3: Verify hero renders**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing && npm run build
```

---

## Task 6: Build Features Carousel

**Files:**
- Create: `src/components/features-carousel/feature-card.tsx`
- Create: `src/components/features-carousel/feature-card.module.scss`
- Create: `src/components/features-carousel/carousel-controls.tsx`
- Create: `src/components/features-carousel/carousel-controls.module.scss`
- Create: `src/components/features-carousel/features-carousel.tsx`
- Create: `src/components/features-carousel/features-carousel.module.scss`

- [ ] **Step 1: Create `src/components/features-carousel/feature-card.tsx`**

```typescript
import Image from "next/image";
import { FeatureCardProps } from "@/types/features-carousel";
import styles from "./feature-card.module.scss";

export function FeatureCard({ data, isActive, title, description }: FeatureCardProps) {
  return (
    <div className={`${styles.card} ${isActive ? styles.active : ""}`}>
      <div className={styles.imageWrap}>
        <Image
          src={data.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className={styles.image}
          loading={isActive ? undefined : "lazy"}
          priority={isActive}
        />
        <div className={styles.gradient} />
      </div>
      <div className={styles.textOverlay}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/features-carousel/feature-card.module.scss`**

```scss
@use "../../styles/variables" as *;

.card {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 500ms ease, transform 500ms ease;
  pointer-events: none;

  &.active {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }
}

.imageWrap {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: $radius-lg;
  overflow: hidden;
}

.image {
  object-fit: cover;
  transition: transform 300ms ease;

  .card:hover & {
    transform: scale(1.02);
  }
}

.gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.3) 40%,
    transparent 70%
  );
}

.textOverlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  z-index: 1;
}

.title {
  color: $text-primary;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.description {
  color: $text-secondary;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  max-width: 500px;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 767.98px) {
  .textOverlay {
    position: relative;
    padding: 1.25rem 0 0;
  }

  .gradient {
    display: none;
  }

  .imageWrap {
    height: 56.25vw;
  }

  .card {
    position: absolute;
    inset: 0;
  }
}
```

- [ ] **Step 3: Create `src/components/features-carousel/carousel-controls.tsx`**

```typescript
import { CarouselControlsProps } from "@/types/features-carousel";
import styles from "./carousel-controls.module.scss";

export function CarouselControls({
  total,
  activeIndex,
  onPrev,
  onNext,
  onDotClick,
}: CarouselControlsProps) {
  return (
    <>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={onPrev}
        aria-label="Previous feature"
      >
        ‹
      </button>
      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={onNext}
        aria-label="Next feature"
      >
        ›
      </button>
      <div className={styles.dots}>
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
            onClick={() => onDotClick(i)}
            aria-label={`Go to feature ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
```

- [ ] **Step 4: Create `src/components/features-carousel/carousel-controls.module.scss`**

```scss
@use "../../styles/variables" as *;

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgba($bg-base, 0.6);
  border: 1px solid $border-default;
  color: $text-primary;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 200ms ease;

  &:hover {
    background: rgba($bg-base, 0.9);
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }
}

.dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: $border-hover;
  cursor: pointer;
  transition: background-color 200ms ease, transform 200ms ease;

  &:hover {
    background-color: $text-secondary;
  }
}

.activeDot {
  background-color: $accent;
  transform: scale(1.2);
}

@media (max-width: 767.98px) {
  .arrow {
    display: none;
  }

  .dots {
    margin-top: 1rem;
  }
}
```

- [ ] **Step 5: Create `src/components/features-carousel/features-carousel.tsx`**

```typescript
"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { FEATURE_CAROUSEL_KEYS, FEATURE_CAROUSEL_DATA } from "@/lib/constants";
import { FeatureCard } from "./feature-card";
import { CarouselControls } from "./carousel-controls";
import styles from "./features-carousel.module.scss";

const AUTO_ADVANCE_MS = 6000;

export function FeaturesCarousel() {
  const t = useTranslations("FeaturesCarousel");
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = FEATURE_CAROUSEL_KEYS.length;

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  const cards = FEATURE_CAROUSEL_KEYS.map((key) => ({
    key,
    image: FEATURE_CAROUSEL_DATA[key].image,
  }));

  return (
    <section
      id="features"
      className={styles.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.carouselWrap}>
        <div className={styles.cardContainer}>
          {cards.map((card, index) => (
            <FeatureCard
              key={card.key}
              data={card}
              isActive={index === activeIndex}
              title={t(`${card.key}.title`)}
              description={t(`${card.key}.description`)}
            />
          ))}
        </div>
        <CarouselControls
          total={total}
          activeIndex={activeIndex}
          onPrev={goPrev}
          onNext={goNext}
          onDotClick={setActiveIndex}
        />
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create `src/components/features-carousel/features-carousel.module.scss`**

```scss
@use "../../styles/variables" as *;

.section {
  background-color: $bg-base;
  padding: $section-py 0;

  @media (max-width: 767.98px) {
    padding: $section-py-mobile 0;
  }
}

.carouselWrap {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

.cardContainer {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  @media (max-width: 767.98px) {
    aspect-ratio: auto;
    min-height: 420px;
  }
}
```

- [ ] **Step 7: Verify carousel builds**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing && npm run build
```

---

## Task 7: Build Screenshot Gallery + Lightbox

**Files:**
- Create: `src/components/lightbox/lightbox.tsx`
- Create: `src/components/lightbox/lightbox.module.scss`
- Create: `src/components/screenshot-gallery/screenshot-grid.tsx`
- Create: `src/components/screenshot-gallery/screenshot-grid.module.scss`
- Create: `src/components/screenshot-gallery/phone-mockup.tsx`
- Create: `src/components/screenshot-gallery/phone-mockup.module.scss`
- Create: `src/components/screenshot-gallery/screenshot-gallery.tsx`
- Create: `src/components/screenshot-gallery/screenshot-gallery.module.scss`

- [ ] **Step 1: Create `src/components/lightbox/lightbox.tsx`**

```typescript
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { LightboxProps } from "@/types/lightbox";
import styles from "./lightbox.module.scss";

export function Lightbox({ images, activeIndex, onClose, onPrev, onNext }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      ref={dialogRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={onClose}
    >
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
        ✕
      </button>
      <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
        ‹
      </button>
      <div className={styles.imageWrap} onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[activeIndex]}
          alt=""
          fill
          sizes="90vw"
          className={styles.image}
        />
      </div>
      <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">
        ›
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/lightbox/lightbox.module.scss`**

```scss
@use "../../styles/variables" as *;

.overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 200ms ease;
  cursor: pointer;
}

.closeBtn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: $text-primary;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.7;
  }
}

.navBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba($bg-base, 0.5);
  border: 1px solid $border-default;
  color: $text-primary;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba($bg-base, 0.8);
  }
}

.prevBtn {
  left: 1.5rem;
}

.nextBtn {
  right: 1.5rem;
}

.imageWrap {
  position: relative;
  width: 90vw;
  height: 80vh;
  max-width: 1200px;
  cursor: default;
}

.image {
  object-fit: contain;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

- [ ] **Step 3: Create `src/components/screenshot-gallery/screenshot-grid.tsx`**

```typescript
import Image from "next/image";
import { ScreenshotGridProps } from "@/types/screenshot-gallery";
import styles from "./screenshot-grid.module.scss";

export function ScreenshotGrid({ screenshots, onImageClick }: ScreenshotGridProps) {
  return (
    <div className={styles.grid}>
      {screenshots.map((item, index) => (
        <button
          key={item.src}
          className={styles.item}
          onClick={() => onImageClick(index)}
          aria-label={`View ${item.alt}`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            loading="lazy"
            className={styles.image}
          />
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create `src/components/screenshot-gallery/screenshot-grid.module.scss`**

```scss
@use "../../styles/variables" as *;

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 767.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.item {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: $radius-md;
  overflow: hidden;
  cursor: pointer;
  border: none;
  padding: 0;
  background: none;
  transition: transform 300ms ease, box-shadow 300ms ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: $shadow-lg;
  }
}

.image {
  object-fit: cover;
}
```

- [ ] **Step 5: Create `src/components/screenshot-gallery/phone-mockup.tsx`**

```typescript
import Image from "next/image";
import { PhoneMockupProps } from "@/types/screenshot-gallery";
import styles from "./phone-mockup.module.scss";

export function PhoneMockup({ screenshots, onImageClick, indexOffset }: PhoneMockupProps) {
  return (
    <div className={styles.row}>
      {screenshots.map((item, index) => (
        <button
          key={item.src}
          className={styles.phone}
          onClick={() => onImageClick(indexOffset + index)}
          aria-label={`View ${item.alt}`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 40vw, 20vw"
            loading="lazy"
            className={styles.image}
          />
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 6: Create `src/components/screenshot-gallery/phone-mockup.module.scss`**

```scss
@use "../../styles/variables" as *;

.row {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 767.98px) {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 1rem;
    gap: 1rem;
    -webkit-overflow-scrolling: touch;
  }
}

.phone {
  position: relative;
  width: 180px;
  height: 360px;
  border-radius: 24px;
  border: 3px solid $border-hover;
  overflow: hidden;
  background: $bg-card;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: transform 300ms ease, box-shadow 300ms ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: $shadow-lg;
  }

  @media (max-width: 767.98px) {
    width: 150px;
    height: 300px;
  }
}

.image {
  object-fit: cover;
}
```

- [ ] **Step 7: Create `src/components/screenshot-gallery/screenshot-gallery.tsx`**

```typescript
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { GALLERY_DESKTOP_SCREENSHOTS, GALLERY_MOBILE_SCREENSHOTS } from "@/lib/constants";
import { ScreenshotGrid } from "./screenshot-grid";
import { PhoneMockup } from "./phone-mockup";
import { Lightbox } from "@/components/lightbox/lightbox";
import styles from "./screenshot-gallery.module.scss";

export function ScreenshotGallery() {
  const t = useTranslations("ScreenshotGallery");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = [
    ...GALLERY_DESKTOP_SCREENSHOTS.map((s) => s.src),
    ...GALLERY_MOBILE_SCREENSHOTS.map((s) => s.src),
  ];

  const handleClose = () => setLightboxIndex(null);
  const handlePrev = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + allImages.length) % allImages.length : null
    );
  const handleNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % allImages.length : null
    );

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.sectionTitle}>{t("sectionTitle")}</p>
        <ScreenshotGrid
          screenshots={GALLERY_DESKTOP_SCREENSHOTS}
          onImageClick={setLightboxIndex}
        />
        <PhoneMockup
          screenshots={GALLERY_MOBILE_SCREENSHOTS}
          onImageClick={setLightboxIndex}
          indexOffset={GALLERY_DESKTOP_SCREENSHOTS.length}
        />
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          activeIndex={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
```

- [ ] **Step 8: Create `src/components/screenshot-gallery/screenshot-gallery.module.scss`**

```scss
@use "../../styles/variables" as *;

.section {
  background-color: $bg-elevated;
  padding: $section-py 0;

  @media (max-width: 767.98px) {
    padding: $section-py-mobile 0;
  }
}

.sectionTitle {
  text-align: center;
  color: $text-secondary;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
}
```

- [ ] **Step 9: Verify gallery + lightbox build**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing && npm run build
```

---

## Task 8: Rebuild CTA Banner

**Files:**
- Modify: `src/components/cta-banner/cta-banner.tsx`
- Modify: `src/components/cta-banner/cta-banner.module.scss`

- [ ] **Step 1: Rewrite `src/components/cta-banner/cta-banner.tsx`**

```typescript
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GAME_URL, CTA_BANNER_BG_SRC, NAV_LOGO_SRC } from "@/lib/constants";
import styles from "./cta-banner.module.scss";

export async function CtaBanner() {
  const t = await getTranslations("CtaBanner");

  return (
    <section className={styles.banner}>
      <Image
        src={CTA_BANNER_BG_SRC}
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
        className={styles.bgImage}
      />
      <div className={styles.overlay} />

      <div className={`container position-relative ${styles.content}`}>
        <Image
          src={NAV_LOGO_SRC}
          alt="Salifu & Master"
          width={80}
          height={30}
          className={styles.logo}
        />
        <h2 className={styles.heading}>{t("heading")}</h2>
        <p className={styles.subtext}>{t("subtext")}</p>
        <a href={GAME_URL} className={styles.cta}>
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Rewrite `src/components/cta-banner/cta-banner.module.scss`**

```scss
@use "../../styles/variables" as *;

.banner {
  position: relative;
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.bgImage {
  object-fit: cover;
  object-position: right center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

.content {
  z-index: 1;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}

.logo {
  width: 80px;
  height: auto;
  margin-bottom: 0.5rem;
}

.heading {
  color: $text-primary;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin: 0;
}

.subtext {
  color: $text-secondary;
  font-size: 1rem;
  margin: 0;
}

.cta {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.875rem 2.5rem;
  background-color: $accent;
  color: $bg-base;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 100px;
  transition: background-color 200ms ease, transform 150ms ease;

  &:hover {
    background-color: $accent-hover;
    transform: scale(1.02);
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: pulse 2s ease-in-out infinite;
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba($accent, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba($accent, 0);
  }
}

@media (max-width: 767.98px) {
  .content {
    align-items: center;
    text-align: center;
  }

  .bgImage {
    object-position: center center;
  }

  .cta {
    width: 100%;
    text-align: center;
  }
}
```

- [ ] **Step 3: Verify CTA builds**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing && npm run build
```

---

## Task 9: Rebuild Footer

**Files:**
- Modify: `src/components/footer/footer.tsx`
- Modify: `src/components/footer/footer.module.scss`

- [ ] **Step 1: Rewrite `src/components/footer/footer.tsx`**

```typescript
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { FOOTER_LINK_DATA, SOCIAL_LINK_DATA, NAV_LOGO_SRC } from "@/lib/constants";
import styles from "./footer.module.scss";

export async function Footer() {
  const t = await getTranslations("Footer");
  const locale = await getLocale();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.brand}>
            <Image
              src={NAV_LOGO_SRC}
              alt={t("logo")}
              width={80}
              height={30}
              className={styles.logoImage}
            />
            <span className={styles.copyright}>
              {t("copyright", { year })}
            </span>
          </div>

          <div className={styles.navLinks}>
            {FOOTER_LINK_DATA.map((link) => (
              <a
                key={link.key}
                href={`/${locale}${link.href}`}
                className={styles.link}
              >
                {t(`links.${link.key}`)}
              </a>
            ))}
          </div>

          <div className={styles.social}>
            {SOCIAL_LINK_DATA.map((social) => (
              <a
                key={social.key}
                href={social.href}
                className={styles.socialLink}
                aria-label={t(`social.${social.key}`)}
              >
                {t(`social.${social.key}`)}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.divider} />
        <p className={styles.badge}>{t("badge")}</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Rewrite `src/components/footer/footer.module.scss`**

```scss
@use "../../styles/variables" as *;

.footer {
  background-color: $bg-card;
  border-top: 1px solid $border-default;
  padding: 1.5rem 0 1rem;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logoImage {
  width: 80px;
  height: auto;
}

.copyright {
  color: $text-tertiary;
  font-size: 0.75rem;
}

.navLinks {
  display: flex;
  gap: 1.5rem;
}

.link {
  color: $text-secondary;
  text-decoration: none;
  font-size: 0.8125rem;
  position: relative;
  transition: color 200ms ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: $accent;
    transition: width 200ms ease;
  }

  &:hover {
    color: $text-primary;

    &::after {
      width: 100%;
    }
  }
}

.social {
  display: flex;
  gap: 0.75rem;
}

.socialLink {
  color: $text-secondary;
  text-decoration: none;
  font-size: 0.8125rem;
  transition: color 200ms ease;

  &:hover {
    color: $accent;
  }
}

.divider {
  height: 1px;
  background-color: $border-default;
  margin: 1rem 0 0.75rem;
}

.badge {
  text-align: center;
  color: $text-tertiary;
  font-size: 0.6875rem;
  margin: 0;
}

@media (max-width: 767.98px) {
  .row {
    flex-direction: column;
    gap: 1.25rem;
    text-align: center;
  }

  .brand {
    flex-direction: column;
    gap: 0.5rem;
  }

  .navLinks {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 0.75rem 1.5rem;
    justify-content: center;
  }
}
```

---

## Task 10: Wire Up Homepage

**Files:**
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Rewrite `src/app/[locale]/page.tsx`**

```typescript
import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Hero } from "@/components/hero/hero";
import { FeaturesCarousel } from "@/components/features-carousel/features-carousel";
import { ScreenshotGallery } from "@/components/screenshot-gallery/screenshot-gallery";
import { CtaBanner } from "@/components/cta-banner/cta-banner";
import { Footer } from "@/components/footer/footer";
import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturesCarousel />
        <ScrollReveal>
          <ScreenshotGallery />
        </ScrollReveal>
        <ScrollReveal>
          <CtaBanner />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Full build verification**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing && npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 3: Dev server visual check**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing && npm run dev
```

Open `http://localhost:3000` and verify:
- Nav is transparent over hero, solid on scroll
- Hero shows gameplay background with logo, tagline, two buttons
- Features carousel auto-advances, arrows and dots work
- Screenshot gallery shows 3x2 grid + 3 phone mockups
- Clicking images opens lightbox, Escape closes it
- CTA banner shows Amelia background with left-aligned content
- Footer is compact three-column
- Mobile responsive on all sections
