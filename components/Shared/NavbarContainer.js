import styles from "./styles/navbarContainer.module.sass";
export default function NavbarContainer(props) {
  const { children, title } = props;
  return (
    <div className={styles["container-wrap"]}>
      <div className={styles["title"]}>{title}</div>
      <div className={styles["content"]}>{children}</div>
    </div>
  );
}
