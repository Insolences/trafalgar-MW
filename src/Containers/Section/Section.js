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
                            background = ''
}) {

    if (!reverse){
        return (
            <div className={s.section}>
                <div className={s.section_content}>
                    <div className={s.section_title}>
                        <h2>{title}</h2>
                        { ractangle ? '---------' : ''}
                        <p>{content}</p>
                        <Button blue={button_blue_color} text='Consult today'/>
                    </div>
                    <div>
                        <img src={img} className={s.section_img}/>
                    </div>
                </div>
            </div>
        );
    } else return (
        <div className={s.section}>
            <div className={s.section_content}>
                <div>
                    <img src={img} className={s.section_img}/>
                </div>
                <div className={s.section_title}>
                    <h2>Virtual healthcare for you</h2>
                    { ractangle ? '---------' : ''}
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <Button blue={button_blue_color} text='Consult today'/>
                </div>
            </div>
        </div>
    )

}
