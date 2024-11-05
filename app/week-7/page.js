"use client";

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
            <h1 className='text-4xl font-bold mb-8 text-center'>
                Shopping List
            </h1>
            <div className='mb-8'>
                <NewItem onAddItem={handleAddItem} />
            </div>
            <ItemList items={items} />
        </main>
    );
}

export default Page;
