
export default function Item({name, quantity, category}) {

     return (
        
            <li className="m-3 max-w-sm bg-slate-300 pl-3 pb-1">
                <h2 className="text-xl font-sans font-bold " fon >{name}</h2>
                <div>Buy {quantity} in {category}</div>
            </li>   
    );
}