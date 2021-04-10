import React  from "react";
import style from "./style.module.css";
import clsx from 'clsx'
function Card(){
    return <div>
        <div className={clsx (style.group, style.bold_text)}>
            <img src="https://ik.imagekit.io/ikmedia/bucket.png?tr=w-500,dpr-2" className={style["item__img"]} alt=""/>
            <div>Target</div>
        </div>
        <div>
            <div className={clsx(style.group,style.item__details)}>
                <p className={clsx(style.bold_text)}> Order #ID</p>
                <p className={clsx(style.bold_text)}> UGX 12,700</p>
            </div>
            <div className={clsx(style.group,style.item__details)}>
                <p> 3 Items</p>
                <p> 25/02/2021, 01:55 PM</p>
            </div>

        </div>
    </div>
}

export default Card