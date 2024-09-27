import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="m-5">
            <h1 className="font-extrabold text-3xl">Shopping List</h1>
            <ItemList />
        </main>
    );
}