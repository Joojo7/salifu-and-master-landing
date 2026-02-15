import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SCREENSHOT_COUNT, PLAY_BUTTON_SRC } from "@/lib/constants";
import styles from "./gameplay-showcase.module.scss";

export async function GameplayShowcase() {
  const t = await getTranslations("GameplayShowcase");

  return (
    <section id="showcase" className="section">
      <div className="container text-center">
        <h2 className="section-title mb-2">{t("title")}</h2>
        <p className="section-subtitle mb-4">{t("subtitle")}</p>

        <div className={styles.trailerWrapper}>
          <div className={styles.trailerPlaceholder}>
            <Image
              src={PLAY_BUTTON_SRC}
              alt="Play trailer"
              width={180}
              height={72}
              className={styles.playButton}
            />
            <p className={styles.comingSoon}>{t("trailerComingSoon")}</p>
          </div>
        </div>

        <div className={styles.gallery}>
          {Array.from({ length: SCREENSHOT_COUNT }, (_, i) => (
            <div key={i} className={styles.screenshotSlot}>
              <div className={styles.placeholder}>
                <span className={styles.placeholderIcon}>&#128247;</span>
              </div>
              <p className={styles.caption}>{t(`captions.${i}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
