import { useState, useEffect } from "react";
import Image from "next/image";
import AddTask from "../AddTask";
import TaskList from "../TaskList";
import Analutics from "../Analytics";
import RingTone from "../RingTone";
import styles from "./styles/Navbar.module.sass";
export default function Indexs() {
  const [openNavbar, setOpenNavbar] = useState(false);
  console.log("openNavbar:", openNavbar);
  return (
    <>
      <div
        id={styles["navbar"]}
        className={openNavbar ? styles["open-navbar"] : null}
      >
        <div className={styles["nav-list"]}>
          <button>
            <Image
              src="/images/icons/add_white.svg"
              alt="增加"
              width={80}
              height={80}
            />
          </button>
          <button>
            <Image
              src="/images/icons/list_white.svg"
              alt="列表"
              width={80}
              height={80}
            />
          </button>
          <button>
            <Image
              src="/images/icons/analysis_white.svg"
              alt="分析"
              width={80}
              height={80}
            />
          </button>
          <button>
            <Image
              src="/images/icons/ringtone_white.svg"
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
              src="/images/icons/arrow.svg"
              alt="箭頭"
            />
          </button>
        </div>
        {openNavbar ? <AddTask /> : null}
      </div>
    </>
  );
}
