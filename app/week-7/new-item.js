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
    <form className="border border-black bg-gray-100 p-2 m-4 max-w-sm w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="mb-2">
        <input
          type="text"
          className="rounded-md w-full mt-1 border border-gray-300 p-2"
          placeholder="Item name"
        />
      </div>

      <div className="flex justify-between">
        <div className="p-2 mt-1 mb-1 rounded-md w-36 bg-white border border-gray-300 text-slate-950">
          <div className="flex justify-between items-center">
            <span className="text-black text-xl">{quantity}</span>
            <div className="flex gap-2">
              <button
                className="w-8 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75"
                onClick={decrement} disabled={quantity == 1}>-</button>

              <button
                className="w-8 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75"
                onClick={increment} disabled={quantity == 20}>+</button>
            </div>
          </div>
        </div>
        <select className="p-2 mt-1 mb-1 border-gray-300 border text-black rounded-md">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="w-full mt-2 py-2 px-4 bg-blue-500 text-white text-base rounded-md shadow-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-55">Add Item</button>
    </form>
  );
}
