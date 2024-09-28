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
    <div className="flex">

      <div className="flex-2">
        <input type="text" value={quantity} />
      </div>

      <div className="flex-1">
        <button onClick={decrement}>-</button>
      </div>

      <div className="flex-1">
        <button onClick={increment}>+</button>
      </div>
      
    </div>
        
  );
}
