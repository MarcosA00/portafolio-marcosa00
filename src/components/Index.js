import Image from "next/image"
import Link from "next/link"
import Img from '../../public/img/photo.jpeg'
import Logo from '../../public/img/github-logo.png'

function Index() {
  return (
    <div className="flex mt-20 mb-24 mx-80">
      <div className="lg:w-1/2 flex">
        <Image 
          src={ Img }
          width={ 300 }
          height={ 300 }
          alt="Imagen de perfil"
          priority
          className="rounded-full"
        />
      </div>

      <div className="lg:w-2/3 align-middle justify-between mt-10">
        <h1 className="font-bold text-4xl">Marcos Aaron Castro Rivas</h1>

        <div className="flex align-middle justify-between mt-8 mb-10"> 
          <div className="lg:w-1/3"></div>

          <div className="lg:w-1/3 align-middle justify-between">
              <Link
                href='https://github.com/MarcosA00'
              >
                <Image 
                  src={ Logo }
                  width={ 60 }
                  height={ 60 }
                  alt="Logo github"
                  priority
                  className="mt-5  -ml-10"
                />
                Github
              </Link>
          </div>

          <div className="lg:w-1/3"></div>
        </div>

        <div className="flex -ml-5">
          <div className="lg:w-1/3"></div>

          <Link
            href='/contacto'
            className="lg:w-1/3 bg-red-500 w-full p-3 text-white text-center uppercase font-bold rounded-md hover:bg-red-700 cursor-pointer transition-all mx-5 shadow-md"
          >Contáctame</Link>

          <div className="lg:w-1/3"></div>
        </div>
      </div>
    </div>
  )
}

export default Index