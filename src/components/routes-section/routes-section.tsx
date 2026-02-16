import { getTranslations } from "next-intl/server";
import { ROUTE_HIGHLIGHT_KEYS } from "@/lib/constants";
import styles from "./routes-section.module.scss";

export async function RoutesSection() {
  const t = await getTranslations("RoutesSection");

  return (
    <section id="routes" className="section">
      <div className="container text-center">
        <h2 className="section-title mb-1">{t("title")}</h2>
        <p className="section-subtitle mb-4">{t("subtitle")}</p>

        <div className={styles.highlights}>
          {ROUTE_HIGHLIGHT_KEYS.map((key) => (
            <div key={key} className={styles.card}>
              <span className={styles.icon}>{t(`highlights.${key}.icon`)}</span>
              <h3 className={styles.cardTitle}>
                {t(`highlights.${key}.title`)}
              </h3>
              <p className={styles.cardDesc}>
                {t(`highlights.${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        <p className={styles.teaser}>{t("teaser")}</p>
      </div>
    </section>
  );
}
