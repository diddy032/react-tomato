import Head from "next/head";
import styles from "../styles/Home.module.sass";
import Clock from "../components/Clock";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tomato Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>番茄鐘</h1> */}
        <Clock />
        <Navbar />
        
      </main>

    </div>
  );
}
