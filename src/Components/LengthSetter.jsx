import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 mb-4">
      <div
        className="text-xl"
        id={`${props.title.toLowerCase()}-label`}
      >{`${props.title} Length`}</div>
      <div className="flex justify-center items-center">
        <button
          className="focus:outline-none"
          id={`${props.title.toLowerCase()}-decrement`}
          onClick={() => props.changeHandler(props.state - 1)}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <div
          className="mx-3 w-4 text-center"
          id={`${props.title.toLowerCase()}-length`}
        >
          {props.state}
        </div>
        <button
          className="focus:outline-none"
          id={`${props.title.toLowerCase()}-increment`}
          onClick={() => props.changeHandler(props.state + 1)}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
    </div>
  );
};
