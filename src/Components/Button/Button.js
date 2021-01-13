import React from "react";
import s from "./Button.module.css";

export function Button ({ filled = false, text = ""}){
    return (
        <button className={`${s.button} ${filled ? s.blue : ''}`}>
            {text}
        </button>
    );
};


