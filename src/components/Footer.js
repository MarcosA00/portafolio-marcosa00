import Link from "next/link"
import Image from "next/image"

import Img from '../../public/img/photo.jpeg'
import { FaGithub } from "react-icons/fa"

function Footer() {
  return (
    <div className="border-t border-gray-300"> 
      <footer className="flex align-middle justify-center m-5 space-x-80">
        <nav className="lg:2/3">
        <Link 
          href='/'
          className="text-center mx-5 text-gray-700 font-bold text-lg hover:text-white cursor-pointer transition-all"
        >Inicio</Link>

        <Link 
          href='/sobre-mi'
          className="text-center mx-5 text-gray-700 font-bold text-lg hover:text-white cursor-pointer transition-all"
        >Sobre mí</Link>

        <Link 
          href='/proyectos'
          className="text-center mx-5 text-gray-700 font-bold text-lg hover:text-white cursor-pointer transition-all"
        >Proyectos</Link>

        <Link 
          href='/contacto'
          className="text-center mx-5 text-gray-700 font-bold text-lg hover:text-white cursor-pointer transition-all"
        >Contacto</Link>
        </nav>

        <p className="lg:1/3 text-gray-700 font-bold text-lg">Todos los derechos reservados © { new Date().getFullYear() }</p>
      </footer>
    </div>
  )
}

export default Footer;