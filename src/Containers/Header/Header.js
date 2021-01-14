import React from "react";
import s from "./Header.module.css";
import logo from "../../img/logo.png"
import Burger from "./Nav/Burger";

export function Header() {
    return (
        <div className={s.header}>
            <div className={s.header_content}>
                <img src={logo} />
                <Burger />
            </div>
        </div>
    );
}
