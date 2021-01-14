import React from "react";
import s from "./Button.module.css";

export function Button ({ filled = false, text = "", viewAll=false, onClick}){

    return (
        <button
            className={`${s.button} ${filled ? s.blue : ''}`}
            onClick={onClick}>
            {text}
        </button>
    );
};


