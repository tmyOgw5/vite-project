import React, { useState } from 'react'
import Item from './components/Item'
import Header from './components/Header'
import './App.css'
import './components/ItemForm'
import NewItem from './components/NewItem'

const DUMMY_ITEMS = [
  {
    name: "Coke",
    price: 1.99
  },
  {
    name: "Sprite",
    price: 1.99
  },
  {
    name: "Fanta",
    price: 1.99
  }
];

const  App = () => {
  const [itemList, setItemList] = useState(DUMMY_ITEMS);
  const addItemHandler = (item: any) => {
    setItemList((prevItemList) => {
      return [item, ...prevItemList];
    });

    console.log("In App.tsx");
    console.log(item);
  }


  return (
    <div className="App">
      <Header />
      <NewItem onAddItem={addItemHandler}/>
      <Item items={itemList} />
      
    </div>
  )
}

export default App
