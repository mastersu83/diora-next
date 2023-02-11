import React from "react";
import styles from "./Menu.module.scss";
import Link from "next/link";

const Menu = () => {
  const isAuth = false;
  return (
    <ul className={styles.menu}>
      <Link href="/" className={styles.menu__activeLink}>
        <li className={`${styles.menu__link} `}>ГЛАВНАЯ</li>
      </Link>
      <Link href="clothes" className={styles.menu__activeLink}>
        <li className={styles.menu__link}>НАРЯДНАЯ ОДЕЖДА</li>
      </Link>
      <Link href="others-cloth" className={styles.menu__activeLink}>
        <li className={styles.menu__link}>КОНВЕРТЫ, ПЛЕДЫ, КОРЗИНЫ</li>
      </Link>
      <Link href="contact" className={styles.menu__activeLink}>
        <li className={styles.menu__link}>КОНТАКТЫ</li>
      </Link>
      {!isAuth ? (
        <Link href="login" className={styles.menu__activeLink}>
          <li className={styles.menu__link}>ВОЙТИ</li>
        </Link>
      ) : (
        <Link href="admin-panel" className={styles.menu__activeLink}>
          <li className={styles.menu__link}>АДМИН ПАНЕЛЬ</li>
        </Link>
      )}
    </ul>
  );
};

export default Menu;
