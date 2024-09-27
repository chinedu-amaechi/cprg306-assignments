import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="m-5">
            <h1 className="font-bold text-2xl">Shopping List</h1>
            <ItemList />
        </main>
    );
}