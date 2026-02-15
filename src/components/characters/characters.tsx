import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  CHARACTER_KEYS,
  CHARACTER_DATA,
  CHARACTERS_BANNER_SRC,
} from "@/lib/constants";
import styles from "./characters.module.scss";

export async function Characters() {
  const t = await getTranslations("Characters");

  return (
    <section id="characters" className={styles.section}>
      <Image
        src={CHARACTERS_BANNER_SRC}
        alt="Amelia and Serwaa at the market"
        fill
        className={styles.bgImage}
      />
      <div className={styles.overlay} />

      <div className="container position-relative text-center">
        <h2 className={styles.heading}>{t("title")}</h2>

        <div className="row g-4 justify-content-center">
          {CHARACTER_KEYS.map((key) => {
            const data = CHARACTER_DATA[key];
            return (
              <div key={key} className="col-6 col-md-3">
                <div
                  className={styles.card}
                  style={
                    { "--accent": data.accentColor } as React.CSSProperties
                  }
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={data.image}
                      alt={t(`characters.${key}.name`)}
                      width={200}
                      height={240}
                    />
                  </div>
                  <h3 className={styles.name}>
                    {t(`characters.${key}.name`)}
                  </h3>
                  <p className={styles.role}>
                    {t(`characters.${key}.role`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
