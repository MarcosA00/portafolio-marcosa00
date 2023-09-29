import Link from "next/link"

function LayoutAbout() {
  return (
    <div className="mb-5">
      <Link 
        href='/sobre-mi'
        className="bg-indigo-500 w-full p-2 px-120 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all mx-5 shadow-md"
      >Backend</Link>

      <Link 
        href='/sobre-mi/front-end'
        className="bg-indigo-500 w-full p-2 px-120 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all mx-5 shadow-md"
      >Frontend</Link>

      <Link 
        href='/sobre-mi/otros'
        className="bg-indigo-500 w-full p-2 px-120 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all mx-5 shadow-md"
      >Otros</Link>
    </div>
  )
}

export default LayoutAbout