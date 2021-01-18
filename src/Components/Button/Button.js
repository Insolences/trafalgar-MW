import React from "react";
import classes from "./Button.module.css";

export function Button ({ filled = false, text = "", viewAll=false, onClick}){

    return (
        <button
            className={`${classes.button} ${filled ? classes.blue : ''}`}
            onClick={onClick}>
            {text}
        </button>
    );
};


