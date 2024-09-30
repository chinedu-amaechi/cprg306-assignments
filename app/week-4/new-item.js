"use client";
import { useState } from "react";


export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
      if (quantity < 20) {
        setQuantity(quantity +1);
      }
    };

    const decrement = () => {
      if (quantity > 1){
      setQuantity(quantity - 1);
      }
    };

  return (
    <div className="flex p-1 m-4 bg-slate-600 text-slate-950 w-60">

      
        <span><input type="text" value={quantity} /></span>
           
        <button type="button" className="w-10 bg-blue-500 text-black font-bold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75" onClick={decrement}>-</button>
     
        <button type="button" className="w-10 bg-blue-500 text-black font-bold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75" onClick={increment}>+</button>
     
      
    </div>
        
  );
}
