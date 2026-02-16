import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { LOGO_SRC, HERO_BANNER_SRC, PLAY_BUTTON_SRC, GAME_URL } from "@/lib/constants";
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

          <div className="d-flex justify-content-center mt-4">
            <a href={GAME_URL} className={styles.playLink}>
              <Image
                src={PLAY_BUTTON_SRC}
                alt={t("playCta")}
                width={180}
                height={72}
                className={styles.playIcon}
              />
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
