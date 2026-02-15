import { getTranslations } from "next-intl/server";
import { CONCEPT_CARD_KEYS, CONCEPT_ICON_MAP } from "@/lib/constants";
import styles from "./game-concept.module.scss";

export async function GameConcept() {
  const t = await getTranslations("GameConcept");

  return (
    <section className="section">
      <div className="container text-center">
        <p className={styles.pitch}>{t("pitch")}</p>

        <div className="row g-4 mt-3 justify-content-center">
          {CONCEPT_CARD_KEYS.map((key) => (
            <div key={key} className="col-12 col-md-4">
              <div className={styles.card}>
                <span className={styles.icon}>{CONCEPT_ICON_MAP[key]}</span>
                <h3 className={styles.cardTitle}>
                  {t(`cards.${key}.title`)}
                </h3>
                <p className={styles.cardDescription}>
                  {t(`cards.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
