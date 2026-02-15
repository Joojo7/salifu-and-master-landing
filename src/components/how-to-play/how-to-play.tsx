import { getTranslations } from "next-intl/server";
import { HOW_TO_PLAY_STEP_NUMBERS } from "@/lib/constants";
import styles from "./how-to-play.module.scss";

export async function HowToPlay() {
  const t = await getTranslations("HowToPlay");

  return (
    <section className="section">
      <div className="container text-center">
        <h2 className="section-title mb-4">{t("title")}</h2>

        <div className="row g-4 justify-content-center">
          {HOW_TO_PLAY_STEP_NUMBERS.map((step) => (
            <div key={step} className="col-12 col-md-4">
              <div className={styles.step}>
                <div className={styles.stepNumber}>{step}</div>
                <h3 className={styles.stepTitle}>
                  {t(`steps.${step}.title`)}
                </h3>
                <p className={styles.stepDescription}>
                  {t(`steps.${step}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
