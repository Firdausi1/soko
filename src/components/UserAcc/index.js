import React from "react";
import Card from "../Card";


function UserAcc(){
    return <React.Fragment>
       <div class="container">
            <div class="row">
                <div class="col-sm">
                One of three columns
                </div>
                <div class="col-8">
                    <Card/>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default UserAcc;