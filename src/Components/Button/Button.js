import React from "react";
import s from "./Button.module.css";

export function Button ({ blue = false, text = ""}){
    return (
        <button className={[s.button, blue && s.blue].join(" ")}>
            {text}
        </button>
    );
};


