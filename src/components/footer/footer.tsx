import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FOOTER_LINK_DATA, SOCIAL_LINK_DATA, LOGO_SRC } from "@/lib/constants";
import styles from "./footer.module.scss";

export async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <Image
          src={LOGO_SRC}
          alt={t("logo")}
          width={140}
          height={52}
          className={styles.logoImage}
        />

        <div className="d-flex gap-3 justify-content-center mb-3">
          {FOOTER_LINK_DATA.map((link) => (
            <a key={link.key} href={link.href} className={styles.link}>
              {t(`links.${link.key}`)}
            </a>
          ))}
        </div>

        <div className="d-flex gap-3 justify-content-center mb-3">
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

        <p className={styles.badge}>{t("badge")}</p>
        <p className={styles.copyright}>{t("copyright", { year })}</p>
      </div>
    </footer>
  );
}
