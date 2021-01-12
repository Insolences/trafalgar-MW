import React from "react";
import s from "./Header.module.css";
import logo from "../../img/logo.png"

export function Header() {
    return (
        <div className={s.header}>
            <div className={s.header_content}>
                <img src={logo} />
                <nav className={s.navbar}>
                    <a className={s.menuLink} href="#">Home</a>
                    <a className={s.menuLink} href="#">Find a doctor</a>
                    <a className={s.menuLink} href="#">Apps</a>
                    <a className={s.menuLink} href="#">Testimonials</a>
                    <a className={s.menuLink} href="#">About us</a>
                </nav>
            </div>

        </div>
    );
}
