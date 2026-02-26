import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CITY_KEYS, CITY_DATA } from "@/lib/constants";
import styles from "./cities-showcase.module.scss";

export async function CitiesShowcase() {
  const t = await getTranslations("CitiesShowcase");

  return (
    <section id="cities" className="section">
      <div className="container text-center">
        <h2 className="section-title mb-2">{t("title")}</h2>
        <p className="section-subtitle mb-4">{t("subtitle")}</p>

        <div className="row g-4 justify-content-center">
          {CITY_KEYS.map((key) => {
            const city = CITY_DATA[key];
            const isComingSoon = city.comingSoon;

            return (
              <div key={key} className="col-12 col-sm-6 col-lg-3">
                <div
                  className={`${styles.card} ${isComingSoon ? styles.comingSoon : ""}`}
                >
                  <div className={styles.iconWrapper}>
                    {city.icon ? (
                      <Image
                        src={city.icon}
                        alt={t(`cities.${key}.name`)}
                        width={120}
                        height={120}
                        className={styles.cityIcon}
                      />
                    ) : (
                      <span className={styles.placeholderIcon}>
                        {city.emoji}
                      </span>
                    )}
                  </div>
                  <h3 className={styles.cityName}>
                    {t(`cities.${key}.name`)}
                  </h3>
                  <p className={styles.cityDesc}>
                    {t(`cities.${key}.description`)}
                  </p>
                  <div className={styles.meta}>
                    <span className={styles.routeCount}>
                      {t(`cities.${key}.routeCount`)}
                    </span>
                    {isComingSoon && (
                      <span className={styles.badge}>{t("comingSoon")}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
