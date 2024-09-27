
export default function Item({name, quantity, category}) {

     return (
        <section>
            <div className="m-4 w-1/3 bg-slate-300 pl-3 pb-1">
            <ol>
                <li className="text-xl font-sans font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ol>
            </div>
        </section>
    );
}