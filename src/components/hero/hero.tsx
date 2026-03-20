import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { LOGO_SRC, HERO_BG_SRC, GAME_URL } from "@/lib/constants";
import styles from "./hero.module.scss";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap}>
        <Image
          src={HERO_BG_SRC}
          alt=""
          fill
          className={styles.bgImage}
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay} />

      <div className={`${styles.content} text-center`}>
        <h1 className={styles.logoWrap}>
          <Image
            src={LOGO_SRC}
            alt={t("title")}
            width={400}
            height={150}
            className={styles.logoImage}
            priority
          />
        </h1>
        <p className={styles.tagline}>{t("tagline")}</p>
        <div className={styles.buttons}>
          <a href={GAME_URL} className={styles.playBtn}>
            {t("playNow")}
          </a>
          <a href="#features" className={styles.learnBtn}>
            {t("learnMore")}
          </a>
        </div>
        <p className={styles.subtext}>{t("subtext")}</p>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.chevron} />
      </div>
    </section>
  );
}
