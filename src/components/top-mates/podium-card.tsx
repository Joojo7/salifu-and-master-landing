import { Navii } from "@usenavii/react";
import type { PodiumCardProps } from "@/types/top-mates";
import styles from "./top-mates-podium.module.scss";

const MEDAL: Record<number, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

const RANK_LABEL: Record<number, string> = {
  1: "Champion",
  2: "Runner-up",
  3: "Third",
};

const formatGhc = (n: number): string => `GHC ${n.toLocaleString()}`;

const AVATAR_SIZE: Record<PodiumCardProps["size"], number> = {
  lg: 128,
  md: 96,
  sm: 80,
};

export function PodiumCard({ entry, size }: PodiumCardProps) {
  const isTopThree = entry.rank <= 3;
  return (
    <article className={`${styles.card} ${styles[`rank${entry.rank}`]} ${styles[`card-${size}`]}`}>
      {isTopThree && (
        <span className={styles.medal} aria-hidden="true">
          {MEDAL[entry.rank]}
        </span>
      )}
      <div className={styles.rankBadge}>#{entry.rank}</div>
      <Navii
        seed={entry.userId}
        size={AVATAR_SIZE[size]}
        alt=""
        className={styles.avatar}
      />
      {isTopThree && <div className={styles.rankLabel}>{RANK_LABEL[entry.rank]}</div>}
      <div className={styles.name} title={entry.displayName}>
        {entry.displayName}
      </div>
      <div className={styles.earnings}>{formatGhc(entry.totalEarnings)}</div>
      <div className={styles.meta}>
        {entry.totalRuns} runs · {entry.uniqueRoutes} routes
      </div>
      <div className={styles.pedestal} aria-hidden="true">
        <span className={styles.pedestalNumber}>{entry.rank}</span>
      </div>
    </article>
  );
}
