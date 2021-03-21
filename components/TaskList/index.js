import { useState, useEffect } from "react";
import Image from "next/image";
import NavbarContainer from "../Shared/NavbarContainer";
import EstimatedTomato from "../../components/Shared/EstimatedTomato";
import styles from "./styles/index.module.sass";
// const data = [
//   {
//     id: "001",
//     title: "My First Task",
//     data: "",
//     time: 4,
//   },
//   {
//     id: "002",
//     title: "My Second Task",
//     data: "",
//     time: 2,
//   },
//   {
//     id: "003",
//     title: "My Third Task",
//     data: "",
//     time: 3,
//   },
//   {
//     id: "004",
//     title: "My Fourth Task",
//     data: "",
//     time: 3,
//   },
//   {
//     id: "005",
//     title: "My Fifth Task",
//     data: "",
//     time: 2,
//   },
//   {
//     id: "006",
//     title: "My Sixth Task",
//     data: "",
//     time: 1,
//   },
// ];
export default function Indexs({ data, saveData }) {
  const saveＴaskItem = (saveObj) => {
    console.log("save function");
    let arr = data.forEach((item, index) => {
      if (itme.title === saveObj.title) data[index] = saveObj;
    });
    console.log("arr:", arr);
    // saveData(arr);
  };
  return (
    <NavbarContainer title={"TASK LISTS"}>
      <div className={styles["tab-wrap"]}>
        <button className={styles["active"]}>TO DO</button>
        <button>DONE</button>
      </div>
      <div className={styles["list-frame"]}>
        <ul>
          {data.length > 0
            ? data.map((item, index) => (
                <a href="#" key={index}>
                  <li>{toggleItem(item, saveＴaskItem)}</li>
                </a>
              ))
            : null}
        </ul>
      </div>
    </NavbarContainer>
  );
}

const toggleItem = (data, saveＴaskItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState(data.title);
  const [taskTime, setTaskTime] = useState(data.time);

  // const [isArchive, setArchive] = useState(data.isArchive);

  const saveTaskItem = (e) => {
    e.preventDefault();
    console.log("taskTime:", taskTime, "\ntaskTitle:", taskTitle);
    let saveObj = {
      title: taskTitle,
      time: taskTime,
    };

    saveＴaskItem(saveObj);
  };

  return (
    <div className={styles["task-item-frame"]}>
      <div
        className={styles["task-item-header"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <div className={styles["task-title"]}>{data.title}</div>
          <div className={styles["task-time"]}>ooo</div>
        </div>
        <div
          className={styles["btn-more"]}
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0)" }}
        >
          <Image
            src="/images/icons/icon-more.svg"
            alt="更多"
            width={15}
            height={15}
          />
        </div>
      </div>
      {isOpen && (
        <div className={styles["task-info"]}>
          <div className={styles["task-input-label"]}>TASK TITLE</div>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <EstimatedTomato taskTime={taskTime} setTaskTime={setTaskTime} />
          <div className={styles["btn-wrap"]}>
            <button className={styles["btn-archive"]}>Archive</button>
            <button
              className={styles["btn-save"]}
              onClick={(e) => saveTaskItem(e)}
            >
              SAVE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
