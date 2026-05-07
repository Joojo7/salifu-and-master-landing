import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MOBILE_CARDS, PHONE_STACK_IMAGES } from "@/lib/landing-data";
import styles from "./gameplay-showcase.module.scss";

export async function GameplayShowcase() {
  const t = await getTranslations("GameplayShowcase");

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.phoneStack}>
            {PHONE_STACK_IMAGES.map((src) => (
              <div key={src} className={styles.phone}>
                <div className={styles.phoneScreen}>
                  <Image src={src} alt="" fill sizes="(max-width: 900px) 80vw, 280px" />
                  <div className={styles.phoneHalftone} />
                </div>
              </div>
            ))}
          </div>

          <div>
            <span className="kicker">{t("kicker")}</span>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.sub}>{t("sub")}</p>

            <div className={styles.cards}>
              {MOBILE_CARDS.map((key, i) => (
                <div key={key} className={styles.card}>
                  <div className={styles.num}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3>{t(`cards.${key}.title`)}</h3>
                    <p>{t(`cards.${key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
