import React from "react";
import classes from "./Header.module.css";
import logo from "../../img/logo.png"
import Burger from "./Nav/Burger";

export function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.header_content}>
                <img src={ logo } />
                <Burger />
            </div>
        </div>
    );
}
