import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faUndo } from "@fortawesome/free-solid-svg-icons";

const Controls = (props) => {
    return(
<div className="flex items-center justify-center">
        <div className="p-4" id="start_stop"><FontAwesomeIcon icon = {faPlay}/> </div>
        <div className = "p-4" id = "reset"><FontAwesomeIcon icon = {faUndo}/></div>
      </div>
    )
}

export default Controls