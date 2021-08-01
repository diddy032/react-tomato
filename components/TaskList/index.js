import { useState, useEffect } from "react";
import Image from "next/image";
import NavbarContainer from "../shared/NavbarContainer";
import EstimatedTomato from "../shared/EstimatedTomato";
import ToDoToggle from "./toDoToggle";
import DoneToggle from "./doneToggle";
import ArchiveToggle from "./archiveToggle";
import styles from "./styles/index.module.sass";

// TaskStatus
// 0 ===  TODO
// １===  Done
// 2  ===  Archive

export default function Indexs(props) {
  const { data, setData, activeItem, setActiveItem } = props;
  const [toDoArr, seToDoArr] = useState([]);
  const [doneArr, seDoneArr] = useState([]);
  const [archiveArr, seArchiveArr] = useState([]);
  const [nowStatusTag, setNowStatusTag] = useState(0);

  useEffect(() => {
    const toDoArr = data.filter((i) => i.TaskStatus === 0);
    const doneArr = data.filter((i) => i.TaskStatus === 1);
    const archiveArr = data.filter((i) => i.TaskStatus === 2);
    seToDoArr(toDoArr);
    seDoneArr(doneArr);
    seArchiveArr(archiveArr);
  }, []);

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

  const tabStatusContent = (value) => {
    switch (value) {
      case 0:
        return toDoArr.length > 0 ? (
          toDoArr.map((item, index) => (
            <li key={index}>
              <ToDoToggle
                data={item}
                activeID={activeItem.ID}
                saveＴaskItem={saveＴaskItem}
                setActiveItem={setActiveItem}
              />
            </li>
          ))
        ) : (
          <li className={styles["no-data"]}>No Data</li>
        );
      case 1:
        // return (
        //   <li>
        //     <DoneToggle
        //       data={toDoArr[0]}
        //       saveＴaskItem={saveＴaskItem}
        //       setActiveItem={setActiveItem}
        //     />
        //   </li>
        // );
        return doneArr.length > 0 ? (
          doneArr.map((item, index) => (
            <li key={index}>
              <DoneToggle
                data={item}
                saveＴaskItem={saveＴaskItem}
                setActiveItem={setActiveItem}
              />
            </li>
          ))
        ) : (
          <li className={styles["no-data"]}>No Data</li>
        );
      case 2:
        // return (
        //   <li>
        //     <ArchiveToggle
        //       data={toDoArr[0]}
        //       saveＴaskItem={saveＴaskItem}
        //       setActiveItem={setActiveItem}
        //     />
        //   </li>
        // );
        return archiveArr.length > 0 ? (
          archiveArr.map((item, index) => (
            <li key={index}>
              <ArchiveToggle
                data={item}
                saveＴaskItem={saveＴaskItem}
                setActiveItem={setActiveItem}
              />
            </li>
          ))
        ) : (
          <li className={styles["no-data"]}>No Data</li>
        );
      default:
        return toDoArr.length > 0 ? (
          toDoArr.map((item, index) => (
            <li key={index}>
              <ToDoToggle
                data={item}
                activeID={activeItem.ID}
                saveＴaskItem={saveＴaskItem}
                setActiveItem={setActiveItem}
              />
            </li>
          ))
        ) : (
          <li className={styles["no-data"]}>No Data</li>
        );
    }
  };

  console.log("Tasklist index", "\ndata:", data);
  return (
    <NavbarContainer title={"TASK LISTS"}>
      <div className={styles["tab-wrap"]}>
        <button
          className={styles[nowStatusTag === 0 ? "active" : ""]}
          onClick={() => setNowStatusTag(0)}
        >
          TO DO
        </button>
        <button
          className={styles[nowStatusTag === 1 ? "active" : ""]}
          onClick={() => setNowStatusTag(1)}
        >
          DONE
        </button>
        <button
          className={styles[nowStatusTag === 2 ? "active" : ""]}
          onClick={() => setNowStatusTag(2)}
        >
          Archive
        </button>
      </div>
      <div className={styles["list-frame"]}>
        <ul>{tabStatusContent(nowStatusTag)}</ul>
      </div>
    </NavbarContainer>
  );
}
