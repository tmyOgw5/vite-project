import React from 'react'
import Item from './components/Item'

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
  return (
    <div className="App">
      <h1>React TypeScript Template</h1>
      <Item name={itemList[0].name} price={itemList[0].price} />
      <Item name={itemList[1].name} price={itemList[1].price} />
    </div>
  )
}

export default App
