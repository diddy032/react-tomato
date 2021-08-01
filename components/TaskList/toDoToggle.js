import { useEffect, useState } from "react";
import Image from "next/image";
import EstimatedTomato from "../shared/EstimatedTomato";
import styles from "./styles/index.module.sass";

export default function ToDoToggle(props) {
  const { data, saveＴaskItem, activeID, setActiveItem } = props;

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
        tabIndex="0"
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
}
