import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CITY_PAGE_CARDS } from "@/lib/landing-data";
import styles from "./cities-page.module.scss";

export async function CitiesContent() {
  const t = await getTranslations("CitiesPage");

  return (
    <section className={styles.content}>
      <div className="container">
        <div className={styles.list}>
          {CITY_PAGE_CARDS.map((city, i) => {
            const reversed = i % 2 !== 0;
            return (
              <article
                key={city.key}
                className={`${styles.card} ${styles[city.color]} ${reversed ? styles.reversed : ""}`}
              >
                <div className={styles.icon}>
                  {city.iconId ? (
                    <Image
                      src={`/map-icons-svg/${city.iconId}.svg`}
                      alt={t(`cities.${city.key}.name`)}
                      width={220}
                      height={220}
                    />
                  ) : (
                    <span className={styles.iconTba}>TBA</span>
                  )}
                </div>
                <div className={styles.body}>
                  <div className={styles.titleRow}>
                    <h2 className={styles.name}>{t(`cities.${city.key}.name`)}</h2>
                    {city.comingSoon && (
                      <span className={styles.soonBadge}>{t("comingSoon")}</span>
                    )}
                  </div>
                  <p className={styles.paragraph}>
                    {t(`cities.${city.key}.description`)}
                  </p>
                  <h3 className={styles.subhead}>{t("routesHeading")}</h3>
                  <p className={styles.paragraph}>
                    {t(`cities.${city.key}.routes`)}
                  </p>
                  <h3 className={styles.subhead}>{t("cultureHeading")}</h3>
                  <p className={styles.paragraph}>
                    {t(`cities.${city.key}.culture`)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
