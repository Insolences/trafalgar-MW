import React from "react";
import s from "./Footer.module.css";
import footer_logo from "../../img/footer_logo.png";

export function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footer_content}>
                <div className={s.footer_logo_block}>
                    <div className={s.footer_logo}>
                        <div><span>T</span></div>
                        <span className={s.footer_logo_name}>Trafalgar</span>
                    </div>

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
                    <p>Region</p>
                    <a href='#'>Indonesia</a>
                    <a href='#'>Singapore</a>
                    <a href='#'>Hongkong</a>
                    <a href='#'>Canada</a>
                </div>
                <div className={s.footer_content_block}>
                    <p>Help</p>
                    <a href='#'>Help center</a>
                    <a href='#'>Contact support</a>
                    <a href='#'>Instructions</a>
                    <a href='#'>How it works</a>
                </div>
            </div>
        </div>
    );
}
