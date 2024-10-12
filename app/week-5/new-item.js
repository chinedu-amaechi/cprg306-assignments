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
    <form className="border border-black p-2 m-4 max-w-sm w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="mb-2">
        <input
          type="text"
          className="rounded-md w-full mt-1 border border-black-500 p-2"
          placeholder="Item name"
        />
      </div>

      
      <div className="p-2 mt-1 mb-1 rounded-md w-36 bg-slate-600 text-slate-950">
        <div className="flex justify-between">
          <span className="text-white text-xl">{quantity}</span>
        
          <div className="flex">
            <button
              className="w-8 bg-blue-500 text-black font-bold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75"
              onClick={decrement} disabled={quantity == 1}>-</button>

            <button
              className="w-8 bg-blue-500 text-black font-bold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75"
              onClick={increment} disabled={quantity == 20}>+</button>
          </div>
      </div>

      <div>
        <select className="bg-slate-200 text-black p-2 m-3 rounded-md ">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="sncaks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>

      <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-400 text-white rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-55">Add Item</button>
    </form>
  );

}
