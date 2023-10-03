import Image from "next/image"
import Link from "next/link"
import Img from '../../public/img/photo.jpeg'
import Logo from '../../public/img/github-logo.png'

function Index() {
  return (
    <div className="flex my-[9.75rem] mx-80">
      <div className="lg:w-1/2">
        <Image 
          src={ Img }
          width={ 300 }
          height={ 300 }
          alt="Imagen de perfil"
          priority
          className="rounded-full"
        />
      </div>

      <div className="lg:w-2/3 text-center">
        <h1 className="font-bold text-4xl text-center mt-10">Marcos Aaron Castro Rivas</h1>

        <Link
          href='https://github.com/MarcosA00'
          className="mx-auto text-center text-lg font-bold"
        >
          <Image 
            src={ Logo }
            width={ 60 }
            height={ 60 }
            alt="Logo github"
            priority
            className="mx-auto mt-10"
          />

          Github
        </Link>

        <div className="mt-10">
          <Link
            href='/contacto'
            className="bg-red-500 mx-auto p-3 text-white text-center uppercase font-bold rounded-md hover:bg-red-700 cursor-pointer transition-all shadow-md"
          >Contáctame</Link>
        </div>
      </div>
    </div>
  )
}

export default Index