function ChildContainer({cartItems,removeItem}){
    return(
        <div className="child">
        <h2>Child Component</h2> 
        <ul>
        {cartItems.map((i,index)=>(   
        <li key={index}>
        {i.itemName} - ${i.itemPrice}
        <button onClick={()=>removeItem(index)}>Remove Item</button>
        </li>
        ))}
        </ul>
        </div>
    )
}
export default ChildContainer;