import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Icon } from "@iconify/react";
import StrikeTimer from "../components/StrikeTimer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strike-Timer</title>
        <link rel="icon" href="/alarm-clock.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.brand}>
          <span>Strike</span> Timer
        </h1>

        <StrikeTimer />
      </main>

      <footer>
        <div className={styles.footer}>
          <a href="https://www.facebook.com/" target="_blank">
            <Icon
              className={styles.iconFooter}
              icon="iconoir:facebook-squared"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Icon
              className={styles.iconFooter}
              icon="akar-icons:instagram-fill"
            />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <Icon className={styles.iconFooter} icon="jam:twitter-square" />
          </a>
        </div>
        <p className={styles.brandFooter}>©️ Gissell 🦊</p>
      </footer>
    </div>
  );
}
