import { useState, useEffect } from "react";
import Image from "next/image";
import NavbarContainer from "../Shared/NavbarContainer";
import styles from "./styles/index.module.sass";
const data = [
  {
    id: "001",
    title: "My First Task",
    data: "",
    time: 4,
  },
  {
    id: "002",
    title: "My Second Task",
    data: "",
    time: 2,
  },
  {
    id: "003",
    title: "My Third Task",
    data: "",
    time: 3,
  },
  {
    id: "004",
    title: "My Fourth Task",
    data: "",
    time: 3,
  },
  {
    id: "005",
    title: "My Fifth Task",
    data: "",
    time: 2,
  },
  {
    id: "006",
    title: "My Sixth Task",
    data: "",
    time: 1,
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
                <a href="#" onClick={(e) => editＴaskItem(e)} key={index}>
                  <li>
                    <div className={styles["task-item-frame"]}>
                      <div className={styles["task-item-header"]}>
                        <div>
                          <div className={styles["task-title"]}>
                            {item.title}
                          </div>
                        </div>
                        <div className={styles["btn-more"]}>
                          <Image
                            src="/images/icons/icon-more.svg"
                            alt="更多"
                            width={15}
                            height={15}
                          />
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
