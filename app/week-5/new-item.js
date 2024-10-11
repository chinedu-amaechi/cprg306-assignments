"use client";
import { useState } from "react";


export default function NewItem() 
{
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


    <div>
      <input>    </input>
    </div>

  return (
    <form className="border border-black m-4 ">

        <input type="text" className=" border border-blue-300 m-3" placeholder="Item name.." />

        <div className="flex justify-center w-full">
            <div className="flex items-center justify-between p-2 m-3 bg-slate-600 text-slate-950 w-36">

                <span className="text-white text-xl">{quantity}</span>

                <div className="flex items-center gap-2">
                  <button className="w-8 bg-blue-500 text-black font-bold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75" onClick={decrement} disabled={quantity==1}>-</button>
              
                  <button className="w-8 bg-blue-500 text-black font-bold rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-opacity-75" onClick={increment} disabled={quantity==20}>+</button>
                </div> 
            </div>

            <div>
                <select
                      className="bg-slate-200 text-black p-2 m-3 rounded-md">
                      <option value="select">Select Category</option>
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

        <button className="bg-blue-400 m-3">Add Item</button>
        
        
    </form>

 );

}
