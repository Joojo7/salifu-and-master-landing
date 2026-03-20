"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { GALLERY_DESKTOP_SCREENSHOTS } from "@/lib/constants";
import { Lightbox } from "@/components/lightbox/lightbox";
import styles from "./screenshot-gallery.module.scss";

export function ScreenshotGallery() {
  const t = useTranslations("ScreenshotGallery");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = GALLERY_DESKTOP_SCREENSHOTS.map((s) => s.src);
  const featured = GALLERY_DESKTOP_SCREENSHOTS[0];
  const grid = GALLERY_DESKTOP_SCREENSHOTS.slice(1);

  const handleClose = () => setLightboxIndex(null);
  const handlePrev = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + allImages.length) % allImages.length : null
    );
  const handleNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % allImages.length : null
    );

  return (
    <section className={styles.section}>
      <div className={styles.pattern} />
      <div className="container position-relative">
        <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>

        <div className={styles.featured}>
          <button
            className={styles.featuredImage}
            onClick={() => setLightboxIndex(0)}
            aria-label={`View ${featured.alt}`}
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(max-width: 768px) 100vw, 65vw"
              loading="lazy"
              className={styles.image}
            />
          </button>
          <div className={styles.featuredText}>
            <span className={styles.badge}>In-Game</span>
            <h3 className={styles.featuredTitle}>{featured.alt}</h3>
          </div>
        </div>

        <div className={styles.grid}>
          {grid.map((item, index) => (
            <button
              key={item.src}
              className={styles.gridItem}
              onClick={() => setLightboxIndex(index + 1)}
              aria-label={`View ${item.alt}`}
            >
              <div className={styles.gridImageWrap}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                  className={styles.image}
                />
              </div>
              <p className={styles.gridCaption}>{item.alt}</p>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          activeIndex={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
