"use client";
import { useState } from "react";
import Item from "./item";




function ItemList({items, onItemSelect}) {
    const [sortBy, setSortBy] = useState("name");
    

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return (a.name || "").localeCompare(b.name || "");
        } else if (sortBy === "category") {
            return (a.category || "").localeCompare(b.category || "");
        }
    });

    
    const renderItems = () => {
        return sortedItems.map((item) => (
            <li key={item.id}>
                <Item {...item} onSelect={onItemSelect} /> 
            </li>
        ));
    };

    return (
        <div className="flex flex-col">
            <div className='ml-3 mb-2 flex gap-2 mr-2'>
                <span className="mt-3 text-slate-600">Sort by:</span>
                <button
                    onClick={() => setSortBy("name")}
                    className={`px-4 py-2 rounded w-36 ${
                        sortBy === "name"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-black"
                    }`}
                >
                    Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`px-4 py-2 rounded w-36 ${
                        sortBy === "category"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-black"
                    }`}
                >
                    Category
                </button>
            </div>
                         
            <div>
                <ul>
                    {renderItems()}
                </ul>
            </div>
        </div>
   
    );
}

export default ItemList;
