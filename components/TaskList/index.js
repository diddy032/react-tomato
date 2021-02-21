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
                      <div>
                        <div>{item.title}</div>
                        <div>ooo</div>
                        <div>
                          <div>TASK TITLE</div>
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
                          <div>
                            <button>Archive</button>
                            <button>SAVE</button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Image
                          src="/images/icons/icon-more.svg"
                          alt="更多"
                          width={15}
                          height={15}
                        />
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
