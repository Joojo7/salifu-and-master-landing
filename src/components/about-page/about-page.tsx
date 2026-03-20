import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import styles from "./about-page.module.scss";

const SECTION_KEYS = ["whatIs", "trotros", "why"] as const;

const CREATOR_LINKS = [
  { key: "portfolio", href: "https://www.joojodontoh.tech/" },
  { key: "linkedin", href: "https://www.linkedin.com/in/joojo-dontoh-57843b65/" },
] as const;

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

        <div className="mb-5">
          <h2 className={styles.sectionTitle}>{t("creator.title")}</h2>
          <p className={styles.paragraph}>{t("creator.description")}</p>
          <div className="d-flex gap-3">
            {CREATOR_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {t(`creator.${link.key}`)} &rarr;
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
