import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GAME_URL } from "@/lib/constants";
import { PageHeroProps } from "@/types/pages";
import styles from "./page-hero.module.scss";

export async function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  const t = await getTranslations("PageHero");

  return (
    <section className={styles.hero}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className={styles.bgImage}
      />
      <div className={styles.overlay} />
      <div className={`container text-center ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <a href={GAME_URL} className={styles.cta}>
          {t("playNow")}
        </a>
      </div>
    </section>
  );
}
