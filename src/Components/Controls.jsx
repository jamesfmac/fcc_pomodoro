import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faUndo } from "@fortawesome/free-solid-svg-icons";

export default  (props) => {
  return (
    <div className="flex items-center justify-center">
      {props.timeRunning ? (
        <button className=" focus:outline-none p-4" id="start_stop" onClick={props.pauseTimer}>
          <FontAwesomeIcon icon={faPause} />
        </button>
      ) : (
        <button className=" focus:outline-none p-4" id="start_stop" onClick={props.startTimer}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      )}
      <button
        className="focus:outline-none"
        id="reset"
        onClick={() => props.resetHandler()}
      >
        <FontAwesomeIcon icon={faUndo} />
      </button>
    </div>
  );
};

