export const SITE_URL = "https://salifuandmaster.com";
export const GAME_URL = "https://play.salifuandmaster.com/";

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
] as const;

export const NAV_PAGE_LINKS = [
  { key: "characters", href: "/characters" },
  { key: "cities", href: "/cities" },
  { key: "howToPlay", href: "/how-to-play" },
  { key: "news", href: "/news" },
  { key: "about", href: "/about" },
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

export const CITY_KEYS = ["accra", "kumasi", "capeCost", "tamale"] as const;

export const CITY_DATA: Record<
  string,
  { icon: string | null; emoji: string; comingSoon: boolean }
> = {
  accra: { icon: "/city-icons/accra.png", emoji: "", comingSoon: false },
  kumasi: { icon: "/city-icons/kumasi.png", emoji: "", comingSoon: false },
  capeCost: { icon: "/city-icons/cape-coast.png", emoji: "", comingSoon: false },
  tamale: { icon: "/city-icons/tamale.png", emoji: "", comingSoon: true },
};

export const ROUTE_HIGHLIGHT_KEYS = [
  "realStreets",
  "difficulty",
  "expanding",
] as const;

export const FEATURE_KEYS = [
  "threeMinuteRounds",
  "authenticCulture",
  "multipleCities",
  "upgradeTrotro",
  "leaderboard",
  "freeRoam",
] as const;

export const FEATURE_ICON_MAP: Record<string, string> = {
  threeMinuteRounds: "\u23F1\uFE0F",
  authenticCulture: "\uD83C\uDF0D",
  multipleCities: "\uD83D\uDDFA\uFE0F",
  upgradeTrotro: "\uD83D\uDD27",
  leaderboard: "\uD83C\uDFC6",
  freeRoam: "\uD83D\uDEB6",
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

export const PAGE_HERO_IMAGES: Record<string, string> = {
  howToPlay: "/in-game-screenshots/gameplay-gbawe.png",
  characters: "/screenshots/pick-up-passengers-at-stops.png",
  cities: "/assets/trotro_station.png",
  about: "/in-game-screenshots/main-menu.png",
  privacy: "/in-game-screenshots/main-menu.png",
  terms: "/in-game-screenshots/main-menu.png",
};

export const SOCIAL_LINK_DATA = [
  { key: "twitter", href: "https://x.com/salifumate?s=21" },
] as const;

export const FOOTER_LINK_DATA = [
  { key: "about", href: "/about" },
  { key: "howToPlay", href: "/how-to-play" },
  { key: "characters", href: "/characters" },
  { key: "cities", href: "/cities" },
  { key: "contact", href: "/contact" },
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
] as const;

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
  leaderboard: "/screenshots/mobile-in-game/leaderboard.png",
  shop: "/screenshots/mobile-in-game/shop.png",
  trotroShop: "/screenshots/mobile-in-game/trotro-shop.png",
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
  crew: { image: CHARACTERS_BANNER_SRC },
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
  { src: MOBILE_SCREENSHOT_SRC.trotroShop, alt: "Browse trotros on mobile" },
  { src: MOBILE_SCREENSHOT_SRC.leaderboard, alt: "Compete on the leaderboard" },
  { src: MOBILE_SCREENSHOT_SRC.shop, alt: "Upgrade your mate" },
  { src: MOBILE_SCREENSHOT_SRC.ameliaDialogue, alt: "Amelia offers you food" },
  { src: MOBILE_SCREENSHOT_SRC.mobileDrivingCloseup, alt: "Close-up street driving" },
];

export const HERO_BG_SRC = DESKTOP_SCREENSHOT_SRC.gameplaySunsetDriving;
export const CTA_BANNER_BG_SRC = "/branding/salifu_in_trotro2.png";

export const GALLERY_BG_SCREENSHOTS = [
  "/in-game-screenshots/gameplay-gbawe.png",
  "/in-game-screenshots/gameplay-dansoman.png",
  "/in-game-screenshots/gameplay-street.png",
  "/in-game-screenshots/gameplay-odorkor.png",
  "/in-game-screenshots/trotro-sprinter.png",
  "/in-game-screenshots/city-map.png",
];
