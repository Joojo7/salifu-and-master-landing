import { useTranslations } from "next-intl";
import styles from "./top-ticker.module.scss";

export function TopTicker() {
  const t = useTranslations("TopTicker");
  const text = t("text");

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
