import React, { useState, useRef } from "react";

import LengthSetter from "./LengthSetter";
import Controls from "./Controls";
import Display from "./Display";

const Clock = () => {
  const initialTime = 25 * 60;

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(initialTime);
  const [counter, setCounter] = useState(null);
  const [isSession, setIsSession] = useState(true);

  

  let audioBeep = useRef();

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
    setTime(time => time - 1);
    console.log(audioBeep.current)
    
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
    setIsSession(true);
    audioBeep.current.pause();
    audioBeep.current.currentTime = 0;
  };

//don't love this approach 

  if (time < 0) {
    setTime(isSession ? breakLength * 60 : sessionLength * 60);
    setIsSession(!isSession);
    audioBeep.current.play();
  }

  return (
    <div className="flex flex-col p-2 text-white">
      <div className="text-center text-6xl"> Pomodoro Clock</div>
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
        <Display time={time} isSession={isSession} />
      </div>
      <Controls
        resetHandler={handleReset}
        timeRunning={isRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
      />
      <audio id="beep" preload="auto" src="https://goo.gl/65cBl1"
      ref={audioBeep}
      />
    </div>
  );
};

export default Clock;
