import ItemList from "./item-list";

function Page() {
  return (
    <main className="m-1">
      <div>
        <h2 className=" m-2 font-semibold text-2xl text-slate-900">
          Shopping List  | <a href="/" className="hover:text-red-300"> Home Page</a>
        </h2>
        <ItemList />
      </div>
      
    </main>
  );
}

export default Page;