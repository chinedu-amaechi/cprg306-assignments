
function Item({name, quantity, category, onSelect})
{
  
  
  
    return (
        
            <div className="m-3 max-w-sm bg-red-100 pl-3 pb-1 capitalize hover:bg-red-200 hover:scale-105 hover:border-none transition-all duration-300 cursor-pointer"
                onclick={() => onSelect(name)} >
                <h2 className="text-xl font-sans font-bold mb-3">{name}</h2>
                <p className="text-sm">Quantity: {quantity}</p>
                <p className="text-sm">Category: {category}</p>
            </div> 
              
    );
}

export default Item;