import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CITY_KEYS, CITY_DATA } from "@/lib/constants";
import styles from "./cities-page.module.scss";

export async function CitiesContent() {
  const t = await getTranslations("CitiesPage");

  return (
    <section className={styles.content}>
      <div className="container">
        {CITY_KEYS.map((key, index) => {
          const city = CITY_DATA[key];
          const isLast = index === CITY_KEYS.length - 1;

          return (
            <div
              key={key}
              className={`${styles.citySection} ${isLast ? styles.last : ""}`}
            >
              <div className="row align-items-start g-4">
                <div className="col-12 col-md-3 text-center">
                  {city.icon && (
                    <Image
                      src={city.icon}
                      alt={t(`cities.${key}.name`)}
                      width={120}
                      height={120}
                      className={styles.cityIcon}
                    />
                  )}
                </div>
                <div className="col-12 col-md-9">
                  <h2 className={styles.cityName}>
                    {t(`cities.${key}.name`)}
                    {city.comingSoon && (
                      <span className={styles.comingSoon}> Coming Soon</span>
                    )}
                  </h2>
                  <p className={styles.paragraph}>
                    {t(`cities.${key}.description`)}
                  </p>
                  <h3 className={styles.subheading}>Routes</h3>
                  <p className={styles.paragraph}>
                    {t(`cities.${key}.routes`)}
                  </p>
                  <h3 className={styles.subheading}>Culture</h3>
                  <p className={styles.paragraph}>
                    {t(`cities.${key}.culture`)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
