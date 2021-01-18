import React from "react";
import classes from "./Section.module.css";
import {Button} from "../../Components/Button/Button";

export function Section({
                            reverse= false,
                            title = '',
                            img = '',
                            ractangle = false,
                            content='',
                            button_blue_color = true,
                            button_text = '',
}) {
    return (
        <div className={classes.section}>
            <div className={`${classes.section_content} ${reverse ? classes.reverse : ''}`}>
                <div className={classes.section_title}>
                    <h3>{title}</h3>
                    { ractangle ? <span className={classes.ractangle_line}></span> : ''}
                    <p>{content}</p>
                    <Button filled={button_blue_color} text={button_text}/>
                </div>
                <div className={classes.section_img_container}>
                    <img src={img} className={classes.section_img} alt=''/>
                </div>
            </div>
        </div>
    );
}
