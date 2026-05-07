import { getTranslations } from "next-intl/server";
import { GAME_URL } from "@/lib/constants";
import styles from "./cta-banner.module.scss";

export async function CtaBanner() {
  const t = await getTranslations("CtaBanner");

  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.kicker}>{t("kicker")}</span>
        <h2 className={styles.heading}>
          {t("headingLine1")}
          <br />
          {t("headingLine2")}
        </h2>
        <p className={styles.subtext}>{t("subtext")}</p>
        <a href={GAME_URL} className={styles.cta}>
          ▶ {t("cta")}
        </a>
      </div>
    </section>
  );
}
