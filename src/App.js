import React, { useState } from 'react';
import { GroceryInputContext, GroceryContext } from "./context/context";
import { v4 as uuidv4 } from "uuid";
import './App.css';

import GroceryInput from "./GroceryInput";
import Grocery from "./Grocery"

let groceryObj  = [
  {
    id: uuidv4(),
    grocery: "bread",
  },
  {
    id: uuidv4(),
    grocery: "milk",
  }
]

function App() {
  const [groceryArray, setGroceryArray] = useState(groceryObj)

  function addGrocery(grocery) {
    let newAddedGroceryArray = [
      ...groceryArray,
      {
        id: uuidv4(),
        grocery,
      },
    ]
    setGroceryArray(newAddedGroceryArray);
  }

  function showGroceryInput() {
    return (
      <GroceryInputContext.Provider value={{addGrocery}}>
        <GroceryInput/>
      </GroceryInputContext.Provider>
    )
  }

  function showGrocery() {
    return groceryArray.map((item) => {
      return (
        <GroceryContext.Provider key={item.id} value={{groceryItem: item}}>
          <Grocery />
        </GroceryContext.Provider>
      )
    })
  }
  
  return (
    <div className="App">
      {showGroceryInput()}
      {showGrocery()}
    </div>
  );
}

export default App;
