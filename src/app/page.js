import Image from "next/image"
import Link from "next/link"

import Img from '../../public/img/photo.jpeg'
import Placeholder from '../../public/img/placeholder.svg'
import { FaGithub } from "react-icons/fa"

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center md:flex-row my-10">
        <div className="lg:w-1/2 flex justify-center items-center">
          <Image
            src={Placeholder}
            width={300}
            height={300}
            alt="Imagen de perfil"
            priority
            className="rounded-full"
          />
        </div>

        <div className="lg:w-1/2 text-center flex flex-col items-center gap-3">
          <h1 className="font-bold text-4xl text-center">Marcos Aaron Castro Rivas</h1>
          <div className="flex gap-3">
            <Link
              href='https://github.com/MarcosA00'
              className="w-36 flex items-center justify-center text-lg gap-1 bg-blue-500 p-3 text-white text-center uppercase font-bold rounded-md hover:bg-blue-700 cursor-pointer transition-all shadow-md"
            >
              GITHUB
              <FaGithub />
            </Link>

            <Link
              href='#contacto'
              className="w-36 bg-red-500 p-3 text-lg text-white text-center uppercase font-bold rounded-md hover:bg-red-700 cursor-pointer transition-all shadow-md"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </main>

      <section className="flex flex-col items-center gap-5 my-10">
        <h2 className="text-3xl font-bold">Sobre mí</h2>
        <p className="text-lg text-center max-w-2xl">
          Soy un desarrollador web apasionado por crear aplicaciones y sitios web que mejoren la experiencia del usuario. Me encanta aprender nuevas tecnologías y enfrentar desafíos en el desarrollo de software.
        </p>
      </section> 
    </>
  )
}

const buttons = [
  {
    id: 'github-button',
    text: ['GITHUB', <FaGithub key="github-icon" />],
    link: '',
  },
  {
    id: 'contact-button',
    text: 'CONTACTO',
    link: '#contacto'
  },
]