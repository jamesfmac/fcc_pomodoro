import React, { useState } from "react";

import LengthSetter from "./LengthSetter";
import Controls from "./Controls";
import Timer from "./Timer";

export default () => {
  const initialTime = 25 * 60;

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(initialTime);
  const [counter, setCounter] = useState(null);
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
      setTime(newLength * 60);

      return;
    }
  };

  const startTimer = () => {
    setCounter(setInterval(() => tick(), 1000));
    setIsRunning(true);
  };

  const tick = () => {
    setTime(time=>time - 1);
  
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(counter);
    setCounter(null);
  };

  const handleReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    pauseTimer();
    setTime(25 * 60);
  };

  console.log(time)
  if (time === 0) {
    console.log("Zero");
    setTime(isSession ? breakLength * 60 : sessionLength * 60);

    setTimeout(setIsSession(!isSession), 2000);
  }

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
        <Timer time={time} isSession={isSession} />
      </div>
      <Controls
        resetHandler={handleReset}
        timeRunning={isRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
      />
      <audio
        id="beep"
        preload="auto"
        src="https://goo.gl/65cBl1"
        
      />
    </div>
  );
};
