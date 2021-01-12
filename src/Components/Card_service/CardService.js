import React from "react";
import s from "./CardService.module.css";


export function CardService({ img, title, content }) {
    return (
        <div className={s.card_service}>
            <div>
                <img src={img}/>
            </div>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}
