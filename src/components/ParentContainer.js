
import React, { useState } from "react";

function ParentContainer ({setCartItems}){
    const [itemName,setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0);

    const addItem = (e)=>{
        e.preventDefault();
        console.log("Clicked");
        console.log(itemName,itemPrice);
        setCartItems(cartItems=>[...cartItems,{itemName:itemName,itemPrice:itemPrice}])
        setItemName("");
        setItemPrice(0);
    }
   
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <form onSubmit={addItem}>
                <label>Item Name :</label>
                <input type="text" onChange={(e)=>setItemName(e.target.value)} ></input>

                <label>Item Price :</label>
                <input type="Number" onChange={(e)=>setItemPrice(e.target.value)}></input>
                <button>Add Item</button>
            </form>

        </div>
    )
}
export default  ParentContainer;