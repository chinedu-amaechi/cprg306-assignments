"use client";
import Link from "next/link";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main className='container mx-auto px-4 py-8'>
            <h2 className=" m-2 font-semibold text-2xl text-slate-900 mb-4">
                Shopping List  |
                <Link href="/" className="hover:text-red-300"> Home Page</Link>
            </h2>

            <div className='mb-8'>
                <NewItem onAddItem={handleAddItem} />
            </div>
            
            <ItemList items={items} />
        </main>
    );
}

export default Page;
