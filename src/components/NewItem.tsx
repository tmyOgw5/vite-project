import React from "react";
import ItemForm from "./ItemForm";


const NewItem = (props: any) => {
    const saveItemHandler = (enteredItemData: any ) => {
        const itemData = {
            ...enteredItemData,
            id: Math.random().toString()
        }
        console.log(itemData);
        props.onAddItem(itemData);
    }


    return (
        <div>
            <ItemForm onSaveItem={saveItemHandler}/>
        </div>
    )
}

export default NewItem