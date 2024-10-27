import ItemList from "./item-list";

function Page() {
  return (
    <main className="m-1 container mx-auto px-4 py-8 ">
      
        <h2 className=" m-2 font-semibold text-2xl text-slate-900 mb-4">
          Shopping List  | <a href="/" className="hover:text-red-300"> Home Page</a>
        </h2>
        <ItemList />
      
    </main>
  );
}

export default Page;