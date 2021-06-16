import { useState, useEffect } from "react";
import Clock from "../clock";
import Navbar from "../navbar";

export default function HomeIndex() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("TaskDataArray"));
    data && setData(data);
  }, []);
  // useEffect(() => {
  //   console.log("hi~");
  //   if (data.length === 0) return;
  //   console.log("useEffect data:", data);
  //   localStorage.setItem("TaskDataArray", JSON.stringify(data));
  // }, [data, setData]);
  console.log("index data:", data);
  return (
    <>
      <Clock data={data} saveData={setData} />
      <Navbar data={data} saveData={setData} />
    </>
  );
}
