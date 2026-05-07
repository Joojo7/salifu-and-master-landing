"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FEATURES } from "@/lib/landing-data";
import styles from "./features-carousel.module.scss";

const AUTOPLAY_MS = 6000;

export function FeaturesCarousel() {
  const t = useTranslations("FeaturesCarousel");
  const [index, setIndex] = useState(0);
  const hovering = useRef(false);

  const goTo = (i: number) => setIndex((i + FEATURES.length) % FEATURES.length);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovering.current) setIndex((i) => (i + 1) % FEATURES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, []);

  const active = FEATURES[index];
  const prev = FEATURES[(index - 1 + FEATURES.length) % FEATURES.length];
  const next = FEATURES[(index + 1) % FEATURES.length];

  return (
    <section
      className={styles.features}
      id="features"
      onMouseEnter={() => { hovering.current = true; }}
      onMouseLeave={() => { hovering.current = false; }}
    >
      <div className="container">
        <div className={styles.head}>
          <div className="head-l">
            <span className="kicker">{t("kicker")}</span>
            <h2>{t("title")}</h2>
            <p>{t("sub")}</p>
          </div>
          <div className="head-r">
            <div className={styles.arrows}>
              <button onClick={() => goTo(index - 1)} aria-label={t("prev")}>←</button>
              <button onClick={() => goTo(index + 1)} aria-label={t("next")}>→</button>
            </div>
          </div>
        </div>

        <div className={styles.track}>
          <button
            className={`${styles.card} ${styles.peek}`}
            onClick={() => goTo(index - 1)}
            aria-label={t("prev")}
          >
            <Image src={prev.img} alt="" fill sizes="20vw" />
            <span className={styles.peekArrow}>←</span>
          </button>
          <article className={`${styles.card} ${styles.active}`}>
            <Image src={active.img} alt={t(`items.${active.key}.title`)} fill sizes="60vw" />
            <span className={styles.burst}>{t(`items.${active.key}.burst`)}</span>
            <div className={styles.caption}>
              <h3>{t(`items.${active.key}.title`)}</h3>
              <p>{t(`items.${active.key}.desc`)}</p>
            </div>
          </article>
          <button
            className={`${styles.card} ${styles.peek}`}
            onClick={() => goTo(index + 1)}
            aria-label={t("next")}
          >
            <Image src={next.img} alt="" fill sizes="20vw" />
            <span className={styles.peekArrow}>→</span>
          </button>
        </div>

        <div className={styles.dots}>
          {FEATURES.map((f, i) => (
            <button
              key={f.key}
              onClick={() => goTo(i)}
              className={i === index ? styles.dotActive : ""}
              aria-label={`Go to feature ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
