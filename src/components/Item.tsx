import "./Item.css";
import React from "react";

function Item(props: any) {
    return (
        <div className="Item">
            <h1>{props.name}</h1>
            <h2>Price: ${props.price}</h2>
        </div>
    )
}

export default Item