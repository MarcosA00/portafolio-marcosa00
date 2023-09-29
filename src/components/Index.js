import Image from "next/image"
import Link from "next/link"
import Img from '../../public/img/photo.jpeg'
import Logo from '../../public/img/github-logo.png'

function Index() {
  return (
    <div className="flex align-middle justify-items-center mt-20 mb-24 mx-60">
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

      <div className="lg:w-2/3 align-middle justify-between mt-10">
        <h1 className="font-bold text-4xl">Marcos Aaron Castro Rivas</h1>

        <div className="flex align-middle mt-8 ml-16 mb-10"> 
          <div className="lg:w-1/3"></div>

          <div className="lg:w-1/3">
              <Link
                href='https://github.com/MarcosA00'
              >
                <Image 
                  src={ Logo }
                  width={ 60 }
                  height={ 60 }
                  alt="Logo github"
                  priority
                  className="mt-5 mb "
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