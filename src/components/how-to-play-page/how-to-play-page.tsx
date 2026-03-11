import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SCREENSHOT_DATA } from "@/lib/constants";
import styles from "./how-to-play-page.module.scss";

const STEP_SCREENSHOT_INDICES = [0, 1, 4, 5] as const;
const STEP_KEYS = ["1", "2", "3", "4"] as const;
const TIP_KEYS = ["earning", "resources", "strategy"] as const;

export async function HowToPlayContent() {
  const t = await getTranslations("HowToPlayPage");

  return (
    <section className={styles.content}>
      <div className="container">
        <div className="mb-5">
          <h2 className={styles.sectionTitle}>{t("overview.title")}</h2>
          <p className={styles.paragraph}>{t("overview.description")}</p>
        </div>

        {STEP_KEYS.map((stepKey, index) => {
          const isReversed = index % 2 !== 0;
          const screenshotSrc = SCREENSHOT_DATA[STEP_SCREENSHOT_INDICES[index]];

          return (
            <div
              key={stepKey}
              className={`row align-items-center mb-5 ${isReversed ? "flex-row-reverse" : ""}`}
            >
              <div className="col-12 col-md-6">
                <h2 className={styles.sectionTitle}>
                  {t(`steps.${stepKey}.title`)}
                </h2>
                <p className={styles.paragraph}>
                  {t(`steps.${stepKey}.description`)}
                </p>
              </div>
              <div className="col-12 col-md-6">
                <Image
                  src={screenshotSrc}
                  alt={t(`steps.${stepKey}.title`)}
                  width={600}
                  height={400}
                  className={styles.screenshot}
                />
              </div>
            </div>
          );
        })}

        <div className="mt-5">
          <h2 className={styles.sectionTitle}>{t("tips.title")}</h2>
          <div className="row g-4">
            {TIP_KEYS.map((tipKey) => (
              <div key={tipKey} className="col-12 col-md-4">
                <div className={styles.tipCard}>
                  <h3 className={styles.tipTitle}>
                    {t(`tips.${tipKey}.title`)}
                  </h3>
                  <p className={styles.tipText}>
                    {t(`tips.${tipKey}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
