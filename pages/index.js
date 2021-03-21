import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.sass";
import Clock from "../components/Clock";
import Navbar from "../components/Navbar";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("TaskDataArray"));
    data && setData(data);
  }, []);

  // useEffect(() => {
  //   console.log("hi~");
  //   if (data.length === 0) return;
  //   console.log("useEffect data:", data);
  //   localStorage.setItem("TaskDataArray", JSON.stringify(data));
  // }, [data, setData]);
  console.log("index data:", data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tomato Clock</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <Clock />
        <Navbar data={data} saveData={setData} />
      </main>
    </div>
  );
}
