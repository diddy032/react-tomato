import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./styles/index.module.sass";
export default function Indexs({ data, saveData }) {
  const activeMins = 25;
  const [activeItem, setActive] = useState({});
  const [lastSecs, setLastSecs] = useState(activeMins * 60);
  const [isStart, setIsStart] = useState(false);
  const [chartE1, setCahartE1] = useState();
  const [totalPercentage, setTotalPercentage] = useState(100);

  const countRef = useRef(null);

  useEffect(() => {
    (async () => {
      const ChartRes = await import("react-apexcharts");
      setCahartE1(ChartRes);
    })();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    let item = data.filter((e) => e.IsArchive);
    item.length > 0 ? setActive(item[0]) : setActive(data[0]);
  }, [data]);

  useEffect(() => {
    if (lastSecs < 1) {
      clearInterval(countRef.current);
      setIsStart(false);
    }
  }, [lastSecs]);

  // console.log("時鐘：", "\ndata:", data);
  console.log("totalPercentage:", totalPercentage);

  const handleStardTime = () => {
    if (isStart === true) {
      // clearInterval(countRef.current);
      // setIsStart(false);
      stopTimer();
    }
    // Else, lastSecs is inactive => START
    else if (lastSecs > 1) {
      setIsStart(true);
      countRef.current = setInterval(() => {
        setLastSecs((lastSecs) => lastSecs - 1);
      }, 1000);
    }
  };

  const handleReset = () => {
    stopTimer();
    // clearInterval(countRef.current);
    // setIsStart(false);
    setLastSecs(activeMins * 60);
  };

  const stopTimer = () => {
    clearInterval(countRef.current);
    setIsStart(false);
  };

  const handleDecrease = () => {
    setLastSecs(lastSecs - 60);
  };

  const handleIncrement = () => {
    setLastSecs(lastSecs + 60);
  };

  const formatTime = () => {
    const getSeconds = `0${lastSecs % 60}`.slice(-2);
    const minutes = `${Math.floor(lastSecs / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    const percentage = (
      (100 * totalSeconds(`${getMinutes} : ${getSeconds}`)) /
      totalSeconds(`${activeMins} : 00`)
    ).toFixed(0);
    console.log("percentage:", percentage);
    // setTotalPercentage(percentage);
    return `${getMinutes} : ${getSeconds}`;
  };
  const totalSeconds = (time) => {
    var parts = time.split(":");
    return parts[0] * 3600 + parts[1] * 60;
  };

  return (
    <div className={styles["clock-wrap"]}>
      {activeItem ? (
        <div className={styles["clock-info"]}>
          <div className={styles["task-name"]}>
            {/* {activeItem?.TaskName ?? "-"} */}
            {/* {formatTime()} */}
          </div>
          <div className={styles["chart-frame"]}>
            {chartE1 && (
              <chartE1.default
                type="radialBar"
                series={[formatTime()]}
                // series={[50]}
                // series={[totalPercentage]}
                width="500px"
                options={{
                  chart: {
                    height: 30,
                  },
                  plotOptions: {
                    radialBar: {
                      hollow: {
                        margin: 0,
                        size: "50%",
                        background: "#fff",
                      },
                      track: {
                        background: "#acacac",
                      },
                      dataLabels: {
                        name: {
                          show: false,
                        },
                        value: {
                          // formatter: function (val) {
                          //   return val;
                          // },
                          // formatter: () => {
                          //   return formatTime();
                          // },
                          formatter: (val) => val,
                          // formatter: function (
                          //   value,
                          //   { seriesIndex, dataPointIndex, w }
                          // ) {
                          //   return (
                          //     w?.config?.series[seriesIndex]?.name +
                          //     ":  " +
                          //     value
                          //   );
                          // },
                          fontSize: "30px",
                          color: "#333333",
                          show: true,
                        },
                      },
                    },
                  },
                  labels: ["Cricket"],
                }}
              />
            )}
          </div>

          <div className={styles["btn-wrap"]}>
            <button
              className={`${styles["icon-start"]} ${
                styles[isStart ? "active" : ""]
              }`}
              onClick={() => handleStardTime()}
              disabled={isStart}
            >
              <span>START</span>
            </button>
            <button
              className={styles["icon-stop"]}
              onClick={() => handleStardTime()}
              disabled={!isStart}
            >
              <span>STOP</span>
            </button>
            <button
              className={styles["icon-reset"]}
              onClick={() => handleReset()}
            >
              <span>RESET</span>
            </button>
          </div>
          <div className={styles["task-note"]}>TASK COMPLETE</div>
        </div>
      ) : (
        <div>
          <div className={styles["logo-bg"]}>
            <h1>PODOMORO</h1>
          </div>
          <div className={styles["content-text"]}>
            You don't have any task now. <br />
            please add task first!
          </div>
        </div>
      )}

      <div className={styles["footer-text"]}>PODOMORO</div>
    </div>
  );
}
