"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { NAV_PAGE_LINKS, NAV_LOGO_SRC, GAME_URL } from "@/lib/constants";
import styles from "./nav.module.scss";

export function Nav() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [scrolled, setScrolled] = useState(!isHomePage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href={`/${locale}`} className={styles.logo}>
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
          {NAV_PAGE_LINKS.map((link) => (
            <a
              key={link.href}
              href={`/${locale}${link.href}`}
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

        <a href={GAME_URL} className={styles.ctaMobile}>
          {t("play")}
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
    </nav>
  );
}
