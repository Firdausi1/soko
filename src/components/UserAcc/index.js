import React from "react";
import Card from "../Card";
import "../../App.css"
import style from "./style.module.css";
import clsx from 'clsx'

function UserAcc(){
    return <React.Fragment>
       <div className={clsx("container",style.inner_space)}>
            <div className="row">
                <div className="col px-4">
                One of three columns
                </div>
                <div className="col-sm-12 col-md-9">
                    <div className="center gutter-xy">
                        <Card/>
                        <Card/>
                    </div>   
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default UserAcc;