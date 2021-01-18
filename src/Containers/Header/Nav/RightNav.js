import React from "react";
import classes from "./RightNav.module.css";

export default class RightNav extends React.Component {
    render(){
            return (
                <ul className={this.props.open ? classes.navbar_active : classes.navbar}>
                    <li><a className={classes.menuLink} href="#">Home</a></li>
                    <li><a className={classes.menuLink} href="#">Find a doctor</a></li>
                    <li><a className={classes.menuLink} href="#">Apps</a></li>
                    <li><a className={classes.menuLink} href="#">Testimonials</a></li>
                    <li><a className={classes.menuLink} href="#">About us</a></li>
                </ul>
            );
    }


}
