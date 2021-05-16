import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./styles/index.module.sass";
export default function Indexs({ data, saveData }) {
  const activeMins = 25;
  const [activeItem, setActive] = useState({});
  const [lastSecs, setLastSecs] = useState(activeMins * 60);
  const [isStart, setIsStart] = useState(false);

  const countRef = useRef(null);

  useEffect(() => {
    if (data.length === 0) return;
    let item = data.filter((e) => e.IsArchive);
    item.length > 0 ? setActive(item[0]) : setActive(data[0]);
  }, [data]);

  useEffect(() => {
    if (lastSecs < 1) {
      clearInterval(countRef.current);
      setIsStart(false);
    }
  }, [lastSecs]);

  console.log("時鐘：", "\ndata:", data);
  console.log("activeItem:", activeItem);

  const handleStardTime = () => {
    if (isStart === true) {
      // clearInterval(countRef.current);
      // setIsStart(false);
      stopTimer();
    }
    // Else, lastSecs is inactive => START
    else if (lastSecs > 1) {
      setIsStart(true);
      countRef.current = setInterval(() => {
        setLastSecs((lastSecs) => lastSecs - 1);
      }, 1000);
    }
  };

  const handleReset = () => {
    stopTimer();
    // clearInterval(countRef.current);
    // setIsStart(false);
    setLastSecs(activeMins * 60);
  };

  const stopTimer = () => {
    clearInterval(countRef.current);
    setIsStart(false);
  };

  const handleDecrease = () => {
    setLastSecs(lastSecs - 60);
  };

  const handleIncrement = () => {
    setLastSecs(lastSecs + 60);
  };

  const formatTime = () => {
    const getSeconds = `0${lastSecs % 60}`.slice(-2);
    const minutes = `${Math.floor(lastSecs / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className={styles["clock-wrap"]}>
      {activeItem ? (
        <div className={styles["clock-info"]}>
          <div className={styles["task-name"]}>
            {/* {activeItem?.TaskName ?? "-"} */}
            {formatTime()}
          </div>
          <div>circle</div>
          <div className={styles["btn-wrap"]}>
            <button
              className={`${styles["icon-start"]} ${styles[isStart ? 'active' :'']}`}
              onClick={() => handleStardTime()}
              disabled={isStart}
            >
              <span>START</span>
            </button>
            <button
              className={styles["icon-stop"]}
              onClick={() => handleStardTime()}
              disabled={!isStart}
            >
              <span>STOP</span>
            </button>
            <button
              className={styles["icon-reset"]}
              onClick={() => handleReset()}
            >
              <span>RESET</span>
            </button>
          </div>
          <div className={styles["task-note"]}>TASK COMPLETE</div>
        </div>
      ) : (
        <div>
          <div className={styles["logo-bg"]}>
            <h1>PODOMORO</h1>
          </div>
          <div className={styles["content-text"]}>
            You don't have any task now. <br />
            please add task first!
          </div>
        </div>
      )}

      <div className={styles["footer-text"]}>PODOMORO</div>
    </div>
  );
}
