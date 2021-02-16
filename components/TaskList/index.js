import styles from "./styles/index.module.sass";
const data = [
  {
    title: "My First Task",
    data: "",
    time: 4,
  },
  {
    title: "My Second Task",
    data: "",
    time: 2,
  },
  {
    title: "My Third Task",
    data: "",
    time: 3,
  },
  {
    title: "My Fourth Task",
    data: "",
    time: 3,
  },
  {
    title: "My Fifth Task",
    data: "",
    time: 2,
  },
  {
    title: "My Sixth Task",
    data: "",
    time: 1,
  },
];
export default function Indexs() {
  return (
    <div id={styles["task-list"]}>
      <div className={styles["title"]}>TASK LISTS</div>
      <div className={styles["content"]}>
        <div className={styles["tab-wrap"]}>
          <button className={styles["active"]}>TO DO</button>
          <button>DONE</button>
        </div>
        <div className={styles["list-frame"]}>
          <ul>
            {data.length > 0
              ? data.map((item, index) => (
                  <a href="">
                    <li key={index}>
                      <div>
                        <div>{item.title}</div>
                        <div>ooo</div>
                      </div>
                      <div>...</div>
                    </li>
                  </a>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}
