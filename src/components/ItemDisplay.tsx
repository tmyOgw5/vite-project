import React,{useState} from "react";
import "./ItemDisplay.css";
import Card from "./Card";


const ItemDisplay = (props: any) => {
    console.log(props)
    //const [price, setPrice] = useState(props.price);


    /*const clickHandler = () => {
        setPrice((prevPrice : number) => {
            return prevPrice + 1;
        });
        console.log("Clicked!");
    }
    console.log(price)*/

    return (
        <div>
            <Card className="Item">
                <div>
                    <h1>{props.name}</h1>
                    <h2>Price: ${props.price}</h2>
                    <button >Change prices</button>
                </div>
            </Card>
        </div>
        
    )
}

export default ItemDisplay