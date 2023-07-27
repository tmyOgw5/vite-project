import React, {useState} from "react";
import "./Item.css";
import Card from "./Card";

const Item = (props: any) => {

    const [price, setPrice] = useState(props.price);


    const clickHandler = () => {
        setPrice(price + 1);
        console.log("Clicked!");
    }

    return (
        <Card className="Item">
            <h1>{props.name}</h1>
            <h2>Price: ${price}</h2>
            <button onClick={clickHandler}>Change prices</button>
        </Card>
    );
}

export default Item