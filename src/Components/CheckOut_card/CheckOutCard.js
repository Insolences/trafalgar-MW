import React from "react";
import s from "./CheckOutCard.module.css";


export function CheckOutCard({ img, title, content }) {
    return (
        <div className={s.check_out_block}>
            <div>
                <img src={img}/>
            </div>
            <div className={s.check_out_block_content}>
                <h4>{title}</h4>
                <p>{content}</p>
                <a href='#' className={s.read_more}>Read more</a>
            </div>
        </div>
    );
}
