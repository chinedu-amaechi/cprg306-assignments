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
    <div className="flex items-center justify-between p-2 m-3 bg-slate-600 text-slate-950 w-36">

        <span className="text-white text-xl">{quantity}</span>

        <div className="flex items-center gap-2">
          <button className="w-8 bg-blue-500 text-black font-bold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75" onClick={decrement} disabled={quantity==1}>-</button>
      
          <button className="w-8 bg-blue-500 text-black font-bold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75" onClick={increment} disabled={quantity==20}>+</button>

        </div>
         
    </div>
        
  );
}
