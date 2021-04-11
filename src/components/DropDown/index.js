import React from "react";
import clsx from 'clsx';
import style from "./style.module.css"

function DropDown(){
    return <div className="btn-group dropstart">
    <button className={clsx(style.border,"btn"  ,"btn-sm" ,"dropdown-toggle")} type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Filter
    </button>
    <ul className="dropdown-menu">
      ...
    </ul>
  </div>
}

export default DropDown