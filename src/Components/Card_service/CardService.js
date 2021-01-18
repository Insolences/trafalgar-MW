import React from "react";
import classes from "./CardService.module.css";


export function CardService({ img, title, content }) {
    return (
        <div className={classes.card_service}>
            <div className={classes.card_service_img}>
                <img src={img}/>
            </div>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}
