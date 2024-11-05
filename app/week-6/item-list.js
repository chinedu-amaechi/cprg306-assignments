"use client";

import { useState } from "react";
import Item from "./item";
import item from "./item.json";



function ItemList() {
  const [sortBy, setSortBy] = useState("name");
    const [groupByCategory, setGroupByCategory] = useState(false);

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name")
          {
            return a.name.localeCompare(b.name);
          }
        else if (sortBy === "category")
          {
            return a.category.localeCompare(b.category);
          }
        }
    ); 

    const groupedItems = sortedItems.reduce((acc, item) => {
      if (!acc[item.category])
        {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      },
    {});

    const itemsToDisplay = groupByCategory ? groupedItems : { "All": sortedItems };



  
  // Render these items using the Item component you just created, passing item data as props
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
      <Item {...item1} />
      <Item {...item2} />
      <Item {...item3} />
      <Item {...item4} />
      <Item {...item5} />
      <Item {...item6} />
      <Item {...item7} />
      <Item {...item8} />
      <Item {...item9} />
      <Item {...item10} />
      <Item {...item11} />
      <Item
        name={item12.name}
        quantity={item12.quantity}
        category={item12.category}
      />
    </ul>
  );
}

export default ItemList;