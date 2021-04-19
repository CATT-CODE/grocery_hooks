import React, { useContext, useState } from 'react'
import { GroceryInputContext } from "./context/context";

const GroceryInput = () => {
    const {addGrocery} = useContext(GroceryInputContext);

    const [grocery, setGrocery] = useState("")

    function handleGrocerySubmit(event) {
        event.preventDefault();
        addGrocery(grocery)
        setGrocery('')
    }


    return (
        <form onSubmit={handleGrocerySubmit}>
            <input type="text" value={grocery} onChange={(e) => setGrocery(e.target.value)}/>
            <button type="submit">Submit Grocery</button>
        </form>
    )
}

export default GroceryInput;
