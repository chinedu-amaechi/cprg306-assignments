"use client";
import { useState } from "react";


function NewItem() {
    const [quantity, setQuantity] = useState(1);
    let buttonStyle = "w-8 bg-blue-500 text-black font-bold rounded-lg shadow-md hover:bg-red-200 disabled:bg-gray-400 disabled:cursor-not-allowed focus:ring-opacity-75";
    
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
    <div className="p-2 m-4 rounded-md w-36 bg-white border border-gray-600 text-slate-950">
      <div className="flex justify-between items-center">
        <span className="text-black text-xl">{quantity}</span>
        <div className="flex gap-2">
          <button
              className={buttonStyle}
              onClick={decrement}
              disabled={quantity == 1}>-</button>

          <button 
              className={buttonStyle}
              onClick={increment}
              disabled={quantity == 20}>+</button>
        </div>
    </div>
  </div>
        
  );
}

export default NewItem;