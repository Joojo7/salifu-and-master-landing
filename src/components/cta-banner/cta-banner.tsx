import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GAME_URL, CTA_BANNER_BG_SRC, NAV_LOGO_SRC } from "@/lib/constants";
import styles from "./cta-banner.module.scss";

export async function CtaBanner() {
  const t = await getTranslations("CtaBanner");

  return (
    <section className={styles.banner}>
      <Image
        src={CTA_BANNER_BG_SRC}
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
        className={styles.bgImage}
      />
      <div className={styles.overlay} />

      <div className={`container position-relative ${styles.content}`}>
        <Image
          src={NAV_LOGO_SRC}
          alt="Salifu & Master"
          width={80}
          height={30}
          className={styles.logo}
        />
        <h2 className={styles.heading}>{t("heading")}</h2>
        <p className={styles.subtext}>{t("subtext")}</p>
        <a href={GAME_URL} className={styles.cta}>
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
