import React from "react";
import Card from "../Card";
import "../../App.css"
import style from "./style.module.css";
import clsx from 'clsx'

function UserAcc(){
    return <React.Fragment>
       <div className={clsx("container",style.inner_space)}>
            <div className="row">
                <div className="col-sm">
                One of three columns
                </div>
                <div className="col-9">
                <div className="row horizontal-gutter">
                    <Card/>
                    <Card/>
                </div>   
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default UserAcc;