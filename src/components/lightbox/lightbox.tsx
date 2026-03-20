"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { LightboxProps } from "@/types/lightbox";
import styles from "./lightbox.module.scss";

export function Lightbox({ images, activeIndex, onClose, onPrev, onNext }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      ref={dialogRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={onClose}
    >
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
        ✕
      </button>
      <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
        ‹
      </button>
      <div className={styles.imageWrap} onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[activeIndex]}
          alt=""
          fill
          sizes="90vw"
          className={styles.image}
        />
      </div>
      <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">
        ›
      </button>
    </div>
  );
}
