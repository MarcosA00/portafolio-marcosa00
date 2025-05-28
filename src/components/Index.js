import Image from "next/image"
import Link from "next/link"
import Img from '../../public/img/photo.jpeg'
import { FaGithub } from "react-icons/fa"

function Index() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row m">
      <div className="lg:w-1/2 flex justify-center items-center">
        <Image
          src={Img}
          width={300}
          height={300}
          alt="Imagen de perfil"
          priority
          className="rounded-full"
        />
      </div>

      <div className="lg:w-1/2 text-center flex flex-col items-center gap-3">
        <h1 className="font-bold text-4xl text-center">Marcos Aaron Castro Rivas</h1>

        <Link
          href='https://github.com/MarcosA00'
          className="flex items-center  text-center text-lg font-bold"
        >
          <FaGithub />

          Github
        </Link>
        <Link
          href='#contacto'
          className="bg-red-500 p-3 text-white text-center uppercase font-bold rounded-md hover:bg-red-700 cursor-pointer transition-all shadow-md"
        >Contáctame</Link>
      </div>
    </div>
  )
}

export default Index