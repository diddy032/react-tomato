import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/Navbar.module.sass";
export default function Indexs() {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <div id={styles["navbar"]}>
      <div className={styles["nav-list"]}>
        <button>
          <Image
            src="/images/icons/add_white.svg"
            alt=""
            width={80}
            height={80}
          />
        </button>
        <button>
          <Image
            src="/images/icons/list_white.svg"
            alt=""
            width={80}
            height={80}
          />
        </button>
        <button>
          <Image
            src="/images/icons/analysis_white.svg"
            alt=""
            width={80}
            height={80}
          />
        </button>
        <button>
          <Image
            src="/images/icons/ringtone_white.svg"
            alt=""
            width={80}
            height={80}
          />
        </button>
      </div>
      <button className={styles["nav-button"]}>
        <Image
          src="/images/icons/tomato_small_color.svg"
          alt=""
          width={25}
          height={25}
        />
        <Image src="/images/icons/arrow.svg" alt="" width={25} height={25} />
      </button>
    </div>
  );
}
