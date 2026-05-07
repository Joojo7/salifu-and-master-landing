import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GALLERY_TILES } from "@/lib/landing-data";
import styles from "./screenshot-gallery.module.scss";

export async function ScreenshotGallery() {
  const t = await getTranslations("ScreenshotGallery");

  return (
    <section className={styles.gallery}>
      <div className="container">
        <div className={styles.head}>
          <div className="head-l">
            <span className="kicker">{t("kicker")}</span>
            <h2>{t("title")}</h2>
            <p>{t("sub")}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {GALLERY_TILES.map((tile) => (
            <div key={tile.key} className={`${styles.tile} ${styles[`tile${tile.area}`]}`}>
              <Image src={tile.img} alt={t(`tiles.${tile.key}`)} fill sizes="50vw" />
              <span className={styles.cap}>{t(`tiles.${tile.key}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
