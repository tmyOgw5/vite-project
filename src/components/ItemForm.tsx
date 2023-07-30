import React, { useState } from 'react';
import './ItemForm.css';

const ItemForm = () => {
    const [enteredItem, setEnteredItem]= useState('');
    const [enteredPrice, setEnteredPrice]= useState('');

    const itemChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredItem(event.target.value);
    }

    const priceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredPrice(event.target.value);
    }


    return (
        <form>
            <div className='item-input'>
                <label htmlFor="name">Item Name</label>
                <input type="text" id="name" onChange={itemChangeHandler}/>
            </div>
            <div className='price-input'>
                <label htmlFor="price">Item Price</label>
                <input type="number" id="price" onChange={priceChangeHandler}/>
            </div>
            <button>Add Item</button>
        </form>

    )
}

export default ItemForm
