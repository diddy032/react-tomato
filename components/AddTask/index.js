import { useState, useEffect } from "react";
import NavbarContainer from "../shared/NavbarContainer";
import EstimatedTomato from "../shared/EstimatedTomato";
import styles from "./styles/index.module.sass";
export default function Indexs({ data, saveData }) {
  const [taskData, setTaskData] = useState(data);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskTime, setTaskTime] = useState(1);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("TaskDataArray"));
  //   data ? setTaskData(data) : setTaskData([]);
  // }, []);

  const handleSaveTaskData = (e) => {
    e.preventDefault();
    if (taskTitle.length === 0) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    let saveObj = {
      TaskName: taskTitle,
      TaskDate: new Date(),
      TaskCount: taskTime,
      IsArchive: false,
      IsDone: false,
      ArchiveTime: 0,
      FinishCount: 0,
    };
    taskData.push(saveObj);
    setTaskData(taskData);
    saveData(taskData);

    setTaskTitle("");
    setTaskTime(1);

    localStorage.setItem("TaskDataArray", JSON.stringify(taskData));
  };
  // console.log("task data:", data, "\ntaskData:", taskData);

  return (
    <NavbarContainer title={"ADD NEW TASK"}>
      <div className={styles["content"]}>
        <label htmlFor="input-task">TASK TITLE</label>
        <input
          id="input-task"
          type="text"
          placeholder="My Task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        {error && <div>此為必填欄位</div>}
        <EstimatedTomato taskTime={taskTime} setTaskTime={setTaskTime} />
      </div>
      <button
        className={styles["add-btn"]}
        onClick={(e) => handleSaveTaskData(e)}
      >
        ADD TASK
      </button>
    </NavbarContainer>
  );
}
