import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { CITY_CARDS, cityPageKeyForVariant } from "@/lib/landing-data";
import styles from "./cities-showcase.module.scss";

export async function CitiesShowcase() {
  const t = await getTranslations("CitiesShowcase");
  const locale = await getLocale();

  return (
    <section className={styles.cities} id="cities">
      <div className="container">
        <div className={styles.head}>
          <div className="head-l">
            <span className="kicker">{t("kicker")}</span>
            <h2>
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>
            <p>{t("sub")}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {CITY_CARDS.map((city) => (
            <Link
              key={city.variant}
              href={`/${locale}/cities#${cityPageKeyForVariant(city.variant)}`}
              className={`${styles.card} ${styles[city.variant]} ${city.status === "soon" ? styles.coming : ""}`}
            >
              <div className={styles.cardHead}>
                <div className={styles.icon}>
                  {city.iconId ? (
                    <Image
                      src={`/map-icons-svg/${city.iconId}.svg`}
                      alt=""
                      width={88}
                      height={88}
                    />
                  ) : (
                    <span className={styles.iconTba}>TBA</span>
                  )}
                </div>
                <div className={styles.title}>
                  <h3>{t(`cards.${city.variant}.name`)}</h3>
                  <div className={styles.meta}>
                    <span className={styles.pill}>{t(`cards.${city.variant}.routes`)}</span>
                    <span
                      className={`${styles.pill} ${styles[`status${city.status}`]}`}
                    >
                      {t(`status.${city.status}`)}
                    </span>
                  </div>
                </div>
              </div>
              <p className={styles.body}>{t(`cards.${city.variant}.body`)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
