"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { readConsent, writeConsent } from "@/lib/consent";
import type { ConsentStatus } from "@/types/consent";
import styles from "./cookie-banner.module.scss";

export function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (status: ConsentStatus) => {
    writeConsent(status);
    setVisible(false);
  };

  return (
    <div className={styles.wrap} role="dialog" aria-live="polite" aria-label={t("title")}>
      <div className={styles.card}>
        <div className={styles.body}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.text}>{t("body")}</p>
        </div>
        <div className={styles.actions}>
          <Link href={`/${locale}/privacy`} className={styles.learnMore}>
            {t("learnMore")}
          </Link>
          <button type="button" className={styles.reject} onClick={() => decide("rejected")}>
            {t("reject")}
          </button>
          <button type="button" className={styles.accept} onClick={() => decide("accepted")}>
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
