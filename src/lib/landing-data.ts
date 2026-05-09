import {
  DESKTOP_SCREENSHOT_SRC,
  MOBILE_SCREENSHOT_SRC,
  CHARACTERS_BANNER_SRC,
} from "./constants";

export const FEATURES = [
  { key: "shop", img: DESKTOP_SCREENSHOT_SRC.shopHyundaiCounty },
  { key: "routes", img: DESKTOP_SCREENSHOT_SRC.gameplaySunsetDriving },
  { key: "cast", img: CHARACTERS_BANNER_SRC },
  { key: "hustle", img: DESKTOP_SCREENSHOT_SRC.passengerPickup },
  { key: "compete", img: DESKTOP_SCREENSHOT_SRC.shopToyotaHiace },
] as const;

export type RouteColor = "red" | "yellow" | "blue" | "green" | "coral" | "purple";
export type CityPageKey = "accra" | "kumasi" | "capeCost" | "tamale";

export const ROUTE_TILES: Array<{ id: string; color: RouteColor; cityKey: CityPageKey }> = [
  { id: "madina-kaneshie", color: "red", cityKey: "accra" },
  { id: "kasoa-mallam", color: "yellow", cityKey: "accra" },
  { id: "lapaz-achimota", color: "blue", cityKey: "accra" },
  { id: "afienya-odorkor", color: "green", cityKey: "accra" },
  { id: "madina-tema", color: "coral", cityKey: "accra" },
  { id: "tema-ashaiman", color: "purple", cityKey: "accra" },
  { id: "grand-tour-accra", color: "yellow", cityKey: "accra" },
  { id: "kejetia-adum", color: "red", cityKey: "kumasi" },
  { id: "coastal-road", color: "blue", cityKey: "capeCost" },
  { id: "coastal-sweep", color: "green", cityKey: "capeCost" },
  { id: "castle-loop", color: "coral", cityKey: "capeCost" },
  { id: "hilltop-express", color: "purple", cityKey: "capeCost" },
  { id: "forest-trail", color: "green", cityKey: "capeCost" },
  { id: "mountain-loop", color: "red", cityKey: "capeCost" },
];

export type CityVariant = "accra" | "kumasi" | "cape" | "tamale";

const CITY_VARIANT_TO_PAGE_KEY: Record<CityVariant, CityPageKey> = {
  accra: "accra",
  kumasi: "kumasi",
  cape: "capeCost",
  tamale: "tamale",
};

export const cityPageKeyForVariant = (variant: CityVariant): CityPageKey =>
  CITY_VARIANT_TO_PAGE_KEY[variant];

export const CITY_CARDS: Array<{
  variant: CityVariant;
  iconId: string | null;
  status: "live" | "new" | "soon";
}> = [
  { variant: "accra", iconId: "accra", status: "live" },
  { variant: "kumasi", iconId: "kumasi", status: "live" },
  { variant: "cape", iconId: "cape-coast", status: "new" },
  { variant: "tamale", iconId: null, status: "soon" },
];

export type CityPageColor = "red" | "green" | "blue" | "coral";

export const CITY_PAGE_CARDS: Array<{
  key: "accra" | "kumasi" | "capeCost" | "tamale";
  iconId: string | null;
  color: CityPageColor;
  comingSoon: boolean;
}> = [
  { key: "accra", iconId: "accra", color: "red", comingSoon: false },
  { key: "kumasi", iconId: "kumasi", color: "green", comingSoon: false },
  { key: "capeCost", iconId: "cape-coast", color: "blue", comingSoon: false },
  { key: "tamale", iconId: null, color: "coral", comingSoon: true },
];

export type CharColor = "yellow" | "red" | "purple" | "green" | "blue";

export const CAST = [
  { key: "salifu", color: "yellow" as CharColor, img: "/characters/salifu-happy.png" },
  { key: "masterKofi", color: "red" as CharColor, img: "/characters/master-happy.png" },
  { key: "serwaa", color: "purple" as CharColor, img: "/characters/serwaa-wink.png" },
  { key: "amelia", color: "green" as CharColor, img: "/characters/amelia-happy.png" },
  { key: "drPanie", color: "blue" as CharColor, img: "/characters/dr-panie-happy.png" },
];

export const POWER_UPS = [
  "iron-stomach",
  "second-meal",
  "cool-head",
  "serwaa-blessing",
  "second-wind",
  "quick-hands",
  "patient-crowd",
  "overtime",
  "bargain-hunter",
  "masters-mercy",
  "slow-burn",
] as const;

export const MOBILE_CARDS = ["road", "boss", "ranks", "levelUp"] as const;

export const GALLERY_TILES = [
  { key: "sunset", img: DESKTOP_SCREENSHOT_SRC.gameplaySunsetDriving, area: "a" },
  { key: "pickup", img: DESKTOP_SCREENSHOT_SRC.passengerPickup, area: "b" },
  { key: "map", img: "/in-game-screenshots/city-map.png", area: "c" },
  { key: "gbawe", img: "/in-game-screenshots/gameplay-gbawe.png", area: "d" },
  { key: "dansoman", img: "/in-game-screenshots/gameplay-dansoman.png", area: "e" },
  { key: "shop", img: DESKTOP_SCREENSHOT_SRC.shopToyotaHiace, area: "f" },
] as const;

export const PHONE_STACK_IMAGES = [
  MOBILE_SCREENSHOT_SRC.masterKofiDialogue,
  MOBILE_SCREENSHOT_SRC.mobileDriving,
  MOBILE_SCREENSHOT_SRC.leaderboard,
] as const;

export const ROUTE_MARQUEE_TEXT =
  "MADINA — KANESHIE · KASOA — MALLAM · LAPAZ — ACHIMOTA · AFIENYA — ODORKOR · KEJETIA · COASTAL ROAD · CAPE COAST CASTLE ·";
