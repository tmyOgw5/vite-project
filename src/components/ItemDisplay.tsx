import React,{useState} from "react";
import "./ItemDisplay.css";
import Card from "./Card";


const ItemDisplay = (props: any) => {
    const [price, setPrice] = useState(props.price);


    const clickHandler = () => {
        setPrice(price + 1);
        console.log("Clicked!");
    }

    return (
        <div>
            <Card className="Item">
                <div>
                    <h1>{props.name}</h1>
                    <h2>Price: ${price}</h2>
                    <button onClick={clickHandler}>Change prices</button>
                </div>
            </Card>
        </div>
        
    )
}

export default ItemDisplay