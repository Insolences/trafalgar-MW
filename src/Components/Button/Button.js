import React from "react";
import classes from "./Button.module.css";

export function Button ({ text = "", viewAll=false, onClick}){

    return (
        <button
            className={classes.button}
            onClick={onClick}>
            {text}
        </button>
    );
};


