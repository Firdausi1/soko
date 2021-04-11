import React from "react";
import clsx from 'clsx';

function DropDown(){
    return <div className="btn-group">
    <button className="btn  btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Small button
    </button>
    <ul className="dropdown-menu">
      ...
    </ul>
  </div>
}

export default DropDown