import NavbarContainer from "../Shared/NavbarContainer";
import EstimatedTomato from "../../components/Shared/EstimatedTomato";
import styles from "./styles/index.module.sass";
export default function Indexs() {
  return (
    <NavbarContainer title={"ADD NEW TASK"}>
      <div className={styles["content"]}>
        <label htmlFor="input-task">TASK TITLE</label>
        <input id="input-task" type="text" placeholder="My Task" />
        <EstimatedTomato />
      </div>
      <button className={styles["add-btn"]}>ADD TASK</button>
    </NavbarContainer>
  );
}
