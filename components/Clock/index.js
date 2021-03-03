import Image from "next/image";
import styles from "./styles/index.module.sass";
export default function Indexs() {
  return (
    <div className={styles["clock-wrap"]}>
      <div style={{ display: "none" }}>
        <div className={styles["logo-bg"]}>
          <h1>PODOMORO</h1>
        </div>
        <div className={styles["content-text"]}>
          You don't have any task now. <br />
          please add task first!
        </div>
      </div>

      <div className={styles["clock-info"]}>
        <div className={styles["task-name"]}>My First Task</div>
        <div>circle</div>
        <div className={styles["btn-wrap"]}>
          <button>
            <Image
              src="/images/icons/start_gray.svg"
              alt="開始"
              width={60}
              height={60}
            />
          </button>
          <button>
            <Image
              src="/images/icons/stop_gray.svg"
              alt="暫停"
              width={50}
              height={50}
            />
          </button>
          <button>
            <Image
              src="/images/icons/reset_gray.svg"
              alt="重新"
              width={50}
              height={50}
            />
          </button>
        </div>
        <div className={styles["task-note"]}>TASK COMPLETE</div>
      </div>
      <div className={styles["footer-text"]}>PODOMORO</div>
    </div>
  );
}
