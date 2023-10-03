import Link from "next/link";

function Navbar() {
  return (
    <div className="border-b border-gray-300">
      <nav className="align-middle justify-center m-5">
        <div className="flex justify-center text-center mx-60">
          <Link 
            href='/'
            className="bg-indigo-500 w-full p-2 px-120 text-white uppercase font-bold rounded-md shadow-md hover:bg-indigo-700 cursor-pointer transition-all mx-5"
          >Inicio</Link>

          <Link 
            href='/sobre-mi'
            className="bg-indigo-500 w-full p-2 px-120 text-white uppercase font-bold rounded-md shadow-md hover:bg-indigo-700 cursor-pointer transition-all mx-5"
          >Sobre mí</Link>

          <Link 
            href='/proyectos'
            className="bg-indigo-500 w-full p-2 px-120 text-white uppercase font-bold rounded-md shadow-md hover:bg-indigo-700 cursor-pointer transition-all mx-5"
          >Proyectos</Link>

          <Link 
            href='/contacto'
            className="bg-indigo-500 w-full p-2 px-120 text-white uppercase font-bold rounded-md shadow-md hover:bg-indigo-700 cursor-pointer transition-all mx-5"
          >Contacto</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;