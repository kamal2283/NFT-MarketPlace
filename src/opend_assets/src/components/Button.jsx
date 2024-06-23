import React,{useEffect,useState} from "react";


function Button(porps){
    return(
        <div className="Chip-root makeStyles-chipBlue-108 Chip-clickable">
        <span
          onClick={porps.handleClick}
          className="form-Chip-label"
        >
          {porps.text}
        </span>
        </div>
    )
}

export default Button;