import React from 'react'
import styles from './HomeStyles.module.css'
import Social from './Social'
import Data from './Data'

function Home() {
  return (
    <section className={`${styles.home} ${styles.section}`} id="home">
      <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
        <div className={`${styles.home__content} ${styles.grid}`}>
          <Social />

          <div className={styles.home__img}></div>

        </div>
      </div>
    </section>
  )
}

export default Home