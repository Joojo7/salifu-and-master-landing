import { CarouselControlsProps } from "@/types/features-carousel";
import styles from "./carousel-controls.module.scss";

export function CarouselControls({
  total,
  activeIndex,
  onPrev,
  onNext,
  onDotClick,
}: CarouselControlsProps) {
  return (
    <div className={styles.controls}>
      <div className={styles.dots}>
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
            onClick={() => onDotClick(i)}
            aria-label={`Go to feature ${i + 1}`}
          />
        ))}
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrow} onClick={onPrev} aria-label="Previous feature">
          ←
        </button>
        <button className={styles.arrow} onClick={onNext} aria-label="Next feature">
          →
        </button>
      </div>
    </div>
  );
}
