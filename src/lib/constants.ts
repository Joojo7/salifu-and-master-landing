export const SITE_URL = "https://salifuandmaster.com";
export const GAME_URL = "https://play.salifuandmaster.com";

export const HERO_BANNER_SRC = "/assets/all-character-hero-banner.png";
export const LOGO_SRC = "/assets/hero-logo.png";
export const NAV_LOGO_SRC = "/assets/short-logo.png";
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

export const CONCEPT_IMAGE_MAP: Record<string, string> = {
  drive: "/assets/drive-grahpic.png",
  hustle: "/assets/Hustle-graphic.png",
  survive: "/assets/survive-graphic.png",
};

export const CHARACTER_KEYS = [
  "salifu",
  "masterKofi",
  "serwaa",
  "amelia",
  "drPanie",
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
  drPanie: { image: "/characters/dr-panie-happy.png", accentColor: "#5bc0eb" },
};

export const ROUTE_HIGHLIGHT_KEYS = [
  "realStreets",
  "difficulty",
  "expanding",
] as const;

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

export const SCREENSHOT_DATA = [
  "/screenshots/navigate-busy-city-routes.png",
  "/screenshots/pick-up-passengers-at-stops.png",
  "/screenshots/buy-food-from-amelia.png",
  "/screenshots/visit-serwaa-for-sanity.png",
  "/screenshots/manage-your-vital-stats.png",
  "/screenshots/earn-stars-at-day-end.png",
] as const;

export const IN_GAME_SCREENSHOT_DATA = [
  "/in-game-screenshots/main-menu.png",
  "/in-game-screenshots/trotro-select-front.png",
  "/in-game-screenshots/trotro-sprinter.png",
  "/in-game-screenshots/upgrade-shop.png",
  "/in-game-screenshots/city-map.png",
  "/in-game-screenshots/gameplay-gbawe.png",
  "/in-game-screenshots/gameplay-dansoman.png",
  "/in-game-screenshots/gameplay-odorkor.png",
  "/in-game-screenshots/gameplay-street.png",
] as const;

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
