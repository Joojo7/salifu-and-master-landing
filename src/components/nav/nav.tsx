"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { NAV_LINK_HREFS, NAV_LOGO_SRC, GAME_URL } from "@/lib/constants";
import styles from "./nav.module.scss";

export function Nav() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#" className={styles.logo}>
          <Image
            src={NAV_LOGO_SRC}
            alt={t("logo")}
            width={80}
            height={30}
            className={styles.logoImage}
          />
        </a>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <button
            className={styles.close}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {NAV_LINK_HREFS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={handleLinkClick}
            >
              {t(link.key)}
            </a>
          ))}
          <a
            href={GAME_URL}
            className={styles.cta}
            onClick={handleLinkClick}
          >
            {t("play")}
          </a>
        </div>

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
    </nav>
  );
}
