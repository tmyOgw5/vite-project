import React from 'react';
import './ItemForm.css';

const ItemForm = () => {
    return (
        <form>
            <div className='item-input'>
                <label htmlFor="name">Item Name</label>
                <input type="text" id="name" />
            </div>
            <div className='price-input'>
                <label htmlFor="price">Item Price</label>
                <input type="number" id="price" />
            </div>
            <button>Add Item</button>
        </form>

    )
}

export default ItemForm
