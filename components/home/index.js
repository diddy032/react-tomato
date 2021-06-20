import { useState, useEffect } from "react";
import Clock from "../clock";
import Navbar from "../navbar";

export default function HomeIndex() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("TaskDataArray"));
    getData ? setData(getData) : setData([]);
  }, []);

  useEffect(() => {
    if (data.length < 0) return;
    localStorage.setItem("TaskDataArray", JSON.stringify(data));
  }, [data]);

  console.log("HomeIndex data:", data);
  return (
    <>
      <Clock data={data} setData={setData} />
      <Navbar data={data} setData={setData} />
    </>
  );
}
