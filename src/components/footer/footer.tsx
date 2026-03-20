import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { FOOTER_LINK_DATA, SOCIAL_LINK_DATA, NAV_LOGO_SRC } from "@/lib/constants";
import styles from "./footer.module.scss";

export async function Footer() {
  const t = await getTranslations("Footer");
  const locale = await getLocale();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.brand}>
            <Image
              src={NAV_LOGO_SRC}
              alt={t("logo")}
              width={80}
              height={30}
              className={styles.logoImage}
            />
            <span className={styles.copyright}>
              {t("copyright", { year })}
            </span>
          </div>

          <div className={styles.navLinks}>
            {FOOTER_LINK_DATA.map((link) => (
              <a
                key={link.key}
                href={`/${locale}${link.href}`}
                className={styles.link}
              >
                {t(`links.${link.key}`)}
              </a>
            ))}
          </div>

          <div className={styles.social}>
            {SOCIAL_LINK_DATA.map((social) => (
              <a
                key={social.key}
                href={social.href}
                className={styles.socialLink}
                aria-label={t(`social.${social.key}`)}
              >
                {t(`social.${social.key}`)}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.divider} />
        <p className={styles.badge}>{t("badge")}</p>
      </div>
    </footer>
  );
}
