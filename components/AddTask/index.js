import styles from "./styles/AddTask.module.sass";
export default function Indexs() {
  return (
    <div id={styles["add-task"]}>
      <div className={styles["title"]}>ADD NEW TASK</div>
      <label for="input-task" htmlFor="">
        TASK TITLE
      </label>
      <input id="input-task" type="text" placeholder="My Task" />
      <p>ESTIMATED TOMOTO</p>

      <button>ADD TASK</button>
    </div>
  );
}
