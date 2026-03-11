# Content Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add 4 content pages (/how-to-play, /characters, /cities, /about) to the landing site for AdSense approval.

**Architecture:** Next.js App Router pages at `src/app/[locale]/<page>/page.tsx`. Server components using `getTranslations()`. All text in `messages/en.json`. Shared PageHero + PlayCta components. Bootstrap grid + SCSS modules.

**Tech Stack:** Next.js 16, React 19, next-intl, Bootstrap 5, SCSS modules, TypeScript

---

### Task 1: Add i18n content to messages/en.json

**Files:**
- Modify: `messages/en.json`

**Step 1: Add all new page content**

Add these new top-level keys to `messages/en.json`:

```json
"PageHero": {
  "playNow": "Play Now"
},
"HowToPlayPage": {
  "title": "How to Play",
  "subtitle": "Everything you need to know to start hustling",
  "metaDescription": "Learn how to play Salifu & Master. A complete guide to driving trotros, picking up passengers, managing resources, and making your daily sales.",
  "overview": {
    "title": "Game Overview",
    "description": "Salifu & Master is a trotro conductor simulation game set in Ghana. You play as Salifu, a mate (bus conductor) working under Master Kofi. Your job is to navigate real city routes, pick up passengers at stops, collect their fares, and make enough money to hit your daily sales target before time runs out. Each round lasts about 3 minutes, and every decision matters: do you spend your earnings on food to stay alive, visit Serwaa to keep your sanity, or save every pesewa for Master Kofi's cut?"
  },
  "steps": {
    "1": {
      "title": "Step 1: Pick a City and Route",
      "description": "Start by choosing one of the available cities: Accra, Kumasi, or Cape Coast. Each city has multiple routes based on real trotro corridors. Select a route and choose your difficulty level. Easier routes have lighter traffic and lower targets, while harder routes mean more passengers but tighter deadlines and more obstacles."
    },
    "2": {
      "title": "Step 2: Pick Up Passengers",
      "description": "As your trotro moves along the route, you will stop at real-world bus stops. Passengers appear at each stop waiting for a ride. Tap to pick them up and collect their fare. Each passenger pays a set amount, and your job is to fill the trotro and keep the money flowing. Watch for passengers heading to different destinations along your route."
    },
    "3": {
      "title": "Step 3: Manage Your Resources",
      "description": "You have three vital stats to manage: hunger, health, and sanity. Hunger drops as you work. If it hits zero, your health starts falling. Visit Amelia the food vendor to eat waakye or jollof and refill your hunger bar. If your health gets low, see Dr. Panie for treatment. And when the stress of the streets gets to you, visit your girlfriend Serwaa to restore your sanity. Each visit costs money, so budget wisely."
    },
    "4": {
      "title": "Step 4: Make Your Sales",
      "description": "Every day has a sales target set by Master Kofi. You need to earn enough from passenger fares to hit this target before time runs out. Master Kofi takes his cut from your earnings, so you need to earn more than the target to have anything left for yourself. Meet the target to complete the day. Beat the bonus target to earn extra stars and climb the leaderboard."
    }
  },
  "tips": {
    "title": "Pro Tips",
    "earning": {
      "title": "Earning More Money",
      "description": "Pick up every passenger you can. Longer routes have more stops and more earning potential. Choose harder difficulties for bigger payoffs. Upgrade your trotro to carry more passengers per trip."
    },
    "resources": {
      "title": "Managing Resources",
      "description": "Do not let any stat hit zero. Eat before your hunger gets critical because health drops faster once you are starving. Visit Serwaa between routes when your sanity is low. Dr. Panie is expensive, so prevention is cheaper than cure."
    },
    "strategy": {
      "title": "General Strategy",
      "description": "Start with easier routes to build up savings. Upgrade your trotro early for higher passenger capacity. Use Free Roam mode to learn routes without the pressure of a timer. Pay attention to which routes have the best fare-to-time ratio."
    }
  }
},
"CharactersPage": {
  "title": "Characters",
  "subtitle": "Meet the people of Salifu & Master",
  "metaDescription": "Meet the characters of Salifu & Master: Salifu the mate, Master Kofi the driver, Serwaa, Amelia the food vendor, and Dr. Panie.",
  "characters": {
    "salifu": {
      "name": "Salifu",
      "role": "The Mate",
      "backstory": "Salifu is a young trotro mate working the streets of Ghana's biggest cities. Every morning, he climbs into Master Kofi's trotro and hits the road, calling out destinations to passengers, collecting fares, and trying to make enough to survive another day. He is resourceful, quick on his feet, and knows every shortcut in the city. But the hustle is relentless: between the hunger, the heat, and Master Kofi's demands, it takes everything he has to keep going.",
      "gameplay": "Salifu is the player character. You control his actions throughout the day: which passengers to pick up, when to eat, when to rest, and how to spend your hard-earned cedis. Your decisions determine whether he thrives or barely survives."
    },
    "masterKofi": {
      "name": "Master Kofi",
      "role": "The Driver",
      "backstory": "Master Kofi has been driving trotros for over two decades. He owns the vehicle, he sets the routes, and he takes his cut from every day's earnings. He is tough but fair: hit your target and he will respect you. Fall short and you will hear about it. He has seen dozens of mates come and go, and he is not sentimental about it. The trotro business is business.",
      "gameplay": "Master Kofi sets your daily sales target and takes a percentage of your earnings as his cut. The trotro you drive belongs to him. Upgrade to a better vehicle and his cut changes. He is the constant pressure that drives the game forward."
    },
    "serwaa": {
      "name": "Serwaa",
      "role": "The Girlfriend",
      "backstory": "Serwaa is Salifu's girlfriend and his escape from the chaos of the streets. She lives near one of the stops on your route, and visiting her is the only way Salifu can decompress. She is patient, supportive, and understands the trotro life. But even her comfort comes at a cost: time and money that could be spent making sales.",
      "gameplay": "Visit Serwaa to restore your sanity stat. When the stress of the streets gets too much, she is your lifeline. But each visit costs cedis and time, so you need to balance your mental health against your wallet."
    },
    "amelia": {
      "name": "Amelia",
      "role": "The Food Vendor",
      "backstory": "Amelia runs a roadside food stall near the trotro route. She sells waakye, jollof rice, and other Ghanaian staples to the drivers and mates who pass by every day. She knows everyone by name and always has a warm meal ready. For Salifu, she is the difference between making it through the day and collapsing from hunger.",
      "gameplay": "Amelia sells food that restores your hunger stat. Different meals cost different amounts and restore different levels of hunger. Visit her before your hunger drops too low because once you start starving, your health drops rapidly."
    },
    "drPanie": {
      "name": "Dr. Panie",
      "role": "The Doctor",
      "backstory": "Dr. Panie runs a small clinic near the trotro routes. He has seen every injury the streets can dish out: heat exhaustion, accidents, fights, and the general wear and tear of life as a trotro mate. He is competent and no-nonsense, and his prices reflect the fact that he is the only option when your health is failing.",
      "gameplay": "Dr. Panie restores your health stat. His services are the most expensive of the three NPCs, so it is better to manage your hunger and avoid health emergencies. But when your health is critical, he is the only one who can save your run."
    }
  }
},
"CitiesPage": {
  "title": "Cities of Ghana",
  "subtitle": "Explore the real cities behind the game",
  "metaDescription": "Explore the cities of Salifu & Master: Accra, Kumasi, Cape Coast, and Tamale. Real Ghanaian trotro routes brought to life.",
  "cities": {
    "accra": {
      "name": "Greater Accra",
      "description": "Accra is the capital and largest city of Ghana, home to over 4 million people. The Greater Accra region is the beating heart of the country's trotro network, with thousands of minibuses crisscrossing the city every day. From the chaos of Kaneshie Market to the university crowds at Legon, every route tells a different story.",
      "routes": "8 routes available including Madina to Tema, Lapaz to Achimota, Kasoa to Mallam, and more. Each route follows real roads and stops through Accra's busiest corridors.",
      "culture": "Accra is a city of contrasts: modern high-rises next to traditional markets, busy motorways alongside quiet residential streets. The trotro system is the lifeline that connects it all, carrying millions of commuters daily."
    },
    "kumasi": {
      "name": "Kumasi",
      "description": "Kumasi is Ghana's second-largest city and the cultural capital of the Ashanti Kingdom. Known as the Garden City, it is famous for Kejetia Market, one of the largest open-air markets in West Africa. The city's trotro routes weave through historic neighborhoods, past the Manhyia Palace, and through bustling commercial districts.",
      "routes": "1 route currently available, with more coming soon. Explore the heart of Ashanti country from behind the trotro window.",
      "culture": "Kumasi is the seat of the Ashanti king and a center of traditional Ghanaian culture. The kente cloth you see everywhere originated here. The city moves at its own rhythm, different from Accra but just as intense."
    },
    "capeCost": {
      "name": "Cape Coast",
      "description": "Cape Coast is a historic city on Ghana's central coastline. Once the capital of the Gold Coast colony, it is now known for its castle, its university, and its stunning coastal scenery. The trotro routes here pass by fishing harbours, colonial-era architecture, and winding hillside roads with ocean views.",
      "routes": "5 routes available. Drive along the coast, through the university district, and past Cape Coast Castle. The routes here are scenic but challenging with narrow roads and steep hills.",
      "culture": "Cape Coast is a city steeped in history. Cape Coast Castle, a UNESCO World Heritage Site, stands as a reminder of the transatlantic slave trade. Today the city is a vibrant mix of fishing communities, students, and tourists drawn to its history and beaches."
    },
    "tamale": {
      "name": "Tamale",
      "description": "Tamale is the capital of Ghana's Northern Region and the fastest-growing city in the country. Located in the savannah, it has a completely different feel from the southern cities: dusty roads, wide open spaces, and a culture shaped by the traditions of the Dagomba people.",
      "routes": "Routes coming soon. Tamale will introduce new challenges with its unique terrain and driving conditions.",
      "culture": "Tamale is the gateway to northern Ghana. The city is known for its vibrant markets, the Tamale Stadium, and the annual Damba festival. Life moves differently here, and so will your trotro."
    }
  }
},
"AboutPage": {
  "title": "About Salifu & Master",
  "subtitle": "The story behind the game",
  "metaDescription": "Learn about Salifu & Master, a trotro conductor simulation game set in Ghana. Discover the culture of trotros and why we built this game.",
  "whatIs": {
    "title": "What is Salifu & Master?",
    "description": "Salifu & Master is a browser-based simulation game where you play as a trotro mate (bus conductor) in Ghana. Navigate real city routes, pick up passengers, collect fares, manage your hunger, health, and sanity, and try to make your daily sales target before time runs out. The game features real Ghanaian cities, authentic cultural elements, and fast-paced 3-minute rounds that you can play anywhere."
  },
  "trotros": {
    "title": "What is a Trotro?",
    "description": "Trotros are the shared minibuses that form the backbone of public transportation in Ghana. The name comes from the old fare of three pence, or 'tro'. These converted vans and minibuses run fixed routes through cities and between towns, picking up and dropping off passengers along the way. Each trotro has a driver (the master) and a mate who hangs out the door calling destinations, collecting fares, and managing passengers. It is chaotic, loud, and absolutely essential to daily life in Ghana. Millions of Ghanaians depend on trotros to get to work, school, and market every single day."
  },
  "why": {
    "title": "Why We Built This",
    "description": "We wanted to capture a piece of everyday Ghanaian life that most games ignore. The trotro experience is universal in Ghana but almost unknown outside it. The sights, sounds, and hustle of being a mate is a story worth telling. We built Salifu & Master to share that experience with the world: the stress of making your sales, the relief of a hot plate of waakye, and the satisfaction of surviving another day on the streets."
  },
  "howToPlayBrief": {
    "title": "How It Works",
    "description": "Pick a city and route. Pick up passengers at stops. Collect fares. Manage your resources. Make your daily sales target. Each round takes about 3 minutes.",
    "linkText": "Read the full guide"
  }
}
```

Also add nav keys for the new pages:

```json
"Nav": {
  ...existing keys...
  "howToPlay": "How to Play",
  "about": "About"
}
```

**Step 2: Commit**

```bash
git add messages/en.json
git commit -m "feat: add i18n content for content pages"
```

---

### Task 2: Create shared PageHero and PlayCta components

**Files:**
- Create: `src/components/page-hero/page-hero.tsx`
- Create: `src/components/page-hero/page-hero.module.scss`
- Create: `src/components/play-cta/play-cta.tsx`
- Create: `src/components/play-cta/play-cta.module.scss`

**Step 1: Create PageHero component**

```tsx
// src/components/page-hero/page-hero.tsx
import { getTranslations } from "next-intl/server";
import { GAME_URL } from "@/lib/constants";
import styles from "./page-hero.module.scss";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export async function PageHero({ title, subtitle }: PageHeroProps) {
  const t = await getTranslations("PageHero");

  return (
    <section className={styles.hero}>
      <div className="container text-center">
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <a href={GAME_URL} className={styles.cta}>
          {t("playNow")}
        </a>
      </div>
    </section>
  );
}
```

```scss
// src/components/page-hero/page-hero.module.scss
@use "../../styles/variables" as *;

.hero {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, $bg-base 0%, $bg-elevated 100%);
  text-align: center;
}

.title {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 3rem;
  color: $text-primary;
  margin-bottom: 1rem;

  @media (max-width: 767.98px) {
    font-size: 2rem;
  }
}

.subtitle {
  font-size: 1.25rem;
  color: $text-secondary;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.cta {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: $accent;
  color: $bg-base;
  font-weight: 700;
  border-radius: $radius-md;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: $accent-hover;
  }
}
```

**Step 2: Create PlayCta component**

```tsx
// src/components/play-cta/play-cta.tsx
import { getTranslations } from "next-intl/server";
import { GAME_URL } from "@/lib/constants";
import styles from "./play-cta.module.scss";

export async function PlayCta() {
  const t = await getTranslations("CtaBanner");

  return (
    <section className={styles.section}>
      <div className="container text-center">
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

```scss
// src/components/play-cta/play-cta.module.scss
@use "../../styles/variables" as *;

.section {
  padding: $section-py 0;
  background: $bg-elevated;

  @media (max-width: 767.98px) {
    padding: $section-py-mobile 0;
  }
}

.heading {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: $accent;
  margin-bottom: 0.5rem;
}

.subtext {
  color: $text-secondary;
  margin-bottom: 1.5rem;
}

.cta {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: $accent;
  color: $bg-base;
  font-weight: 700;
  border-radius: $radius-md;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: $accent-hover;
  }
}
```

**Step 3: Commit**

```bash
git add src/components/page-hero/ src/components/play-cta/
git commit -m "feat: add PageHero and PlayCta shared components"
```

---

### Task 3: Create /how-to-play page

**Files:**
- Create: `src/app/[locale]/how-to-play/page.tsx`
- Create: `src/components/how-to-play-page/how-to-play-page.tsx`
- Create: `src/components/how-to-play-page/how-to-play-page.module.scss`

**Step 1: Create the page route**

```tsx
// src/app/[locale]/how-to-play/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { PageHero } from "@/components/page-hero/page-hero";
import { PlayCta } from "@/components/play-cta/play-cta";
import { HowToPlayContent } from "@/components/how-to-play-page/how-to-play-page";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HowToPlayPage" });
  return { title: t("title"), description: t("metaDescription") };
}

export default async function HowToPlayRoute({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HowToPlayPage");

  return (
    <>
      <Nav />
      <main>
        <PageHero title={t("title")} subtitle={t("subtitle")} />
        <HowToPlayContent />
        <PlayCta />
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Create the content component**

```tsx
// src/components/how-to-play-page/how-to-play-page.tsx
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SCREENSHOT_DATA } from "@/lib/constants";
import styles from "./how-to-play-page.module.scss";

const STEP_KEYS = ["1", "2", "3", "4"] as const;
const TIP_KEYS = ["earning", "resources", "strategy"] as const;

const STEP_SCREENSHOTS = [
  SCREENSHOT_DATA[0],
  SCREENSHOT_DATA[1],
  SCREENSHOT_DATA[4],
  SCREENSHOT_DATA[5],
];

export async function HowToPlayContent() {
  const t = await getTranslations("HowToPlayPage");

  return (
    <div className={styles.content}>
      <div className="container">
        <section className="mb-5">
          <h2 className={styles.sectionTitle}>{t("overview.title")}</h2>
          <p className={styles.paragraph}>{t("overview.description")}</p>
        </section>

        {STEP_KEYS.map((key, i) => (
          <section key={key} className={`row align-items-center mb-5 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}>
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <h2 className={styles.sectionTitle}>{t(`steps.${key}.title`)}</h2>
              <p className={styles.paragraph}>{t(`steps.${key}.description`)}</p>
            </div>
            <div className="col-12 col-md-6">
              <Image
                src={STEP_SCREENSHOTS[i]}
                alt={t(`steps.${key}.title`)}
                width={600}
                height={338}
                className={styles.screenshot}
              />
            </div>
          </section>
        ))}

        <section>
          <h2 className={styles.sectionTitle}>{t("tips.title")}</h2>
          <div className="row g-4">
            {TIP_KEYS.map((key) => (
              <div key={key} className="col-12 col-md-4">
                <div className={styles.tipCard}>
                  <h3 className={styles.tipTitle}>{t(`tips.${key}.title`)}</h3>
                  <p className={styles.tipText}>{t(`tips.${key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
```

**Step 3: Create styles**

```scss
// src/components/how-to-play-page/how-to-play-page.module.scss
@use "../../styles/variables" as *;

.content {
  padding: $section-py 0;
  background: $bg-base;

  @media (max-width: 767.98px) {
    padding: $section-py-mobile 0;
  }
}

.sectionTitle {
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  color: $text-primary;
  margin-bottom: 1rem;
}

.paragraph {
  color: $text-secondary;
  line-height: 1.8;
  font-size: 1.05rem;
}

.screenshot {
  width: 100%;
  height: auto;
  border-radius: $radius-lg;
  border: 1px solid $border-default;
}

.tipCard {
  background: $bg-card;
  border: 1px solid $border-default;
  border-radius: $radius-lg;
  padding: 1.5rem;
  height: 100%;
}

.tipTitle {
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  color: $accent;
  margin-bottom: 0.75rem;
}

.tipText {
  color: $text-secondary;
  line-height: 1.7;
}
```

**Step 4: Commit**

```bash
git add src/app/\[locale\]/how-to-play/ src/components/how-to-play-page/
git commit -m "feat: add /how-to-play content page"
```

---

### Task 4: Create /characters page

**Files:**
- Create: `src/app/[locale]/characters/page.tsx`
- Create: `src/components/characters-page/characters-page.tsx`
- Create: `src/components/characters-page/characters-page.module.scss`

**Step 1: Create the page route**

```tsx
// src/app/[locale]/characters/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { PageHero } from "@/components/page-hero/page-hero";
import { PlayCta } from "@/components/play-cta/play-cta";
import { CharactersContent } from "@/components/characters-page/characters-page";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CharactersPage" });
  return { title: t("title"), description: t("metaDescription") };
}

export default async function CharactersRoute({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CharactersPage");

  return (
    <>
      <Nav />
      <main>
        <PageHero title={t("title")} subtitle={t("subtitle")} />
        <CharactersContent />
        <PlayCta />
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Create the content component**

```tsx
// src/components/characters-page/characters-page.tsx
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CHARACTER_KEYS, CHARACTER_DATA } from "@/lib/constants";
import styles from "./characters-page.module.scss";

export async function CharactersContent() {
  const t = await getTranslations("CharactersPage");

  return (
    <div className={styles.content}>
      <div className="container">
        {CHARACTER_KEYS.map((key, i) => {
          const data = CHARACTER_DATA[key];
          return (
            <section
              key={key}
              className={`row align-items-center mb-5 ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
            >
              <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                <div
                  className={styles.portrait}
                  style={{ "--accent": data.accentColor } as React.CSSProperties}
                >
                  <Image
                    src={data.image}
                    alt={t(`characters.${key}.name`)}
                    width={240}
                    height={288}
                  />
                </div>
              </div>
              <div className="col-12 col-md-8">
                <h2 className={styles.name}>{t(`characters.${key}.name`)}</h2>
                <p className={styles.role}>{t(`characters.${key}.role`)}</p>
                <p className={styles.paragraph}>{t(`characters.${key}.backstory`)}</p>
                <h3 className={styles.gameplayTitle}>In the Game</h3>
                <p className={styles.paragraph}>{t(`characters.${key}.gameplay`)}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
```

**Step 3: Create styles**

```scss
// src/components/characters-page/characters-page.module.scss
@use "../../styles/variables" as *;

.content {
  padding: $section-py 0;
  background: $bg-base;

  @media (max-width: 767.98px) {
    padding: $section-py-mobile 0;
  }
}

.portrait {
  display: inline-block;
  border: 2px solid var(--accent);
  border-radius: $radius-lg;
  padding: 1rem;
  background: $bg-card;
}

.name {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: $text-primary;
  margin-bottom: 0.25rem;
}

.role {
  font-weight: 700;
  color: $accent;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.paragraph {
  color: $text-secondary;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

.gameplayTitle {
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: 0.5rem;
}
```

**Step 4: Commit**

```bash
git add src/app/\[locale\]/characters/ src/components/characters-page/
git commit -m "feat: add /characters content page"
```

---

### Task 5: Create /cities page

**Files:**
- Create: `src/app/[locale]/cities/page.tsx`
- Create: `src/components/cities-page/cities-page.tsx`
- Create: `src/components/cities-page/cities-page.module.scss`

**Step 1: Create the page route**

```tsx
// src/app/[locale]/cities/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { PageHero } from "@/components/page-hero/page-hero";
import { PlayCta } from "@/components/play-cta/play-cta";
import { CitiesContent } from "@/components/cities-page/cities-page";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CitiesPage" });
  return { title: t("title"), description: t("metaDescription") };
}

export default async function CitiesRoute({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CitiesPage");

  return (
    <>
      <Nav />
      <main>
        <PageHero title={t("title")} subtitle={t("subtitle")} />
        <CitiesContent />
        <PlayCta />
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Create the content component**

```tsx
// src/components/cities-page/cities-page.tsx
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CITY_KEYS, CITY_DATA } from "@/lib/constants";
import styles from "./cities-page.module.scss";

export async function CitiesContent() {
  const t = await getTranslations("CitiesPage");

  return (
    <div className={styles.content}>
      <div className="container">
        {CITY_KEYS.map((key) => {
          const data = CITY_DATA[key];
          return (
            <section key={key} className={styles.citySection}>
              <div className="row align-items-start">
                <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
                  {data.icon && (
                    <Image
                      src={data.icon}
                      alt={t(`cities.${key}.name`)}
                      width={120}
                      height={120}
                      className={styles.cityIcon}
                    />
                  )}
                </div>
                <div className="col-12 col-md-9">
                  <h2 className={styles.cityName}>
                    {t(`cities.${key}.name`)}
                    {data.comingSoon && (
                      <span className={styles.comingSoon}> Coming Soon</span>
                    )}
                  </h2>
                  <p className={styles.paragraph}>{t(`cities.${key}.description`)}</p>
                  <h3 className={styles.subheading}>Routes</h3>
                  <p className={styles.paragraph}>{t(`cities.${key}.routes`)}</p>
                  <h3 className={styles.subheading}>Culture</h3>
                  <p className={styles.paragraph}>{t(`cities.${key}.culture`)}</p>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
```

**Step 3: Create styles**

```scss
// src/components/cities-page/cities-page.module.scss
@use "../../styles/variables" as *;

.content {
  padding: $section-py 0;
  background: $bg-base;

  @media (max-width: 767.98px) {
    padding: $section-py-mobile 0;
  }
}

.citySection {
  padding: 2rem 0;
  border-bottom: 1px solid $border-default;

  &:last-child {
    border-bottom: none;
  }
}

.cityIcon {
  border-radius: $radius-lg;
}

.cityName {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: $text-primary;
  margin-bottom: 1rem;
}

.comingSoon {
  font-size: 0.875rem;
  font-weight: 400;
  color: $text-tertiary;
  font-style: italic;
}

.paragraph {
  color: $text-secondary;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

.subheading {
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  color: $accent;
  margin-bottom: 0.5rem;
}
```

**Step 4: Commit**

```bash
git add src/app/\[locale\]/cities/ src/components/cities-page/
git commit -m "feat: add /cities content page"
```

---

### Task 6: Create /about page

**Files:**
- Create: `src/app/[locale]/about/page.tsx`
- Create: `src/components/about-page/about-page.tsx`
- Create: `src/components/about-page/about-page.module.scss`

**Step 1: Create the page route**

```tsx
// src/app/[locale]/about/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { PageHero } from "@/components/page-hero/page-hero";
import { PlayCta } from "@/components/play-cta/play-cta";
import { AboutContent } from "@/components/about-page/about-page";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return { title: t("title"), description: t("metaDescription") };
}

export default async function AboutRoute({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");

  return (
    <>
      <Nav />
      <main>
        <PageHero title={t("title")} subtitle={t("subtitle")} />
        <AboutContent />
        <PlayCta />
      </main>
      <Footer />
    </>
  );
}
```

**Step 2: Create the content component**

```tsx
// src/components/about-page/about-page.tsx
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import styles from "./about-page.module.scss";

const SECTION_KEYS = ["whatIs", "trotros", "why"] as const;

export async function AboutContent() {
  const t = await getTranslations("AboutPage");

  return (
    <div className={styles.content}>
      <div className="container">
        {SECTION_KEYS.map((key) => (
          <section key={key} className="mb-5">
            <h2 className={styles.sectionTitle}>{t(`${key}.title`)}</h2>
            <p className={styles.paragraph}>{t(`${key}.description`)}</p>
          </section>
        ))}

        <section className="mb-5">
          <h2 className={styles.sectionTitle}>{t("howToPlayBrief.title")}</h2>
          <p className={styles.paragraph}>{t("howToPlayBrief.description")}</p>
          <Link href="/how-to-play" className={styles.link}>
            {t("howToPlayBrief.linkText")} &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
```

**Step 3: Create styles**

```scss
// src/components/about-page/about-page.module.scss
@use "../../styles/variables" as *;

.content {
  padding: $section-py 0;
  background: $bg-base;

  @media (max-width: 767.98px) {
    padding: $section-py-mobile 0;
  }
}

.sectionTitle {
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  color: $text-primary;
  margin-bottom: 1rem;
}

.paragraph {
  color: $text-secondary;
  line-height: 1.8;
  font-size: 1.05rem;
  max-width: 800px;
}

.link {
  color: $accent;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: $accent-hover;
  }
}
```

**Step 4: Commit**

```bash
git add src/app/\[locale\]/about/ src/components/about-page/
git commit -m "feat: add /about content page"
```

---

### Task 7: Update Nav and Footer with new page links

**Files:**
- Modify: `src/lib/constants.ts`
- Modify: `src/components/footer/footer.tsx`

**Step 1: Update constants**

Add new nav links and update footer links in `src/lib/constants.ts`:

```typescript
// Replace NAV_LINK_HREFS with:
export const NAV_LINK_HREFS = [
  { key: "features", href: "#features" },
  { key: "characters", href: "#characters" },
  { key: "cities", href: "#cities" },
  { key: "trailer", href: "#showcase" },
] as const;

export const NAV_PAGE_LINKS = [
  { key: "howToPlay", href: "/how-to-play" },
  { key: "about", href: "/about" },
] as const;

// Replace FOOTER_LINK_DATA with:
export const FOOTER_LINK_DATA = [
  { key: "about", href: "/about" },
  { key: "howToPlay", href: "/how-to-play" },
  { key: "characters", href: "/characters" },
  { key: "cities", href: "/cities" },
] as const;
```

Add footer i18n keys to `messages/en.json`:

```json
"Footer": {
  ...existing keys...
  "links": {
    "about": "About",
    "howToPlay": "How to Play",
    "characters": "Characters",
    "cities": "Cities"
  }
}
```

**Step 2: Update Nav to include page links**

In `src/components/nav/nav.tsx`, import `NAV_PAGE_LINKS` and add them after the existing hash links:

```tsx
import { NAV_LINK_HREFS, NAV_PAGE_LINKS, NAV_LOGO_SRC, GAME_URL } from "@/lib/constants";

// Inside the links div, after the existing NAV_LINK_HREFS.map(), add:
{NAV_PAGE_LINKS.map((link) => (
  <a
    key={link.href}
    href={link.href}
    className={styles.link}
    onClick={handleLinkClick}
  >
    {t(link.key)}
  </a>
))}
```

**Step 3: Update Footer links to use actual hrefs**

The footer already maps `FOOTER_LINK_DATA` — updating the constants with real hrefs is sufficient.

**Step 4: Commit**

```bash
git add src/lib/constants.ts src/components/nav/nav.tsx src/components/footer/footer.tsx messages/en.json
git commit -m "feat: update nav and footer with content page links"
```

---

### Task 8: Re-add AdSense meta tag to layout

**Files:**
- Modify: `src/app/[locale]/layout.tsx`

**Step 1: Add google-adsense-account back to metadata**

In `src/app/[locale]/layout.tsx`, add the `other` field back to the metadata return:

```typescript
return {
  title: t("title"),
  description: t("description"),
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/assets/short-logo.png",
  },
  other: {
    "google-adsense-account": "ca-pub-2882403014606841",
  },
  openGraph: { ... },
  twitter: { ... },
};
```

**Step 2: Commit**

```bash
git add src/app/\[locale\]/layout.tsx
git commit -m "feat: re-add AdSense meta tag for domain verification"
```

---

### Task 9: Build and verify

**Step 1: Run the dev server and verify all pages**

```bash
cd /Users/joojodontoh/Documents/PersonalProjects/salifu-and-master-landing
npm run build
```

Expected: Build succeeds with static pages generated for `/`, `/how-to-play`, `/characters`, `/cities`, `/about`.

**Step 2: Verify page content is crawlable**

Check that the generated HTML files contain actual text content (not just empty divs):

```bash
grep -l "trotro" out/en/*.html out/en/**/*.html
```

Expected: All 4 new pages contain substantial text content in the HTML.
