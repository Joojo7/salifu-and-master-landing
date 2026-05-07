"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LOGO_SRC, HERO_BG_SRC, GAME_URL } from "@/lib/constants";
import { HeroTrotro } from "./hero-trotro";
import styles from "./hero.module.scss";

const STAT_CARD_KEYS = ["dailyTarget", "round", "passengers"] as const;

const STAT_CARD_ICONS: Record<typeof STAT_CARD_KEYS[number], { glyph: string; bg: string; color?: string }> = {
  dailyTarget: { glyph: "₵", bg: "var(--yellow, #ffcd1c)" },
  round: { glyph: "⏱", bg: "var(--red, #ee2737)", color: "#fff" },
  passengers: { glyph: "👥", bg: "var(--blue, #1f9bd6)", color: "#fff" },
};

export function Hero() {
  const t = useTranslations("Hero");
  const bgRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
      if (linesRef.current) linesRef.current.style.transform = `translate3d(0, ${y * 0.06}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero} id="play">
      <div ref={bgRef} className={styles.bg} aria-hidden="true">
        <Image src={HERO_BG_SRC} alt="" fill priority sizes="100vw" />
        <div className={styles.bgOverlay} />
      </div>
      <div className={styles.halftone} aria-hidden="true" />
      <div ref={linesRef} className={styles.lines} aria-hidden="true" />

      <div className={styles.trotro} aria-hidden="true">
        <HeroTrotro />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.sticker}>
            <span className={styles.dot} />
            {t("sticker")}
          </span>
          <Image
            src={LOGO_SRC}
            alt={t("title")}
            width={540}
            height={200}
            className={styles.logo}
            priority
          />
          <p className={styles.tagline}>
            <em>{t("taglineLine1")}</em> <s>{t("taglineLine2")}</s>{" "}
            <u>{t("taglineLine3")}</u>
          </p>
          <div className={styles.buttons}>
            <a href={GAME_URL} className={`${styles.btn} ${styles.btnRed}`}>
              ▶ {t("playNow")}
            </a>
            <a href="#features" className={`${styles.btn} ${styles.btnGhost}`}>
              {t("learnMore")}
            </a>
            <span className={styles.sub}>{t("subtext")}</span>
          </div>
        </div>

        <div className={styles.cards} aria-hidden="true">
          {STAT_CARD_KEYS.map((key, i) => {
            const icon = STAT_CARD_ICONS[key];
            return (
              <div key={key} className={`${styles.statcard} ${styles[`r${i + 1}`]}`}>
                <div
                  className={styles.statcardIcon}
                  style={{ background: icon.bg, color: icon.color ?? "#0d0d0d" }}
                >
                  {icon.glyph}
                </div>
                <div>
                  <h4>{t(`statCards.${key}.label`)}</h4>
                  <b>{t(`statCards.${key}.value`)}</b>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.bottomStrip} aria-hidden="true" />
    </section>
  );
}
