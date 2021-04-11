import React from "react";
import clsx from 'clsx';
import style from "./style.module.css"

function DropDown(){
    const items = ["High to Low","New Release"]

    function DropDownItem({name}){
        return  <li className={clsx("dropdown-item",style.pointer)}>{name}</li>
    }

    return <div className={clsx("btn-group",style.border,style.space)}>
    <button type="button" className="btn btn-sm  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span className="visually-hidden">Toggle Dropdown</span>
    </button>
    <button className="btn btn-sm bold_text" type="button">
      Filters
    </button>
    
    <ul className="dropdown-menu">
            {items.map((item)=><DropDownItem name={item}/>)}
   
    </ul>
  </div>
    
    



}

//     <div className="btn-group dropstart">
//     <button className={clsx(style.border,"btn"  ,"btn-sm" ,"dropdown-toggle")} type="button" data-bs-toggle="dropdown" aria-expanded="false">
//       Filter
//     </button>
//     <ul className="dropdown-menu">
//       ...
//     </ul>
//   </div>



export default DropDown