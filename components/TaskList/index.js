import Image from "next/image";
import styles from "./styles/index.module.sass";
const data = [
  {
    id: "001",
    title: "My First Task",
    data: "",
    time: 4,
  },
  {
    id: "002",
    title: "My Second Task",
    data: "",
    time: 2,
  },
  {
    id: "003",
    title: "My Third Task",
    data: "",
    time: 3,
  },
  {
    id: "004",
    title: "My Fourth Task",
    data: "",
    time: 3,
  },
  {
    id: "005",
    title: "My Fifth Task",
    data: "",
    time: 2,
  },
  {
    id: "006",
    title: "My Sixth Task",
    data: "",
    time: 1,
  },
];
export default function Indexs() {
  const editＴaskItem = (e) => {
    console.log("hi");
  };
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
                  <a href="#" onClick={(e) => editＴaskItem(e)} key={index}>
                    <li>
                      <div className={styles["task-item-frame"]}>
                        <div className={styles["task-item-header"]}>
                          <div>
                            <div className={styles["task-title"]}>
                              {item.title}
                            </div>
                            <div className={styles["task-time"]}>ooo</div>
                          </div>
                          <div>
                            <Image
                              src="/images/icons/icon-more.svg"
                              alt="更多"
                              width={15}
                              height={15}
                            />
                          </div>
                        </div>
                        <div className={styles["task-info"]}>
                          <div className={styles["task-input-label"]}>
                            TASK TITLE
                          </div>
                          <input type="text" placeholder="My Second Task" />
                          <div>ESTIMATED TOMOTO</div>
                          <div>
                            <img
                              src="/images/icons/tomato_small_color.svg"
                              alt=""
                            />
                            <img
                              src="/images/icons/tomato_small_color.svg"
                              alt=""
                            />
                            <img
                              src="/images/icons/tomato_small_gray.svg"
                              alt=""
                            />
                            <img
                              src="/images/icons/tomato_small_gray.svg"
                              alt=""
                            />
                            <img
                              src="/images/icons/tomato_small_gray.svg"
                              alt=""
                            />
                            <img
                              src="/images/icons/tomato_small_gray.svg"
                              alt=""
                            />
                            <img
                              src="/images/icons/tomato_small_gray.svg"
                              alt=""
                            />
                            <img
                              src="/images/icons/tomato_small_gray.svg"
                              alt=""
                            />
                            <img
                              src="/images/icons/tomato_small_gray.svg"
                              alt=""
                            />
                            <img
                              src="/images/icons/tomato_small_gray.svg"
                              alt=""
                            />
                          </div>
                          <div className={styles["btn-wrap"]}>
                            <button className={styles["btn-archive"]}>
                              Archive
                            </button>
                            <button className={styles["btn-save"]}>SAVE</button>
                          </div>
                        </div>
                      </div>
                     
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
