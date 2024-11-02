import React from 'react'
import styles from './HeaderStyles.module.css';


function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.container}`}
      >
        <a href="index.html" className={styles.nav__logo}>Jerald</a>

        <div className={styles.nav__menu}>
          <ul className={`${styles.nav__list} ${styles.grid}`}>

            <li className={styles.nav__item}>
              <a href="#home" className={`${styles.nav__link} ${styles.active__link}`}>
                <i className={`uil uil-estate ${styles.nav__icon}`}></i> Home
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#about" className={styles.nav__link}>
                <i className={`uil uil-user ${styles.nav__icon}`}></i> About
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#skills" className={styles.nav__link}>
                <i className={`uil uil-file-alt ${styles.nav__icon}`}></i> Skills
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#services" className={styles.nav__link}>
                <i className={`uil uil-briefcase-alt ${styles.nav__icon}`}></i> Services
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#portfolio" className={styles.nav__link}>
                <i className={`uil uil-scenery ${styles.nav__icon}`}></i> Portfolio
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#contact" className={styles.nav__link}>
                <i className={`uil uil-message ${styles.nav__icon}`}></i> Contact
              </a>
            </li>
          </ul>
          <i className={`uil uil-times ${styles.nav__close}`}></i>
        </div>
        <div className={styles.nav__toggle}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header