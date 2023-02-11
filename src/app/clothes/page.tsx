import React from "react";
import styles from "./page.module.scss";
import boyImage from "../../assets/IMG_6391.jpg";
import girlImage from "../../assets/IMG_6607.JPG.jpg";
import Link from "next/link";
import Image from "next/image";

const getImages = async () => {
  const res = await fetch("https://apidiorakids.ru/api/images");

  return await res.json();
};

const Clothes = async () => {
  const images = await getImages();

  return (
    <div className={styles.clothes}>
      <p className={styles.clothes__title}>Нарядная одежда для новорожденных</p>
      <div className={styles.clothes__items}>
        <div className={styles.clothes__item}>
          <Image
            width={231}
            className={styles.clothes__img}
            src={girlImage}
            alt=""
          />
          <Link href="/girl-cloth">
            <button
              className={`${styles.clothes__girlImgBtn} ${styles.clothes__btn}`}
            >
              Для девочек
            </button>
          </Link>
        </div>
        <div className={styles.clothes__item}>
          <Image
            width={231}
            className={styles.clothes__img}
            src={boyImage}
            alt=""
          />
          <Link href="/boy-cloth">
            <button
              className={`${styles.clothes__boyImgBtn} ${styles.clothes__btn}`}
            >
              Для мальчиков
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
