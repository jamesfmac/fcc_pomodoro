import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faUndo } from "@fortawesome/free-solid-svg-icons";

const Controls = props => {
  return (
    <div className="flex items-center justify-center">
      <button className=" focus:outline-none p-4" id="start_stop">
        <FontAwesomeIcon icon={props.timeRunning ? faPause : faPlay} />{" "}
      </button>
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

export default Controls;
