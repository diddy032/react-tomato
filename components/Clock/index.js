import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles/index.module.sass";
export default function Indexs({ data, saveData }) {
  const [activeItem, setActive] = useState({});
  useEffect(() => {
    if (data.length === 0) return;
    let item = data.filter((e) => e.IsArchive);
    item.length > 0 ? setActive(item[0]) : setActive(data[0]);
  }, [data]);
  console.log("時鐘：", "\ndata:", data);
  console.log("activeItem:", activeItem);

  return (
    <div className={styles["clock-wrap"]}>
      {activeItem ? (
        <div className={styles["clock-info"]}>
          <div className={styles["task-name"]}>
            {activeItem?.TaskName ?? "-"}
          </div>
          <div>circle</div>
          <div className={styles["btn-wrap"]}>
            <button className={styles["icon-start"]}>
              <span>START</span>
            </button>
            <button className={styles["icon-stop"]}>
              <span>STOP</span>
            </button>
            <button className={styles["icon-reset"]}>
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
