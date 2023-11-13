import Link from "next/link";

function Navbar() {
  return (
    <div className="border-b border-gray-300">
      <nav className="justify-center items-center m-5">
        <div className="flex justify-around items-center text-center">
          <Link 
            href='/'
            className="bg-indigo-500 p-2 text-white uppercase font-bold rounded-md shadow-md hover:bg-indigo-700 cursor-pointer transition-all"
          >Inicio</Link>

          <Link 
            href='/sobre-mi'
            className="bg-indigo-500 p-2 text-white uppercase font-bold rounded-md shadow-md hover:bg-indigo-700 cursor-pointer transition-all"
          >Sobre mí</Link>

          <Link 
            href='/proyectos'
            className="bg-indigo-500 p-2 text-white uppercase font-bold rounded-md shadow-md hover:bg-indigo-700 cursor-pointer transition-all"
          >Proyectos</Link>

          <Link 
            href='/contacto'
            className="bg-indigo-500 p-2 text-white uppercase font-bold rounded-md shadow-md hover:bg-indigo-700 cursor-pointer transition-all"
          >Contacto</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;