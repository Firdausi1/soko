import React from "react"
import Card from "../Card"
import "../../App.css"
import style from "./style.module.css"
import clsx from "clsx"
import DropDown from "../DropDown"

function UserAcc() {
  return (
    <div className={clsx("container border", style.inner_space, style.gap)}>
      <div className="row">
        <div className="col px-4">One of three columns</div>
        <div className="col-sm-12 col-md-9">
          <div className={clsx(style.group, "gutter-x")}>
            <h5 className="bold_text">Showing all orders</h5>
            <DropDown />
          </div>
          <div className={clsx(style.center, "gutter-xy")}>
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAcc
