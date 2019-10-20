import React from "react";

import LengthSetter from "./LengthSetter";
import Controls from "./Controls";
import Timer from "./Timer";

const Clock = () => {
  return (
    <div className="flex flex-col shadow-md p-2 text-white">
      <div className="text-xl text-center text-6xl"> Pomodoro Clock</div>
      <div className="flex items-center justify-around">
        <LengthSetter title="Break" />
        <LengthSetter title="Session" />
      </div>
      <div className="flex items-center justify-center">
        <Timer />
      </div>
      <Controls />
    </div>
  );
};

export default Clock;
