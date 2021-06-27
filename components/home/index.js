import { useState, useEffect } from "react";
import Clock from "../clock";
import Navbar from "../navbar";

export default function HomeIndex() {
  const [data, setData] = useState([]);
  const [activeItem, setActiveItem] = useState({});
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("TaskDataArray"));
    getData ? setData(getData) : setData([]);
    getData?.length > 0 && setActiveItem(getData[0]);
  }, []);

  useEffect(() => {
    if (data.length < 0) return;
    localStorage.setItem("TaskDataArray", JSON.stringify(data));
  }, [data]);

  console.log("HomeIndex data:", data, "\nactiveItem:", activeItem);
  return (
    <>
      <Clock
        data={data}
        setData={setData}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <Navbar
        data={data}
        setData={setData}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </>
  );
}
