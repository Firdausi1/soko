import clsx from "clsx"
import React from "react"
import style from "./style.module.css"
function SideNav() {
    
  return (
    <div className={style.background}>
      <ul className={clsx(style.clear, style.pointer, style.nav)}>
        <li className={style.group}>
          <i className={clsx("bi bi-card-text", style.icon)}></i>
          <span className={style.icon__text}>My Order</span>
        </li>

        <li className={style.group}>
          <i className={clsx("bi bi-card-text", style.icon)}></i>
          <span className={style.icon__text}>My Addresses</span>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
