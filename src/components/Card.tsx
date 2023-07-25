import React from "react";
import "./Card.css";

function Card(props: any) {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card