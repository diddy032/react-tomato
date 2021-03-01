import { useState, useEffect } from "react";
import Image from "next/image";
import AddTask from "../AddTask";
import TaskList from "../TaskList";
import Analutics from "../Analytics";
import RingTone from "../RingTone";
import styles from "./styles/index.module.sass";
export default function Indexs() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [NavbarTab, setNavbarTab] = useState(-1);

  const handsChangTab = (tab) => {
    if (!openNavbar) setOpenNavbar(true);
    setNavbarTab(tab);
  };

  const handsReturnTab = () => {
    if (NavbarTab === 0) return <AddTask />;
    if (NavbarTab === 1) return <TaskList />;
    if (NavbarTab === 2) return <Analutics />;
    if (NavbarTab === 3) return <RingTone />;
    if (NavbarTab === -1) return <AddTask />;
  };

  return (
    <>
      <div
        id={styles["navbar"]}
        className={openNavbar ? styles["open-navbar"] : null}
      >
        <div className={styles["nav-list"]}>
          <button onClick={() => handsChangTab(0)}>
            <Image
              src={`/images/icons/add_${NavbarTab === 0 ? "red" : "white"}.svg`}
              alt="增加"
              width={80}
              height={80}
            />
          </button>
          <button onClick={() => handsChangTab(1)}>
            <Image
              src={`/images/icons/list_${
                NavbarTab === 1 ? "red" : "white"
              }.svg`}
              alt="列表"
              width={80}
              height={80}
            />
          </button>
          <button onClick={() => handsChangTab(2)}>
            <Image
              src={`/images/icons/analysis_${
                NavbarTab === 2 ? "red" : "white"
              }.svg`}
              alt="分析"
              width={80}
              height={80}
            />
          </button>
          <button onClick={() => handsChangTab(3)}>
            <Image
              src={`/images/icons/ringtone_${
                NavbarTab === 3 ? "red" : "white"
              }.svg`}
              alt="鈴聲"
              width={80}
              height={80}
            />
          </button>
          <button
            className={styles["nav-button"]}
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            <Image
              src="/images/icons/tomato_small_color.svg"
              alt="小番茄"
              width={25}
              height={25}
            />
            <img
              className={styles["icon-arrow"]}
              style={{
                transform: openNavbar ? "rotate(-180deg)" : "rotate(0)",
              }}
              src="/images/icons/arrow.svg"
              alt="箭頭"
            />
          </button>
        </div>
        <div className={styles[openNavbar ? "show-navbar" : "close-navbar"]}>
          {openNavbar && handsReturnTab()}
        </div>
      </div>
    </>
  );
}
