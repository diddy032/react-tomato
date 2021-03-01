import styles from './styles/estimatedTomato.module.sass'
export default function EstimatedTomato(props) {
  return (
    <>
      <div className={styles['list-title']}>ESTIMATED TOMATO</div>
      <div className={styles["tomato-list"]}>
        <img src="/images/icons/tomato_small_color.svg" alt="" />
        <img src="/images/icons/tomato_small_color.svg" alt="" />
        <img src="/images/icons/tomato_small_gray.svg" alt="" />
        <img src="/images/icons/tomato_small_gray.svg" alt="" />
        <img src="/images/icons/tomato_small_gray.svg" alt="" />
        <img src="/images/icons/tomato_small_gray.svg" alt="" />
        <img src="/images/icons/tomato_small_gray.svg" alt="" />
        <img src="/images/icons/tomato_small_gray.svg" alt="" />
        <img src="/images/icons/tomato_small_gray.svg" alt="" />
        <img src="/images/icons/tomato_small_gray.svg" alt="" />
      </div>
    </>
  );
}
