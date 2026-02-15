import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  FEATURE_KEYS,
  FEATURE_ICON_MAP,
  FEATURES_BANNER_SRC,
} from "@/lib/constants";
import styles from "./features.module.scss";

export async function Features() {
  const t = await getTranslations("Features");

  return (
    <section id="features" className={styles.section}>
      <Image
        src={FEATURES_BANNER_SRC}
        alt="Dr. Panie and Salifu discussing"
        fill
        className={styles.bgImage}
      />
      <div className={styles.overlay} />

      <div className="container position-relative text-center">
        <h2 className={styles.heading}>{t("title")}</h2>

        <div className="row g-4 justify-content-center">
          {FEATURE_KEYS.map((key) => (
            <div key={key} className="col-6 col-md-4">
              <div className={styles.card}>
                <span className={styles.icon}>{FEATURE_ICON_MAP[key]}</span>
                <h3 className={styles.cardTitle}>
                  {t(`features.${key}.title`)}
                </h3>
                <p className={styles.cardDescription}>
                  {t(`features.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
