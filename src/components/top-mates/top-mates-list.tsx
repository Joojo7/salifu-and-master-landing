import { getTranslations } from "next-intl/server";
import type { TopMatesListProps } from "@/types/top-mates";
import { WeekCard } from "./week-card";
import styles from "./top-mates-list.module.scss";

export async function TopMatesList({ cycles, locale }: TopMatesListProps) {
  const t = await getTranslations({ locale, namespace: "TopMatesIndex" });

  return (
    <section className={styles.page}>
      <div className={styles.halftone} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={styles.sticker}>
          <span className={styles.dot} />
          {t("sticker")}
        </span>

        <h1 className={styles.title}>
          {t("titleLead")}
          <em>{t("titleHighlight")}</em>
          {t("titleTrail")}
        </h1>

        <p className={styles.subtitle}>{t("subtitle")}</p>

        <div className={styles.weekList}>
          {cycles.map((cycle, i) => (
            <WeekCard
              key={cycle.date}
              cycle={cycle}
              locale={locale}
              isLatest={i === 0}
            />
          ))}
        </div>
      </div>

      <div className={styles.stripe} aria-hidden="true" />
    </section>
  );
}
