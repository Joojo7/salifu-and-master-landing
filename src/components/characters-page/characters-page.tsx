import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CAST } from "@/lib/landing-data";
import styles from "./characters-page.module.scss";

export async function CharactersContent() {
  const t = await getTranslations("CharactersPage");

  return (
    <section className={styles.content}>
      <div className="container">
        <div className={styles.list}>
          {CAST.map((c, i) => {
            const reversed = i % 2 !== 0;
            return (
              <article
                key={c.key}
                id={c.key}
                className={`${styles.card} ${styles[c.color]} ${reversed ? styles.reversed : ""}`}
              >
                <div className={styles.photo}>
                  <Image
                    src={c.img}
                    alt={t(`characters.${c.key}.name`)}
                    fill
                    sizes="(max-width: 900px) 90vw, 380px"
                  />
                </div>
                <div className={styles.body}>
                  <span className={styles.role}>★ {t(`characters.${c.key}.role`)}</span>
                  <h2 className={styles.name}>{t(`characters.${c.key}.name`)}</h2>
                  <p className={styles.paragraph}>
                    {t(`characters.${c.key}.backstory`)}
                  </p>
                  <h3 className={styles.gameplayTitle}>{t("inTheGame")}</h3>
                  <p className={styles.paragraph}>
                    {t(`characters.${c.key}.gameplay`)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
