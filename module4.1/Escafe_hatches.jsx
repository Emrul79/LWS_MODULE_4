import React from "react";

export default function Escafe_hatches() {
  const [startTime, setStartTime] = React.useState(0);
  const [now, setNow] = React.useState(0);
  const intervelStatus = React.useRef(null);

  const handleTimeStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    intervelStatus.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const handleTimeStop = () => {
    clearInterval(intervelStatus.current);
  };
  let timePassed = 0;
  if (startTime !== null && now !== null) {
    timePassed = (now - startTime) / 1000;
  }
  return (
    <div>
      <button className="bg-blue-500 p-5 mr-2" onClick={handleTimeStart}>
        Start
      </button>
      <button className="bg-blue-500 p-5" onClick={handleTimeStop}>
        stop
      </button>
      <p className="p-5 bg-amber-300 ">{timePassed.toFixed(3)}</p>
    </div>
  );
}
