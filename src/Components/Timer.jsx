import React from "react";

export default (props) => {
  const formatMinutes = seconds =>
    String(Math.floor(seconds / 60).toFixed(0)).padStart(2, 0);

  return (
    <div className="flex flex-col justify-center items-center border-4 rounded-lg border-gray-700 p-2 w-1/2">
      <div className="text-2xl" id="timer-label">
        {props.isSession ? "Session" : "Break"}
      </div>
      <div className="text-6xl display" id="time-left">
        {`${formatMinutes(props.time)}:${new Date(props.time * 1000)
          .toISOString()
          .substr(17, 2)}`}
      </div>
    </div>
  );
};


