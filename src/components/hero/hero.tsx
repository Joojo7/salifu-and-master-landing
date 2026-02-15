import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { LOGO_SRC, HERO_BANNER_SRC } from "@/lib/constants";
import styles from "./hero.module.scss";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className={styles.hero}>
      <Image
        src={HERO_BANNER_SRC}
        alt="Salifu and Master Kofi with their trotro"
        fill
        className={styles.bannerImage}
        priority
      />
      <div className={styles.overlay} />

      <div className="container position-relative text-center">
        <div className={styles.content}>
          <h1 className={styles.title}>
            <Image
              src={LOGO_SRC}
              alt={t("title")}
              width={360}
              height={135}
              className={styles.logoImage}
              priority
            />
          </h1>
          <p className={styles.tagline}>{t("tagline")}</p>

          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
            <a href="#waitlist" className={styles.primaryCta}>
              {t("primaryCta")}
            </a>
            <a href="#showcase" className={styles.secondaryCta}>
              {t("secondaryCta")}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.arrow} />
      </div>
    </section>
  );
}
