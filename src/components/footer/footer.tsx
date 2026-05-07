import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { FOOTER_LINK_DATA, SOCIAL_LINK_DATA, NAV_LOGO_SRC } from "@/lib/constants";
import styles from "./footer.module.scss";

const COL_GAME = ["howToPlay", "characters", "cities", "news"] as const;
const COL_ABOUT = ["about", "contact", "privacy", "terms"] as const;

export async function Footer() {
  const t = await getTranslations("Footer");
  const locale = await getLocale();
  const year = new Date().getFullYear();

  const linkHref = (key: string) => {
    const match = FOOTER_LINK_DATA.find((l) => l.key === key);
    return match ? `/${locale}${match.href}` : "#";
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Image src={NAV_LOGO_SRC} alt={t("logo")} width={80} height={80} />
            <span className={styles.badge}>{t("badge")}</span>
            <p className={styles.blurb}>{t("blurb")}</p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("columns.game")}</h4>
            <ul className={styles.list}>
              {COL_GAME.map((key) => (
                <li key={key}>
                  <a className={styles.link} href={linkHref(key)}>{t(`links.${key}`)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("columns.about")}</h4>
            <ul className={styles.list}>
              {COL_ABOUT.map((key) => (
                <li key={key}>
                  <a className={styles.link} href={linkHref(key)}>{t(`links.${key}`)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t("columns.follow")}</h4>
            <ul className={styles.list}>
              {SOCIAL_LINK_DATA.map((social) => (
                <li key={social.key}>
                  <a className={styles.link} href={social.href}>{t(`social.${social.key}`)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>{t("copyright", { year })}</span>
          <span>{t("location")}</span>
        </div>
      </div>
    </footer>
  );
}
