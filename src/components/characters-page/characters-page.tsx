import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CHARACTER_KEYS, CHARACTER_DATA } from "@/lib/constants";
import styles from "./characters-page.module.scss";

export async function CharactersContent() {
  const t = await getTranslations("CharactersPage");

  return (
    <section className={styles.content}>
      <div className="container">
        {CHARACTER_KEYS.map((key, index) => {
          const data = CHARACTER_DATA[key];
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={key}
              className={`row align-items-center mb-5 ${isReversed ? "flex-row-reverse" : ""}`}
            >
              <div className="col-12 col-md-4 text-center">
                <div
                  className={styles.portrait}
                  style={
                    { "--accent": data.accentColor } as React.CSSProperties
                  }
                >
                  <Image
                    src={data.image}
                    alt={t(`characters.${key}.name`)}
                    width={200}
                    height={240}
                  />
                </div>
              </div>
              <div className="col-12 col-md-8">
                <h2 className={styles.name}>
                  {t(`characters.${key}.name`)}
                </h2>
                <p className={styles.role}>
                  {t(`characters.${key}.role`)}
                </p>
                <p className={styles.paragraph}>
                  {t(`characters.${key}.backstory`)}
                </p>
                <h3 className={styles.gameplayTitle}>In the Game</h3>
                <p className={styles.paragraph}>
                  {t(`characters.${key}.gameplay`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
