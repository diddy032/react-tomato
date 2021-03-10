import { useState, useEffect } from "react";
import NavbarContainer from "../Shared/NavbarContainer";
import EstimatedTomato from "../../components/Shared/EstimatedTomato";
import styles from "./styles/index.module.sass";
export default function Indexs() {
  const [taskData, setTaskData] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskTime, setTaskTime] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("TaskDataArray"));
    if (data) {
      setTaskData(data);
    } else {
      setTaskData([]);
    }
  }, []);

  const handleSaveTaskData = () => {
    let saveObj = {
      title: taskTitle,
      time: taskTime,
    };
    taskData.push(saveObj);
    console.log("taskData:", taskData, "\nsaveObj", saveObj);
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
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <EstimatedTomato />
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
