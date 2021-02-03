import Image from "next/image";
import styles from "./styles/Clock.module.sass";
export default function Indexs() {
  return (
    <div className={styles["clock-wrap"]}>
      <div className={styles["logo-bg"]}>
        <h1>PODOMORO</h1>
      </div>

      <div className={styles["content-text"]}>
        You don't have any task now. <br />
        please add task first!
      </div>
      <div className={styles["footer-text"]}>PODOMORO</div>
    </div>
  );
}
