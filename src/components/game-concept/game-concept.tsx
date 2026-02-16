import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CONCEPT_CARD_KEYS, CONCEPT_IMAGE_MAP } from "@/lib/constants";
import styles from "./game-concept.module.scss";

export async function GameConcept() {
  const t = await getTranslations("GameConcept");

  return (
    <section className="section">
      <div className="container-fluid text-center px-3 px-md-5">
        <p className={styles.pitch}>{t("pitch")}</p>

        <div className={styles.grid}>
          {CONCEPT_CARD_KEYS.map((key) => (
            <div key={key} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={CONCEPT_IMAGE_MAP[key]}
                  alt={t(`cards.${key}.title`)}
                  width={600}
                  height={300}
                  className={styles.icon}
                />
              </div>
              <p className={styles.cardDescription}>
                {t(`cards.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
