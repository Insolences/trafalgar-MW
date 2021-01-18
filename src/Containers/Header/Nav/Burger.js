import React from "react";
import classes from "./Burger.module.css";
import RightNav from "./RightNav";

export default class Burger extends React.Component {

    state = {
        open: false
    }

    setOpen = () => {
        let open = this.state.open
        open = !open
        this.setState({
            open: open
        })
    }

    render() {
        {
            console.log(this.state.open)
            return (
                <>
                    <div className={this.state.open ? classes.burger_active : classes.burger}
                         onClick={() => this.setOpen()}>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                    <RightNav open={this.state.open}/>
                </>
            );
        }
    }
}
