import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { IN_GAME_SCREENSHOT_DATA } from "@/lib/constants";
import styles from "./in-game-screenshots.module.scss";

export async function InGameScreenshots() {
  const t = await getTranslations("InGameScreenshots");

  return (
    <section id="screenshots" className="section">
      <div className="container text-center">
        <h2 className="section-title mb-2">{t("title")}</h2>
        <p className="section-subtitle mb-4">{t("subtitle")}</p>

        <div className={styles.grid}>
          {IN_GAME_SCREENSHOT_DATA.map((src, i) => (
            <div key={src} className={styles.item}>
              <Image
                src={src}
                alt={t(`captions.${i}`)}
                width={640}
                height={360}
                className={styles.screenshot}
              />
              <p className={styles.caption}>{t(`captions.${i}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
