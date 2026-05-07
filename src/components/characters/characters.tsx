import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CAST } from "@/lib/landing-data";
import styles from "./characters.module.scss";

export async function Characters() {
  const t = await getTranslations("Characters");

  return (
    <section className={styles.cast} id="characters">
      <div className="container">
        <div className={styles.head}>
          <div className="head-l">
            <span className="kicker">{t("kicker")}</span>
            <h2>{t("title")}</h2>
            <p>{t("sub")}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {CAST.map((c) => (
            <article key={c.key} className={`${styles.card} ${styles[c.color]}`}>
              <span className={styles.bubble}>{t(`items.${c.key}.bubble`)}</span>
              <div className={styles.photo}>
                <Image src={c.img} alt={t(`items.${c.key}.name`)} fill sizes="20vw" />
              </div>
              <span className={styles.role}>{t(`items.${c.key}.role`)}</span>
              <h3>{t(`items.${c.key}.name`)}</h3>
              <p>{t(`items.${c.key}.blurb`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
