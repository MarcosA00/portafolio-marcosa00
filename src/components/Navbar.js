import Link from "next/link";

function Navbar() {
  return (
    <div className="border-b border-gray-300">
      <nav className="flex align-middle justify-center m-5">
        <div className="lg:w-1/5"></div>

        <div className="lg:w-3/5 flex align-middle justify-center text-center">
          <Link 
            href='/'
            className="bg-indigo-500 w-full p-2 px-120 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all mx-5 shadow-md"
          >Inicio</Link>

          <Link 
            href='/sobre-mi'
            className="bg-indigo-500 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all mx-5 shadow-md"
          >Sobre mí</Link>

          <Link 
            href='/proyectos'
            className="bg-indigo-500 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all mx-5 shadow-md"
          >Proyectos</Link>

          <Link 
            href='/contacto'
            className="bg-indigo-500 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all mx-5 shadow-md"
          >Contacto</Link>
        </div>

        <div className="lg:w-1/5"></div>
      </nav>
    </div>
  )
}

export default Navbar;