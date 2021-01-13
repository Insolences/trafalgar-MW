import React from "react";
import s from "./Section.module.css";
// import img from "../../img/trafalgar-header illustration.png"
import {Button} from "../../Components/Button/Button";

export function Section({
                            reverse= false,
                            title = '',
                            img = '',
                            ractangle = false,
                            content='',
                            button_blue_color = true,
                            button_text = '',
                            background = ''
}) {
    return (
        <div className={s.section}>
            <div className={`${s.section_content} ${reverse ? s.reverse : ''}`}>
                <div className={s.section_title}>
                    <h3>{title}</h3>
                    { ractangle ? '---------' : ''}
                    <p>{content}</p>
                    <Button filled={button_blue_color} text={button_text}/>
                </div>
                <div className={s.section_img_container}>
                    <img src={img} className={s.section_img} alt=''/>
                </div>
            </div>
        </div>
    );
}
