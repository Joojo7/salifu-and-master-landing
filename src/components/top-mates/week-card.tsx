import Link from "next/link";
import { Navii } from "@usenavii/react";
import { getTranslations } from "next-intl/server";
import type { WeekCardProps } from "@/types/top-mates";
import styles from "./week-card.module.scss";

const formatRange = (start: string, end: string): string => {
  const s = new Date(start);
  const e = new Date(end);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  return `${fmt(s)} to ${fmt(e)}, ${e.getFullYear()}`;
};

const formatGhc = (n: number): string => `GHC ${n.toLocaleString()}`;

const MEDAL: Record<number, string> = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
};

export async function WeekCard({ cycle, locale, isLatest = false }: WeekCardProps) {
  const t = await getTranslations({ locale, namespace: "TopMatesIndex" });
  const top3 = cycle.entries.slice(0, 3);
  return (
    <Link
      href={`/${locale}/top-mates/${cycle.date}`}
      className={`${styles.weekCard} ${isLatest ? styles.weekCardLatest : ""}`}
    >
      <div className={styles.weekCardHeader}>
        <div>
          <h2 className={styles.weekTitle}>{cycle.seasonName}</h2>
          <p className={styles.weekDates}>{formatRange(cycle.weekStart, cycle.weekEnd)}</p>
        </div>
        {isLatest && <span className={styles.latestBadge}>{t("latestBadge")}</span>}
      </div>

      <ol className={styles.weekTop3}>
        {top3.map((entry) => (
          <li key={entry.userId} className={styles.weekTop3Item}>
            <span className={styles.weekMedal} aria-hidden="true">
              {MEDAL[entry.rank]}
            </span>
            <Navii
              seed={entry.userId}
              size={48}
              alt=""
              className={styles.weekAvatar}
            />
            <div className={styles.weekEntryText}>
              <div className={styles.weekEntryName}>{entry.displayName}</div>
              <div className={styles.weekEntryEarnings}>{formatGhc(entry.totalEarnings)}</div>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.weekFooter}>
        <span className={styles.weekFooterText}>{t("seeFullPodium")}</span>
        <span className={styles.weekFooterArrow} aria-hidden="true">→</span>
      </div>
    </Link>
  );
}
