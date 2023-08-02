import React, { useState } from 'react';
import './ItemForm.css';

const ItemForm = (props: any) => {
    const [enteredItem, setEnteredItem]= useState('');
    const [enteredPrice, setEnteredPrice]= useState<number>();

    const itemChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredItem(event.target.value);
    }

    const priceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredPrice(parseFloat(event.target.value));
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredItemData = {
            name: enteredItem,
            price: enteredPrice
        }
        props.onSaveItem(enteredItemData);
        setEnteredItem('');
        setEnteredPrice(undefined);
    }

    return (
        <form onSubmit={submitHandler} >
            <div className='item-input'>
                <label htmlFor="name">Item Name</label>
                <input type="text" id="name" value={enteredItem} onChange={itemChangeHandler}/>
            </div>
            <div className='price-input'>
                <label htmlFor="price">Item Price</label>
                <input type="number" id="price" value={enteredPrice} onChange={priceChangeHandler} step="0.01"/>
            </div>
            <button type='submit'>Add Item</button>
        </form>

    )
}

export default ItemForm
