import styles from "./styles/index.module.sass";
export default function Indexs() {
  return (
    <div id={styles["add-task"]}>
      <div className={styles["title"]}>ADD NEW TASK</div>
      <div className={styles["content"]}>
        <label for="input-task" htmlFor="">
          TASK TITLE
        </label>
        <input id="input-task" type="text" placeholder="My Task" />
        <label htmlFor="">ESTIMATED TOMOTO</label>
        <div className={styles["tomato-list"]}>
          <img src="/images/icons/tomato_small_color.svg" alt="" />
          <img src="/images/icons/tomato_small_color.svg" alt="" />
          <img src="/images/icons/tomato_small_gray.svg" alt="" />
          <img src="/images/icons/tomato_small_gray.svg" alt="" />
          <img src="/images/icons/tomato_small_gray.svg" alt="" />
          <img src="/images/icons/tomato_small_gray.svg" alt="" />
          <img src="/images/icons/tomato_small_gray.svg" alt="" />
          <img src="/images/icons/tomato_small_gray.svg" alt="" />
          <img src="/images/icons/tomato_small_gray.svg" alt="" />
          <img src="/images/icons/tomato_small_gray.svg" alt="" />
        </div>
      </div>

      <button className={styles["add-btn"]}>ADD TASK</button>
    </div>
  );
}
