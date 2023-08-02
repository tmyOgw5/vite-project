import React, {useState} from "react";
import "./Item.css";
import Card from "./Card";
import ItemDisplay from "./ItemDisplay";


const Item = (props: any) => {


    return (
        <Card className="items">
            <ItemDisplay name={props.items[0].name} price={props.items[0].price}/>
            <ItemDisplay name={props.items[1].name} price={props.items[1].price}/>
        </Card>
    );
}

export default Item