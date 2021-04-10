import React  from "react";
import style from "./style.module.css";
import clsx from 'clsx'
function Card(){
    return <div>
        <div className={`${style["group"]} ${style["bold_text"]}`}>
            <img src="https://ik.imagekit.io/ikmedia/bucket.png?tr=w-500,dpr-2" className={style["item__img"]} alt=""/>
            <div>Target</div>
        </div>
    </div>
}

export default Card