# Content Pages for AdSense Approval

## Problem

Google AdSense rejects salifuandmaster.com for "ads on screens without publisher-content." The site is a single-page landing page, which Google considers thin content. Adding dedicated content pages gives Google the publisher-content needed for approval.

## Pages

### 1. `/how-to-play` — Gameplay Guide

- Hero section with page title and subtitle
- Expanded step-by-step walkthrough (pick a route, collect passengers, manage resources, make your target)
- Tips section: earning money, managing hunger/health/sanity, dealing with passengers
- Screenshots from existing gameplay-showcase and in-game-screenshots assets
- Play CTA at bottom

### 2. `/characters` — Character Profiles

- Hero section
- Individual character sections for all 5 characters (Salifu, Master Kofi, Serwaa, Amelia, Dr. Panie)
- Each section: portrait image, name, role, expanded backstory, how they help in gameplay
- Uses existing character portraits and accent colors from constants
- Play CTA at bottom

### 3. `/cities` — City Guides

- Hero section
- Expanded city sections for all 4 cities (Accra, Kumasi, Cape Coast, Tamale)
- Each section: city icon, description, notable routes, difficulty level, real-world cultural context
- Uses existing city icons from constants
- Play CTA at bottom

### 4. `/about` — About the Game

- What is Salifu & Master (game overview)
- The culture of trotros in Ghana (educational cultural context)
- Why we built this game
- Brief how-to-play summary linking to `/how-to-play`
- Play CTA at bottom

## Shared Components

- **PageHero** — Reusable hero banner (title + subtitle), used at top of each content page
- **PlayCta** — Reusable "Play Now" call-to-action section, used at bottom of each content page

## Navigation Updates

- Add links to new pages in Nav component (How to Play, Characters, Cities, About)
- Add links to new pages in Footer component

## AdSense

- Re-add `google-adsense-account` meta tag to layout.tsx since the site now has real content

## Technical Approach

- All pages are server components using `getTranslations()`
- All text content lives in `messages/en.json`
- Page routes: `src/app/[locale]/<page>/page.tsx`
- Follow existing patterns: Bootstrap grid, SCSS modules, constants for data
- Static export compatible (no dynamic data)

## No Changes To

- Existing homepage or its sections
- Existing components/styles
- i18n routing config
