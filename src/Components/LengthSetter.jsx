import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const LengthSetter = props => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div
        className="text-xl"
        id={`${props.title.toLowerCase()}-label`}
      >{`${props.title} Length`}</div>
      <div className="flex justify-center items center">
        <div id={`${props.title.toLowerCase()}-decrement`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className="px-2" id={`${props.title.toLowerCase()}-length`}>
          5
        </div>
        <div id={`${props.title.toLowerCase()}-increment`}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
    </div>
  );
};

export default LengthSetter;
