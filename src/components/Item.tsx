import "./Item.css";
import Card from "./Card";
import React from "react";

const Item = (props: any) => {
    return (
        <Card className="Item">
            <h1>{props.name}</h1>
            <h2>Price: ${props.price}</h2>
        </Card>
    )
}

export default Item