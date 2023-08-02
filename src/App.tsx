import React from 'react'
import Item from './components/Item'
import Header from './components/Header'
import './App.css'
import './components/ItemForm'
import NewItem from './components/NewItem'

const  App = () => {
  const itemList = [
    {
      name: "Coke",
      price: 1.99
    },
    {
      name: "Sprite",
      price: 1.99
    },
  ]
  const addItemHandler = (item: any) => {
    console.log("In App.tsx");
    console.log(item);
  }


  return (
    <div className="App">
      <Header />
      <NewItem onAddItem={addItemHandler}/>
      <h1>React TypeScript Template</h1>
      <Item items={itemList} />
      
    </div>
  )
}

export default App
