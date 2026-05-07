import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ROUTE_TILES, ROUTE_MARQUEE_TEXT } from "@/lib/landing-data";
import styles from "./routes-section.module.scss";

const HIGHLIGHTS = ["authentic", "difficulty", "growing"] as const;

export async function RoutesSection() {
  const t = await getTranslations("RoutesSection");

  return (
    <section className={styles.routes} id="routes">
      <div className="container">
        <div className={styles.head}>
          <div className="head-l">
            <span className={`kicker ${styles.kickerYellow}`}>{t("kicker")}</span>
            <h2>{t("title")}</h2>
            <p>{t("sub")}</p>
            <span className={styles.teaser}>{t("teaser")}</span>
          </div>
        </div>

        <div className={styles.highlights}>
          {HIGHLIGHTS.map((key, i) => (
            <div key={key} className={styles.hlCard}>
              <div className={styles.hlNum}>{String(i + 1).padStart(2, "0")}</div>
              <h3>{t(`highlights.${key}.title`)}</h3>
              <p>{t(`highlights.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingBottom: "5rem" }}>
        <div className={styles.gridHead}>
          <h3>{t("pickHeading")}</h3>
          <span className={styles.pill}>{t("pickPill")}</span>
        </div>
        <div className={styles.grid}>
          {ROUTE_TILES.map((tile) => (
            <a key={tile.id} className={`${styles.tile} ${styles[tile.color]}`}>
              <Image
                src={`/map-icons-svg/${tile.id}.svg`}
                alt=""
                width={80}
                height={80}
              />
              <span>{t(`tiles.${tile.id}`)}</span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <span>{ROUTE_MARQUEE_TEXT}</span>
          <span>{ROUTE_MARQUEE_TEXT}</span>
        </div>
      </div>
    </section>
  );
}
