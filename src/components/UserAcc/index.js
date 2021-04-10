import React from "react";
import Card from "../Card";


function UserAcc(){
    return <React.Fragment>
       <div className="container">
            <div className="row">
                <div className="col-sm">
                One of three columns
                </div>
                <div className="col-10">
                <div className="row">
                    <Card/>
                    <Card/>
                </div>   
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default UserAcc;