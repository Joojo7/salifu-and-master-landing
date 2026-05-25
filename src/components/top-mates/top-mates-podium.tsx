import { GAME_URL } from "@/lib/constants";
import type { TopMatesCycle } from "@/types/top-mates";
import { PodiumCard } from "./podium-card";
import styles from "./top-mates-podium.module.scss";

interface Props {
  cycle: TopMatesCycle;
}

const formatRange = (start: string, end: string): string => {
  const s = new Date(start);
  const e = new Date(end);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  return `${fmt(s)} – ${fmt(e)}, ${e.getFullYear()}`;
};

export function TopMatesPodium({ cycle }: Props) {
  const first = cycle.entries.find((e) => e.rank === 1);
  const second = cycle.entries.find((e) => e.rank === 2);
  const third = cycle.entries.find((e) => e.rank === 3);
  const fourthAndFifth = cycle.entries.filter((e) => e.rank >= 4);

  return (
    <section className={styles.page}>
      <div className={styles.halftone} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={styles.sticker}>
          <span className={styles.dot} />
          {cycle.seasonName} winners
        </span>

        <h1 className={styles.title}>
          Top <em>5</em> mates
        </h1>

        <p className={styles.subtitle}>{formatRange(cycle.weekStart, cycle.weekEnd)}</p>

        {first && second && third && (
          <div className={styles.topThree}>
            <div className={styles.silverSlot}>
              <PodiumCard entry={second} size="md" />
            </div>
            <div className={styles.goldSlot}>
              <span className={styles.crown} aria-hidden="true">👑</span>
              <span className={styles.sparkleLeft} aria-hidden="true">✦</span>
              <span className={styles.sparkleRight} aria-hidden="true">✦</span>
              <PodiumCard entry={first} size="lg" />
            </div>
            <div className={styles.bronzeSlot}>
              <PodiumCard entry={third} size="md" />
            </div>
          </div>
        )}

        {fourthAndFifth.length > 0 && (
          <div className={styles.runnersUp}>
            {fourthAndFifth.map((entry) => (
              <PodiumCard key={entry.userId} entry={entry} size="sm" />
            ))}
          </div>
        )}

        <a href={GAME_URL} className={styles.cta}>
          Play Salifu &amp; Master
        </a>
      </div>

      <div className={styles.stripe} aria-hidden="true" />
    </section>
  );
}
