import { getTranslations } from "next-intl/server";
import styles from "./privacy-page.module.scss";

const SECTION_KEYS = [
  "introduction",
  "informationCollected",
  "advertising",
  "dataUsage",
  "dataSecurity",
  "thirdParty",
  "yourRights",
  "contact",
  "changes",
] as const;

const LIST_SECTIONS: Record<string, string[]> = {
  informationCollected: [
    "googleSignIn",
    "gameplayData",
    "analytics",
    "localStorage",
  ],
  dataUsage: ["provide", "sync", "improve", "ads", "analyze"],
  thirdParty: ["googleSignIn", "adsense", "firebase"],
  yourRights: ["deletion", "optOut", "clearData", "access"],
};

export async function PrivacyContent() {
  const t = await getTranslations("PrivacyPage");

  return (
    <section className={styles.content}>
      <div className="container">
        {SECTION_KEYS.map((key) => (
          <div key={key} className="mb-5">
            <h2 className={styles.sectionTitle}>
              {t(`sections.${key}.title`)}
            </h2>

            {key === "introduction" && (
              <>
                <p className={styles.paragraph}>
                  {t("sections.introduction.welcome")}
                </p>
                <p className={styles.paragraph}>
                  {t("sections.introduction.agreement")}
                </p>
              </>
            )}

            {key === "informationCollected" && (
              <>
                {LIST_SECTIONS.informationCollected.map((sub) => (
                  <div key={sub} className="mb-3">
                    <p className={styles.highlight}>
                      {t(
                        `sections.informationCollected.${sub}.title`
                      )}
                    </p>
                    <p className={styles.paragraph}>
                      {t(
                        `sections.informationCollected.${sub}.description`
                      )}
                    </p>
                    {sub === "googleSignIn" && (
                      <ul className={styles.list}>
                        {(
                          ["email", "displayName", "photoUrl"] as const
                        ).map((item) => (
                          <li key={item}>
                            {t(
                              `sections.informationCollected.googleSignIn.items.${item}`
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    {sub === "gameplayData" && (
                      <ul className={styles.list}>
                        {(
                          [
                            "progress",
                            "routes",
                            "earnings",
                            "upgrades",
                          ] as const
                        ).map((item) => (
                          <li key={item}>
                            {t(
                              `sections.informationCollected.gameplayData.items.${item}`
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </>
            )}

            {key === "advertising" && (
              <>
                <p className={styles.paragraph}>
                  {t("sections.advertising.description")}
                </p>
                <p className={styles.paragraph}>
                  {t("sections.advertising.cookies")}{" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {t("sections.advertising.learnMore")}
                  </a>
                </p>
              </>
            )}

            {key === "dataUsage" && (
              <>
                <p className={styles.paragraph}>
                  {t("sections.dataUsage.description")}
                </p>
                <ul className={styles.list}>
                  {LIST_SECTIONS.dataUsage.map((item) => (
                    <li key={item}>
                      {t(`sections.dataUsage.items.${item}`)}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {key === "dataSecurity" && (
              <>
                <p className={styles.paragraph}>
                  {t("sections.dataSecurity.storage")}
                </p>
                <p className={styles.paragraph}>
                  {t("sections.dataSecurity.security")}
                </p>
                <p className={`${styles.paragraph} ${styles.highlight}`}>
                  {t("sections.dataSecurity.noSell")}
                </p>
              </>
            )}

            {key === "thirdParty" && (
              <>
                <p className={styles.paragraph}>
                  {t("sections.thirdParty.description")}
                </p>
                <ul className={styles.list}>
                  {LIST_SECTIONS.thirdParty.map((service) => (
                    <li key={service}>
                      <span className={styles.highlight}>
                        {t(
                          `sections.thirdParty.services.${service}.name`
                        )}
                      </span>
                      {" — "}
                      {t(
                        `sections.thirdParty.services.${service}.description`
                      )}{" "}
                      <a
                        href={t(
                          `sections.thirdParty.services.${service}.url`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        {t(
                          `sections.thirdParty.services.${service}.link`
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {key === "yourRights" && (
              <>
                <p className={styles.paragraph}>
                  {t("sections.yourRights.description")}
                </p>
                <ul className={styles.list}>
                  {LIST_SECTIONS.yourRights.map((right) => (
                    <li key={right}>
                      <span className={styles.highlight}>
                        {t(
                          `sections.yourRights.items.${right}.title`
                        )}
                      </span>
                      {" — "}
                      {t(
                        `sections.yourRights.items.${right}.description`
                      )}
                    </li>
                  ))}
                </ul>
              </>
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

            {key === "changes" && (
              <p className={styles.paragraph}>
                {t("sections.changes.description")}
              </p>
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
