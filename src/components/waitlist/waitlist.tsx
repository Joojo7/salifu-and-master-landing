"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./waitlist.module.scss";

export function Waitlist() {
  const t = useTranslations("Waitlist");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || t("errorFallback"));
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : t("errorFallback")
      );
    }
  };

  if (status === "success") {
    return (
      <section id="waitlist" className="section">
        <div className="container text-center">
          <div className={styles.successState}>
            <span className={styles.successIcon}>{t("successIcon")}</span>
            <h2 className={styles.successTitle}>{t("successTitle")}</h2>
            <p className={styles.successMessage}>{t("successMessage")}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="section">
      <div className="container text-center">
        <h2 className="section-title mb-2">{t("title")}</h2>
        <p className="section-subtitle mb-4">{t("subtitle")}</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("placeholder")}
              required
              className={styles.input}
              disabled={status === "loading"}
            />
            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === "loading"}
            >
              {status === "loading" ? t("loadingButton") : t("submitButton")}
            </button>
          </div>

          {status === "error" && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
        </form>

        <p className={styles.privacy}>{t("privacy")}</p>
      </div>
    </section>
  );
}
