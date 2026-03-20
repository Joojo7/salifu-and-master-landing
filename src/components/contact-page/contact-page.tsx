import { getTranslations } from "next-intl/server";
import styles from "./contact-page.module.scss";

const CONTACT_METHODS = ["email", "twitter"] as const;

export async function ContactContent() {
  const t = await getTranslations("ContactPage");

  return (
    <section className={styles.content}>
      <div className="container">
        <p className={styles.paragraph}>{t("intro")}</p>

        <div className={styles.methods}>
          {CONTACT_METHODS.map((method) => (
            <div key={method} className={styles.card}>
              <h3 className={styles.cardTitle}>{t(`methods.${method}.label`)}</h3>
              <a
                href={t(`methods.${method}.href`)}
                target={method === "twitter" ? "_blank" : undefined}
                rel={method === "twitter" ? "noopener noreferrer" : undefined}
                className={styles.cardLink}
              >
                {t(`methods.${method}.display`)}
              </a>
              <p className={styles.cardDescription}>
                {t(`methods.${method}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h2 className={styles.sectionTitle}>{t("feedback.title")}</h2>
          <p className={styles.paragraph}>{t("feedback.description")}</p>
        </div>
      </div>
    </section>
  );
}
