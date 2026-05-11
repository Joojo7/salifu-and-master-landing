import Image from "next/image";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import { AdSlot } from "@/components/ad-slot/ad-slot";
import { AD_SLOTS } from "@/lib/constants";
import styles from "./about-page.module.scss";

type SectionColor = "yellow" | "red" | "blue" | "green";

const SECTIONS: Array<{ key: "whatIs" | "trotros" | "why"; color: SectionColor }> = [
  { key: "whatIs", color: "yellow" },
  { key: "trotros", color: "red" },
  { key: "why", color: "blue" },
];

const CREATOR_LINKS = [
  { key: "portfolio" as const, href: "https://www.joojodontoh.tech/" },
  { key: "linkedin" as const, href: "https://www.linkedin.com/in/joojo-dontoh-57843b65/" },
];

export async function AboutContent() {
  const t = await getTranslations("AboutPage");
  const locale = await getLocale();

  return (
    <section className={styles.content}>
      <div className="container">
        <div className={styles.list}>
          {SECTIONS.map(({ key, color }) => (
            <article key={key} className={`${styles.card} ${styles[color]}`}>
              <span className={styles.kicker}>★ {t(`${key}.title`)}</span>
              <h2 className={styles.title}>{t(`${key}.title`)}</h2>
              <p className={styles.paragraph}>{t(`${key}.description`)}</p>
            </article>
          ))}

          <AdSlot slot={AD_SLOTS.articleInline} />

          <article className={`${styles.card} ${styles.green}`}>
            <span className={styles.kicker}>★ {t("howToPlayBrief.title")}</span>
            <h2 className={styles.title}>{t("howToPlayBrief.title")}</h2>
            <p className={styles.paragraph}>{t("howToPlayBrief.description")}</p>
            <Link href={`/${locale}/how-to-play`} className={styles.linkBtn}>
              {t("howToPlayBrief.linkText")} →
            </Link>
          </article>

          <article className={`${styles.card} ${styles.creator}`}>
            <div className={styles.portrait}>
              <Image
                src="/team/joojo.jpg"
                alt="Joojo Dontoh"
                fill
                sizes="(max-width: 900px) 90vw, 280px"
              />
            </div>
            <div className={styles.creatorBody}>
              <span className={styles.kicker}>★ {t("creator.title")}</span>
              <h2 className={styles.title}>{t("creator.title")}</h2>
              <p className={styles.paragraph}>{t("creator.description")}</p>
              <div className={styles.linkRow}>
                {CREATOR_LINKS.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    {t(`creator.${link.key}`)} →
                  </a>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
