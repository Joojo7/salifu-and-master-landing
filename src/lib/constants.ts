export const SITE_URL = "https://salifuandmaster.com";
export const GAME_URL = "https://play.salifuandmaster.com";

export const HERO_BANNER_SRC = "/assets/all-character-hero-banner.png";
export const LOGO_SRC = "/assets/hero-logo.png";
export const PLAY_BUTTON_SRC = "/assets/hero-play-button.png";
export const CHARACTERS_BANNER_SRC =
  "/assets/amelia-holding-food-serwaa-holding-food.png";
export const FEATURES_BANNER_SRC =
  "/assets/dr-panieand-salifu-discussing.png";

export const NAV_LINK_HREFS = [
  { key: "features", href: "#features" },
  { key: "characters", href: "#characters" },
  { key: "routes", href: "#routes" },
  { key: "trailer", href: "#showcase" },
] as const;

export const CONCEPT_CARD_KEYS = ["drive", "hustle", "survive"] as const;

export const CONCEPT_ICON_MAP: Record<string, string> = {
  drive: "\uD83D\uDE8C",
  hustle: "\uD83D\uDCB0",
  survive: "\u2764\uFE0F",
};

export const CHARACTER_KEYS = [
  "salifu",
  "masterKofi",
  "serwaa",
  "amelia",
] as const;

export const CHARACTER_DATA: Record<
  string,
  { image: string; accentColor: string }
> = {
  salifu: { image: "/characters/salifu-happy.png", accentColor: "#ffd700" },
  masterKofi: {
    image: "/characters/master-happy.png",
    accentColor: "#ff6b35",
  },
  serwaa: { image: "/characters/serwaa-wink.png", accentColor: "#9b59b6" },
  amelia: { image: "/characters/amelia-happy.png", accentColor: "#4ade80" },
};

export const ROUTE_KEYS = [
  "madinaKaneshie",
  "madinaTema",
  "lapazAchimota",
  "temaAshaiman",
  "kasoaMallam",
] as const;

export const ROUTE_DATA: Record<
  string,
  { difficulty: "Easy" | "Medium" | "Hard"; stops: number; target: number }
> = {
  madinaKaneshie: { difficulty: "Easy", stops: 4, target: 40 },
  madinaTema: { difficulty: "Medium", stops: 7, target: 60 },
  lapazAchimota: { difficulty: "Medium", stops: 5, target: 55 },
  temaAshaiman: { difficulty: "Hard", stops: 6, target: 75 },
  kasoaMallam: { difficulty: "Hard", stops: 7, target: 100 },
};

export const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "#4ade80",
  Medium: "#f9a825",
  Hard: "#f87171",
};

export const FEATURE_KEYS = [
  "threeMinuteRounds",
  "authenticCulture",
  "upgradeTrotro",
  "meetCharacters",
  "earnStars",
  "achievements",
] as const;

export const FEATURE_ICON_MAP: Record<string, string> = {
  threeMinuteRounds: "\u23F1\uFE0F",
  authenticCulture: "\uD83C\uDF0D",
  upgradeTrotro: "\uD83D\uDD27",
  meetCharacters: "\uD83D\uDC65",
  earnStars: "\u2B50",
  achievements: "\uD83C\uDFC6",
};

export const HOW_TO_PLAY_STEP_NUMBERS = [1, 2, 3] as const;

export const SCREENSHOT_COUNT = 6;

export const SOCIAL_LINK_DATA = [
  { key: "twitter", href: "#" },
  { key: "instagram", href: "#" },
  { key: "tiktok", href: "#" },
  { key: "discord", href: "#" },
] as const;

export const FOOTER_LINK_DATA = [
  { key: "about", href: "#" },
  { key: "pressKit", href: "#" },
  { key: "contact", href: "#" },
] as const;
