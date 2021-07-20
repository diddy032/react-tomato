import { useState, useEffect } from "react";
import Image from "next/image";
import NavbarContainer from "../shared/NavbarContainer";
import EstimatedTomato from "../shared/EstimatedTomato";
import styles from "./styles/index.module.sass";

export default function Indexs(props) {
  const { data, setData, activeItem, setActiveItem } = props;
  const saveＴaskItem = (saveObj) => {
    let arr = data.map((item, index) => {
      if (item.ID === saveObj.ID) {
        data[index].TaskName = saveObj.TaskName;
        data[index].TaskCount = saveObj.TaskCount;
      }
      return item;
    });
    console.log("saveＴaskItem arr:", arr);
    setData(arr);
    // localStorage.setItem("TaskDataArray", JSON.stringify(arr));
  };

  console.log("Tasklist index", "\ndata:", data);
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
                  <li>
                    {toggleItem(
                      item,
                      saveＴaskItem,
                      activeItem.ID,
                      setActiveItem
                    )}
                  </li>
                </a>
              ))
            : null}
        </ul>
      </div>
    </NavbarContainer>
  );
}

const toggleItem = (data, saveＴaskItem, activeID, setActiveItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState(data.TaskName);
  const [taskTime, setTaskTime] = useState(data.TaskCount);

  const saveTaskItem = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let saveObj = {
      TaskName: taskTitle,
      TaskCount: taskTime,
    };
    let newData = { ...data, ...saveObj };
    saveＴaskItem(newData);
  };

  const handleChangeActive = (e, obj) => {
    e.stopPropagation();
    setActiveItem(obj);
  };

  return (
    <div className={styles["task-item-frame"]}>
      <div
        className={styles["task-item-header"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={styles["active-item"]}
          onClick={(e) => handleChangeActive(e, data)}
        >
          {activeID === data.ID && (
            <div className={styles["active-item-img"]}>
              <img src="/images/icons/tomato_small_color.svg" alt="番茄圖片" />
            </div>
          )}
        </div>

        <div className={styles["task-title-frame"]}>
          <div className={styles["task-title"]}>{data.TaskName}</div>
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
