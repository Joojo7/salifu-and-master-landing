import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import styles from "./terms-page.module.scss";

const SECTION_KEYS = [
  "acceptance",
  "gameDescription",
  "accountsAndData",
  "intellectualProperty",
  "userConduct",
  "advertising",
  "disclaimer",
  "limitation",
  "changes",
  "contact",
] as const;

const LIST_SECTIONS: Record<string, string[]> = {
  accountsAndData: ["googleSignIn", "gameplayData", "deletion"],
  userConduct: [
    "noExploits",
    "noReverseEngineer",
    "noHarassment",
    "noMisrepresent",
  ],
};

export async function TermsContent() {
  const t = await getTranslations("TermsPage");
  const locale = await getLocale();

  return (
    <section className={styles.content}>
      <div className="container">
        {SECTION_KEYS.map((key) => (
          <div key={key} className="mb-5">
            <h2 className={styles.sectionTitle}>
              {t(`sections.${key}.title`)}
            </h2>

            {key === "acceptance" && (
              <p className={styles.paragraph}>
                {t("sections.acceptance.description")}
              </p>
            )}

            {key === "gameDescription" && (
              <p className={styles.paragraph}>
                {t("sections.gameDescription.description")}
              </p>
            )}

            {key === "accountsAndData" && (
              <>
                <p className={styles.paragraph}>
                  {t("sections.accountsAndData.description")}
                </p>
                <ul className={styles.list}>
                  {LIST_SECTIONS.accountsAndData.map((item) => (
                    <li key={item}>
                      {t(`sections.accountsAndData.items.${item}`)}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {key === "intellectualProperty" && (
              <p className={styles.paragraph}>
                {t("sections.intellectualProperty.description")}
              </p>
            )}

            {key === "userConduct" && (
              <>
                <p className={styles.paragraph}>
                  {t("sections.userConduct.description")}
                </p>
                <ul className={styles.list}>
                  {LIST_SECTIONS.userConduct.map((item) => (
                    <li key={item}>
                      {t(`sections.userConduct.items.${item}`)}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {key === "advertising" && (
              <>
                <p className={styles.paragraph}>
                  {t("sections.advertising.description")}
                </p>
                <p className={styles.paragraph}>
                  {t("sections.advertising.privacy")}{" "}
                  <Link
                    href={`/${locale}/privacy`}
                    className={styles.link}
                  >
                    {t("sections.advertising.privacyLink")}
                  </Link>
                </p>
              </>
            )}

            {key === "disclaimer" && (
              <p className={styles.paragraph}>
                {t("sections.disclaimer.description")}
              </p>
            )}

            {key === "limitation" && (
              <p className={styles.paragraph}>
                {t("sections.limitation.description")}
              </p>
            )}

            {key === "changes" && (
              <p className={styles.paragraph}>
                {t("sections.changes.description")}
              </p>
            )}

            {key === "contact" && (
              <>
                <p className={styles.paragraph}>
                  {t("sections.contact.description")}
                </p>
                <a
                  href="mailto:designblox00@gmail.com"
                  className={styles.contactEmail}
                >
                  designblox00@gmail.com
                </a>
              </>
            )}
          </div>
        ))}

        <p className={styles.paragraph}>
          {t("lastUpdated", { date: "March 16, 2026" })}
        </p>
      </div>
    </section>
  );
}
