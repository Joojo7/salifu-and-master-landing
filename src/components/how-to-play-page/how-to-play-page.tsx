import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { AdSlot } from "@/components/ad-slot/ad-slot";
import { AD_SLOTS } from "@/lib/constants";
import { RouteCollage } from "./route-collage";
import { IconCollage, type CollageVariant } from "./icon-collage";
import styles from "./how-to-play-page.module.scss";

type StepColor = "yellow" | "red" | "blue" | "green";
type StepMedia =
  | { type: "image"; src: string }
  | { type: "routes" }
  | { type: "icons"; variant: CollageVariant };

const STEPS: Array<{ key: string; color: StepColor; media: StepMedia }> = [
  { key: "1", color: "yellow", media: { type: "routes" } },
  { key: "2", color: "red", media: { type: "icons", variant: "passengers" } },
  { key: "3", color: "blue", media: { type: "icons", variant: "resources" } },
  { key: "4", color: "green", media: { type: "icons", variant: "sales" } },
];

const TIPS = [
  { key: "earning", color: "yellow" },
  { key: "resources", color: "red" },
  { key: "strategy", color: "blue" },
] as const;

export async function HowToPlayContent() {
  const t = await getTranslations("HowToPlayPage");

  return (
    <section className={styles.content}>
      <div className="container">
        <div className={styles.overview}>
          <span className={styles.kicker}>★ {t("overview.title")}</span>
          <p className={styles.overviewText}>{t("overview.description")}</p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step, i) => {
            const reversed = i % 2 !== 0;
            return (
              <article
                key={step.key}
                className={`${styles.step} ${styles[step.color]} ${reversed ? styles.reversed : ""}`}
              >
                <div className={styles.media}>
                  {step.media.type === "image" && (
                    <Image
                      src={step.media.src}
                      alt={t(`steps.${step.key}.title`)}
                      fill
                      sizes="(max-width: 900px) 90vw, 540px"
                    />
                  )}
                  {step.media.type === "routes" && <RouteCollage />}
                  {step.media.type === "icons" && (
                    <IconCollage variant={step.media.variant} />
                  )}
                </div>
                <div className={styles.body}>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                  <h2 className={styles.stepTitle}>
                    {t(`steps.${step.key}.title`)}
                  </h2>
                  <p className={styles.paragraph}>
                    {t(`steps.${step.key}.description`)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <AdSlot slot={AD_SLOTS.articleInline} />

        <div className={styles.tipsSection}>
          <span className={styles.kicker}>★ {t("tips.title")}</span>
          <div className={styles.tipGrid}>
            {TIPS.map((tip) => (
              <div key={tip.key} className={`${styles.tipCard} ${styles[tip.color]}`}>
                <h3 className={styles.tipTitle}>{t(`tips.${tip.key}.title`)}</h3>
                <p className={styles.tipText}>{t(`tips.${tip.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
