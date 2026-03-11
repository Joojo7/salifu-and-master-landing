import { getTranslations } from "next-intl/server";
import { GAME_URL } from "@/lib/constants";
import styles from "./play-cta.module.scss";

export async function PlayCta() {
  const t = await getTranslations("CtaBanner");

  return (
    <section className={styles.section}>
      <div className="container text-center">
        <h2 className={styles.heading}>{t("heading")}</h2>
        <p className={styles.subtext}>{t("subtext")}</p>
        <a href={GAME_URL} className={styles.cta}>
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
