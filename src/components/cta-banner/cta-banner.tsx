import { getTranslations } from "next-intl/server";
import styles from "./cta-banner.module.scss";

export async function CtaBanner() {
  const t = await getTranslations("CtaBanner");

  return (
    <section className={styles.banner}>
      <div className="container text-center">
        <h2 className={styles.heading}>{t("heading")}</h2>
        <p className={styles.subtext}>{t("subtext")}</p>
        <a href="#waitlist" className={styles.cta}>
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
