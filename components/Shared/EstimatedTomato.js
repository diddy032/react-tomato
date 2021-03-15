import { useState, useEffect } from "react";
import styles from "./styles/estimatedTomato.module.sass";
export default function EstimatedTomato({ taskTime, setTaskTime }) {
  const totalTime = 8;
  const [tomatoArr, setTomatoArr] = useState([]);
  useEffect(() => {
    function tomatoList() {
      let arr = [];
      for (let i = 1; i < totalTime + 1; i++) {
        i <= taskTime ? arr.push(true) : arr.push(false);
      }
      setTomatoArr(arr);
    }
    tomatoList();
  }, [taskTime]);
  return (
    <>
      <div className={styles["list-title"]}>ESTIMATED TOMATO</div>
      <div className={styles["tomato-list"]}>
        {tomatoArr.map((item, index) => (
          <button
            className={styles[item ? "active" : "origin"]}
            key={index}
            onClick={() => setTaskTime(index + 1)}
          />
        ))}
      </div>
    </>
  );
}
