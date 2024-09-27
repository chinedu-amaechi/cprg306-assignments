import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="m-3">
            <h1 className="font-extrabold text-3xl text-slate-900">Shopping List</h1>
            <ItemList />
        </main>
    );
}