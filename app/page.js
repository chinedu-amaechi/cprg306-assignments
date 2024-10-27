import Link from 'next/link';

export default function Page() {
  let listStyle = "border-2 border-blue-950 px-6 py-2 hover:bg-red-100";


  return (
    <div className="m-3 ">
      <h1 className="font-extrabold text-4xl text-center text-red-700">Welcome to Development II</h1>
      <hr className="m-2 border-2 border-gray-800"/>
      <div className="m-3">
      <p className="font-semibold text-2xl mb-5">CPRG-306: Web Development 2 - Assignments </p>
        <div className=" m-2 ml-0">
          <ul className="flex flex-wrap w-full gap-4 text-center font-semibold text-red-500 p-1 pl-0">
            <li className="mb-4"><Link href="/week-2" className= {listStyle}>Week 2</Link></li>
            <li className="mb-4"><Link href="/week-3" className= {listStyle}>Week 3</Link></li>
            <li className="mb-4"><Link href="/week-4" className= {listStyle}>Week 4</Link></li>
            <li className="mb-4"><Link href="/week-5" className= {listStyle}>Week 5</Link></li>
            <li className="mb-4"><Link href="/week-6" className= {listStyle}>Week 6</Link></li>
            <li className="mb-4"><Link href="/week-7" className= {listStyle}>Week 7</Link></li>
            <li className="mb-4"><Link href="/week-8" className= {listStyle}>Week 8</Link></li>
            <li className="mb-4"><Link href="/week-9" className= {listStyle}>Week 9</Link></li>
          </ul>
        </div>  
      </div>
    </div>
  );
}