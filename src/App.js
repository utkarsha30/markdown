// import MarkdownUseState from './components/MarkdownUseState';
import Parent from "./components/ParentContainer";
import Child from "./components/ChildContainer"
import React, { useState } from "react";
import   "./styles.css"
import './App.css';


function App() {
  const [cartItems,setCartItems] = useState([]);
  
  const removeItem=(index)=>{
    console.log(cartItems.filter((item,i)=>i!==index));
    setCartItems(cartItems.filter((item,i)=>i!==index))
  }
  return (
    <div  class="app-container">
    {/* <MarkdownUseState/> */}
    <Parent setCartItems={setCartItems}  />
    <Child cartItems = {cartItems} removeItem={removeItem}/>

    </div>
  );
}

export default App;
