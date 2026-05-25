import { GAME_URL } from "@/lib/constants";
import type { StatTile } from "@/types/launch-thank-you";
import styles from "./launch-thank-you.module.scss";

const STATS: StatTile[] = [
  {
    label: "Mates",
    value: "214",
    detail: "Signed up to hustle",
    accent: "yellow",
    rotation: "r1",
  },
  {
    label: "Runs",
    value: "312",
    detail: "Trotro routes completed",
    accent: "red",
    rotation: "r2",
  },
  {
    label: "Earnings",
    value: "GHC 148K",
    detail: "Collected across the streets",
    accent: "blue",
    rotation: "r3",
  },
  {
    label: "Routes",
    value: "13",
    detail: "Unique journeys hustled",
    accent: "green",
    rotation: "r1",
  },
];

export function LaunchThankYou() {
  return (
    <section className={styles.page}>
      <div className={styles.halftone} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={styles.sticker}>
          <span className={styles.dot} />
          Launch recap
        </span>

        <h1 className={styles.title}>
          Thank <em>you</em>.
        </h1>

        <p className={styles.tagline}>
          We launched <u>Salifu &amp; Master</u> last week. You showed up.
          You hustled. You posted. You DM&apos;d screenshots. You made the
          first week feel like a station on a Friday evening.
        </p>

        <div className={styles.stats}>
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`${styles.statcard} ${styles[s.accent]} ${styles[s.rotation]}`}
            >
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statDetail}>{s.detail}</div>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          This is just the first week. The map is bigger. The master has more
          to say. The mates have more routes. More cities. More chaos. We&apos;re
          still building.
        </p>

        <a href={GAME_URL} className={styles.cta}>
          Play the game
        </a>

        <p className={styles.signoff}>
          Made with all the jollof,
          <br />
          <strong>Joojo</strong>
        </p>
      </div>

      <div className={styles.stripe} aria-hidden="true" />
    </section>
  );
}
