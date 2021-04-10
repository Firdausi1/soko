import React from "react";
import Card from "../Card";
import "../../App.css"

function UserAcc(){
    return <React.Fragment>
       <div className="container">
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