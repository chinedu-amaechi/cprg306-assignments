
function Item({name, quantity, category}) {
     return (
            <li className="m-3 max-w-sm bg-red-100 pl-3 pb-1">
                <h2 className="text-xl font-sans font-bold">{name}</h2>
                <div>Buy {quantity} in {category}</div>
            </li>   
    );
}

export default Item;