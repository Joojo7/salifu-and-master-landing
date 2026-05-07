"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { NAV_PAGE_LINKS, NAV_LOGO_SRC, GAME_URL } from "@/lib/constants";
import styles from "./nav.module.scss";

export function Nav() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href={`/${locale}`} className={styles.brand}>
          <Image src={NAV_LOGO_SRC} alt={t("logo")} width={46} height={46} />
          <b>{t("logo")}</b>
        </a>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ""}`} aria-label="Primary">
          <button className={styles.close} onClick={closeMenu} aria-label="Close menu">
            ✕
          </button>
          {NAV_PAGE_LINKS.map((link) => (
            <a key={link.href} href={`/${locale}${link.href}`} onClick={closeMenu}>
              {t(link.key)}
            </a>
          ))}
        </nav>

        <a href={GAME_URL} className={styles.cta}>
          {t("play")} →
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
