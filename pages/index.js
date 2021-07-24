import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.sass";
import HomeIndex from "../components/home";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tomato Clock</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* <main className={styles.main}>
        <HomeIndex />
      </main> */}
      <HomeIndex />
    </div>
  );
}
