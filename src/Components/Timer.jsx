import React from "react";

const Timer = props => {
  return (
    <div className="flex flex-col justify-center items-center border-4 rounded-lg border-gray-700 p-2">
      <div className="text-2xl" id="timer-label">Session</div>
      <div className="text-6xl display" id= "time-left">25:00</div>
    </div>
  );
};

export default Timer;
