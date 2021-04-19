import React, { useContext } from 'react'
import { GroceryContext } from "./context/context"

function Grocery() {
    
    const {
        groceryItem: {id, grocery}
    } = useContext(GroceryContext)

    return (
        <div>
            {grocery}
        </div>
    )
}

export default Grocery