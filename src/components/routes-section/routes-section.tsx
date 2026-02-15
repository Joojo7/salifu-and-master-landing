import { getTranslations } from "next-intl/server";
import { ROUTE_KEYS, ROUTE_DATA, DIFFICULTY_COLORS } from "@/lib/constants";
import styles from "./routes-section.module.scss";

export async function RoutesSection() {
  const t = await getTranslations("RoutesSection");

  return (
    <section id="routes" className="section">
      <div className="container text-center">
        <h2 className="section-title mb-1">{t("title")}</h2>
        <p className="section-subtitle mb-4">{t("subtitle")}</p>

        <div className={styles.routeList}>
          {ROUTE_KEYS.map((key) => {
            const data = ROUTE_DATA[key];
            return (
              <div key={key} className={styles.routeCard}>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <h3 className={styles.routeName}>
                    {t(`routes.${key}.name`)}
                  </h3>
                  <span
                    className={styles.badge}
                    style={{
                      backgroundColor: DIFFICULTY_COLORS[data.difficulty],
                    }}
                  >
                    {t(`difficulty.${data.difficulty.toLowerCase()}`)}
                  </span>
                </div>
                <p className={styles.routeDescription}>
                  {t(`routes.${key}.description`)}
                </p>
                <div className="d-flex gap-3">
                  <span className={styles.stat}>
                    {t("stopsLabel", { count: data.stops })}
                  </span>
                  <span className={styles.stat}>
                    {t("targetLabel", { amount: data.target })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className={styles.teaser}>{t("teaser")}</p>
      </div>
    </section>
  );
}
