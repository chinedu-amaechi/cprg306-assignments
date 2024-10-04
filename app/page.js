export default function Page() {
  return (
    <div className="m-3 ">
      <h1 className="font-extrabold text-4xl text-center text-red-700">Welcome to Development II</h1>
      <hr className="m-2 border-2"/>
      <div className="m-3">
      <p className="font-semibold">DEMOs for CPRG306 Assignment</p>
        <div className="flex w-full m-2 ml-0">
          <ul className="flex w-full gap-4 text-center font-semibold text-red-500 p-1 pl-0 border">
            <li className="border-2 border-blue-950 px-8 py-2"><a href="/week-2">Week 2</a></li>
            <li className="border-2 border-blue-950 px-8 py-2"><a href="/week-3">Week 3</a></li>
            <li className="border-2 border-blue-950 px-8 py-2"><a href="/week-4">Week 4</a></li>
            <li className="border-2 border-blue-950 px-8 py-2"><a href="/week-5">Week 5</a></li>
          </ul>
        </div>  
      </div>
    </div>
  );
}