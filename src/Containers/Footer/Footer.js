import React from "react";
import s from "./Footer.module.css";
import logo from "../../img/logo.png";

export function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footer_content}>
                <div className={s.footer_content_block}>
                    <img src={logo} />
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
                        for everyone</p>
                    <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
                <div className={s.footer_content_block}>
                    <p>Company</p>
                    <a href='#'>About</a>
                    <a href='#'>Testimonials</a>
                    <a href='#'>Find a doctor</a>
                    <a href='#'> Apps</a>
                </div>
                <div className={s.footer_content_block}>
                    <p>Company</p>
                    <a href='#'>Indonesia</a>
                    <a href='#'>Singapore</a>
                    <a href='#'>Hongkong</a>
                    <a href='#'>Canada</a>
                </div>
                <div className={s.footer_content_block}>
                    <p>Company</p>
                    <a href='#'>Help center</a>
                    <a href='#'>Contact support</a>
                    <a href='#'>Instructions</a>
                    <a href='#'>How it works</a>
                </div>
            </div>
        </div>
    );
}
