import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="m-1">
      <div>
        <h2 className=" m-2 font-extrabold text-3xl text-slate-900">
          Shopping List  | <a href="/"> Home Page</a>
        </h2>
        <ItemList />
      </div>
      
    </main>
  );
}
