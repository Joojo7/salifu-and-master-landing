import Image from "next/image";
import styles from "./route-collage.module.scss";

type Tile = {
  id: string;
  size: number;
  className: string;
};

const CITY_TILES: Tile[] = [
  { id: "accra", size: 140, className: "city1" },
  { id: "cape-coast", size: 130, className: "city2" },
  { id: "kumasi", size: 120, className: "city3" },
];

const ROUTE_TILES: Tile[] = [
  { id: "madina-kaneshie", size: 92, className: "route1" },
  { id: "coastal-sweep", size: 86, className: "route2" },
  { id: "kasoa-mallam", size: 88, className: "route3" },
  { id: "kejetia-adum", size: 80, className: "route4" },
  { id: "hilltop-express", size: 76, className: "route5" },
  { id: "tema-ashaiman", size: 82, className: "route6" },
];

export function RouteCollage() {
  return (
    <div className={styles.collage} aria-hidden="true">
      <div className={styles.halftone} />
      {CITY_TILES.map((t) => (
        <div key={t.id} className={`${styles.tile} ${styles[t.className]}`}>
          <Image
            src={`/map-icons-svg/${t.id}.svg`}
            alt=""
            width={t.size}
            height={t.size}
          />
        </div>
      ))}
      {ROUTE_TILES.map((t) => (
        <div key={t.id} className={`${styles.tile} ${styles[t.className]}`}>
          <Image
            src={`/map-icons-svg/${t.id}.svg`}
            alt=""
            width={t.size}
            height={t.size}
          />
        </div>
      ))}
    </div>
  );
}
