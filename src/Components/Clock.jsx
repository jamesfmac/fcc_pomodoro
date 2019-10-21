import React, { useState } from "react";

import LengthSetter from "./LengthSetter";
import Controls from "./Controls";
import Timer from "./Timer";

const Clock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(25);
  const [isSession, setIsSession] = useState(true);

  const handleBreakLength = newLength => {
    if (isRunning) {
      return;
    }
    if (newLength >= 1 && newLength <= 60) {
      setBreakLength(newLength);
    }
    return;
  };

  const handleSessionLength = newLength => {
    if (isRunning) {
      return;
    }
    if (newLength >= 1 && newLength <= 60) {
      setSessionLength(newLength);
      setTime(newLength);

      return;
    }
  };

  const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setTime(25);
  };

  return (
    <div className="flex flex-col p-2 text-white">
      <div className="text-xl text-center text-6xl"> Pomodoro Clock</div>
      <div className="flex items-center justify-around">
        <LengthSetter
          changeHandler={handleBreakLength}
          state={breakLength}
          title="Break"
        />
        <LengthSetter
          changeHandler={handleSessionLength}
          state={sessionLength}
          title="Session"
        />
      </div>
      <div className="flex items-center justify-center">
        <Timer time={time} />
      </div>
      <Controls resetHandler={handleReset} timeRunning={isRunning} />
    </div>
  );
};

export default Clock;
