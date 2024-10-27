
function Item({name, quantity, category}) {
     return (
            <li className="m-3 max-w-sm bg-red-100 pl-3 pb-1 capitalize hover:bg-red-200 hover:scale-105 hover:border-none transition-all duration-300">
                <h2 className="text-xl font-sans font-bold mb-3">{name}</h2>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
                
            </li>   
    );
}

export default Item;