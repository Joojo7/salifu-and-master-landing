"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { GALLERY_MOBILE_SCREENSHOTS } from "@/lib/constants";
import styles from "./phone-mockup.module.scss";

const SCROLL_SPEED = 1;
const CARD_WIDTH = 280;
const CARD_GAP = 24;

export function MobileShowcase() {
  const t = useTranslations("MobileShowcase");
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const animRef = useRef<number>(0);

  const scroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || paused) {
      animRef.current = requestAnimationFrame(scroll);
      return;
    }

    track.scrollLeft += SCROLL_SPEED;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll) {
      track.scrollLeft = 0;
    }

    animRef.current = requestAnimationFrame(scroll);
  }, [paused]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    animRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animRef.current);
  }, [scroll]);

  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <h2 className={styles.sectionTitle}>{t("title")}</h2>
            <p className={styles.subtitle}>{t("subtitle")}</p>
          </div>
          <div className={styles.controls}>
            <button
              className={styles.arrow}
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              className={styles.arrow}
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className={styles.track}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {[...GALLERY_MOBILE_SCREENSHOTS, ...GALLERY_MOBILE_SCREENSHOTS].map(
          (item, index) => (
            <div key={`${item.src}-${index}`} className={styles.card}>
              <div className={styles.phoneFrame}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="280px"
                  loading="lazy"
                  className={styles.phoneImage}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>
                  {t(`cards.${index % GALLERY_MOBILE_SCREENSHOTS.length}.title`)}
                </h3>
                <p className={styles.cardText}>
                  {t(`cards.${index % GALLERY_MOBILE_SCREENSHOTS.length}.description`)}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
