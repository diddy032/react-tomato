import { useState, useEffect } from "react";
import Image from "next/image";
import NavbarContainer from "../shared/NavbarContainer";
import styles from "./styles/index.module.sass";
const data = [
  {
    id: "001",
    title: "Ring tone 1",
  },
  {
    id: "002",
    title: "Ring tone 2",
  },
  {
    id: "003",
    title: "Ring tone 3",
  },
  {
    id: "004",
    title: "Ring tone 4",
  },
  {
    id: "005",
    title: "Ring tone 5",
  },
  {
    id: "006",
    title: "Ring tone 6",
  },
];
export default function Indexs() {
  return (
    <NavbarContainer title={"RING TONE"}>
      <div className={styles["tab-wrap"]}>
        <button className={styles["active"]}>WORK</button>
        <button>BREAK</button>
      </div>
      <div className={styles["list-frame"]}>
        <ul>
          {data.length > 0
            ? data.map((item, index) => (
                <a href="#" key={index}>
                  <li>
                    <div className={styles["task-item-frame"]}>
                      <div className={styles["task-item-header"]}>
                        <div>
                          <div className={styles["task-title"]}>
                            {item.title}
                          </div>
                        </div>
                        <div className={styles["btn-more"]}>
                          {/* <Image
                            src="/images/icons/icon-more.svg"
                            alt="更多"
                            width={15}
                            height={15}
                          /> */}
                        </div>
                      </div>
                    </div>
                  </li>
                </a>
              ))
            : null}
        </ul>
      </div>
    </NavbarContainer>
  );
}
