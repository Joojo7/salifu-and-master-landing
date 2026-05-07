import Image from "next/image";
import styles from "./icon-collage.module.scss";

export type CollageVariant = "passengers" | "resources" | "sales";

type Tile = {
  id: string;
  size: number;
  className: string;
};

const PASSENGERS_TILES: Tile[] = [
  { id: "passengers", size: 200, className: "p-main" },
  { id: "money-target", size: 110, className: "p-money1" },
  { id: "money-below", size: 88, className: "p-money2" },
  { id: "passengers", size: 76, className: "p-mini1" },
  { id: "passengers", size: 70, className: "p-mini2" },
];

const RESOURCES_TILES: Tile[] = [
  { id: "food", size: 170, className: "r-food" },
  { id: "health", size: 170, className: "r-health" },
  { id: "sanity", size: 170, className: "r-sanity" },
  { id: "time", size: 90, className: "r-time" },
];

const SALES_TILES: Tile[] = [
  { id: "money-3star", size: 200, className: "s-main" },
  { id: "money-target", size: 130, className: "s-target" },
  { id: "money-below", size: 110, className: "s-below" },
  { id: "passengers", size: 84, className: "s-passengers" },
  { id: "time", size: 78, className: "s-time" },
];

const TILE_SETS: Record<CollageVariant, Tile[]> = {
  passengers: PASSENGERS_TILES,
  resources: RESOURCES_TILES,
  sales: SALES_TILES,
};

const VARIANT_CLASS: Record<CollageVariant, string> = {
  passengers: "bgPassengers",
  resources: "bgResources",
  sales: "bgSales",
};

export function IconCollage({ variant }: { variant: CollageVariant }) {
  const tiles = TILE_SETS[variant];
  return (
    <div
      className={`${styles.collage} ${styles[VARIANT_CLASS[variant]]}`}
      aria-hidden="true"
    >
      <div className={styles.halftone} />
      {tiles.map((t, i) => (
        <div key={i} className={`${styles.tile} ${styles[t.className]}`}>
          <Image
            src={`/resource-icons-svg/${t.id}.svg`}
            alt=""
            width={t.size}
            height={t.size}
          />
        </div>
      ))}
    </div>
  );
}
