import { useState, useEffect } from "react";
import NavbarContainer from "../Shared/NavbarContainer";
import EstimatedTomato from "../../components/Shared/EstimatedTomato";
import styles from "./styles/index.module.sass";
export default function Indexs() {
  const [taskData, setTaskData] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskTime, setTaskTime] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("TaskDataArray"));
    data ? setTaskData(data) : setTaskData([]);
  }, []);

  const handleSaveTaskData = () => {
    if (taskTitle.length === 0) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    let saveObj = {
      title: taskTitle,
      time: taskTime,
    };
    taskData.push(saveObj);
    setTaskTitle("");
    setTaskTime(1);
    // console.log("taskData:", taskData, "\nsaveObj", saveObj);
    localStorage.setItem("TaskDataArray", JSON.stringify(taskData));
  };

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
        onClick={() => handleSaveTaskData()}
      >
        ADD TASK
      </button>
    </NavbarContainer>
  );
}
