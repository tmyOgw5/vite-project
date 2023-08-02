import React, {useState} from "react";
import "./Item.css";
import Card from "./Card";
import ItemDisplay from "./ItemDisplay";


const Item = (props: any) => {

    
    return (
        <Card className="items">
            {props.items.map((item: any) => (<ItemDisplay key={item.index} name={item.name} price={item.price}/>))}
        </Card>
    );
}

export default Item