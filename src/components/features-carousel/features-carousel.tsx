"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FEATURE_CAROUSEL_KEYS, FEATURE_CAROUSEL_DATA } from "@/lib/constants";
import { CarouselControls } from "./carousel-controls";
import styles from "./features-carousel.module.scss";

const AUTO_ADVANCE_MS = 6000;

export function FeaturesCarousel() {
  const t = useTranslations("FeaturesCarousel");
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = FEATURE_CAROUSEL_KEYS.length;

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;
  const activeKey = FEATURE_CAROUSEL_KEYS[activeIndex];

  return (
    <section
      id="features"
      className={styles.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.bgLines} />
      <div className="container position-relative">
        <h2 className={styles.heading}>Features</h2>

        <div className={styles.track}>
          <button className={styles.peekCard} onClick={goPrev} aria-label="Previous feature">
            <Image
              src={FEATURE_CAROUSEL_DATA[FEATURE_CAROUSEL_KEYS[prevIndex]].image}
              alt=""
              fill
              sizes="25vw"
              className={styles.peekImage}
            />
          </button>

          <div key={`card-${activeIndex}`} className={styles.activeCard}>
            <Image
              src={FEATURE_CAROUSEL_DATA[activeKey].image}
              alt={t(`${activeKey}.title`)}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className={styles.activeImage}
              priority
            />
          </div>

          <button className={styles.peekCard} onClick={goNext} aria-label="Next feature">
            <Image
              src={FEATURE_CAROUSEL_DATA[FEATURE_CAROUSEL_KEYS[nextIndex]].image}
              alt=""
              fill
              sizes="25vw"
              className={styles.peekImage}
            />
          </button>
        </div>

        <CarouselControls
          total={total}
          activeIndex={activeIndex}
          onPrev={goPrev}
          onNext={goNext}
          onDotClick={setActiveIndex}
        />

        <div key={`text-${activeIndex}`} className={styles.textArea}>
          <h3 className={styles.title}>{t(`${activeKey}.title`)}</h3>
          <p className={styles.description}>{t(`${activeKey}.description`)}</p>
        </div>
      </div>
    </section>
  );
}
