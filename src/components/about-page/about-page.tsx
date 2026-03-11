import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import styles from "./about-page.module.scss";

const SECTION_KEYS = ["whatIs", "trotros", "why"] as const;

export async function AboutContent() {
  const t = await getTranslations("AboutPage");
  const locale = await getLocale();

  return (
    <section className={styles.content}>
      <div className="container">
        {SECTION_KEYS.map((key) => (
          <div key={key} className="mb-5">
            <h2 className={styles.sectionTitle}>{t(`${key}.title`)}</h2>
            <p className={styles.paragraph}>{t(`${key}.description`)}</p>
          </div>
        ))}

        <div className="mb-5">
          <h2 className={styles.sectionTitle}>
            {t("howToPlayBrief.title")}
          </h2>
          <p className={styles.paragraph}>
            {t("howToPlayBrief.description")}
          </p>
          <Link href={`/${locale}/how-to-play`} className={styles.link}>
            {t("howToPlayBrief.linkText")} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
