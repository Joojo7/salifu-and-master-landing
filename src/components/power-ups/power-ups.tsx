import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { POWER_UPS } from "@/lib/landing-data";
import styles from "./power-ups.module.scss";

export async function PowerUps() {
  const t = await getTranslations("PowerUps");
  const locale = await getLocale();

  return (
    <section className={styles.powerups} id="power-ups">
      <div className="container">
        <div className={styles.head}>
          <div className="head-l">
            <span className="kicker">{t("kicker")}</span>
            <h2>{t("title")}</h2>
            <p>{t("sub")}</p>
          </div>
          <div className="head-r">
            <Link href={`/${locale}/how-to-play`} className={styles.learnMore}>
              {t("learnMore")} →
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {POWER_UPS.map((id) => (
            <div key={id} className={styles.tile}>
              <Image
                src={`/consumable-icons/${id}.svg`}
                alt=""
                width={84}
                height={84}
              />
              <h4>{t(`items.${id}.name`)}</h4>
              <p>{t(`items.${id}.desc`)}</p>
            </div>
          ))}
          <Link href={`/${locale}/how-to-play`} className={`${styles.tile} ${styles.tileMore}`}>
            <Image
              src="/consumable-icons/iron-stomach.svg"
              alt=""
              width={84}
              height={84}
              style={{ opacity: 0.4 }}
            />
            <h4>{t("more.title")}</h4>
            <p>{t("more.desc")}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
