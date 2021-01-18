import React from "react";
import classes from "./CheckOutCard.module.css";


export function CheckOutCard({ img, title, content }) {
    return (
        <div className={classes.check_out_block}>
            <div>
                <img src={img}/>
            </div>
            <div className={classes.check_out_block_content}>
                <h4>{title}</h4>
                <p>{content}</p>
                <a href='#' className={classes.read_more}>Read more</a>
            </div>
        </div>
    );
}
