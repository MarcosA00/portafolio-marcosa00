import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Control de Gastos'
}

function ControlGastos() {
  return (
    <div className="bg-white mx-72 my-10 py-2">
      <h1 className="text-center mt-5 text-5xl font-bold">Control de Gastos</h1>

      <div className="m-10 items-center">
        <Image 
          src='/img/control-gastos.png'
          width={ 500 }
          height={ 300 }
          priority
          alt="Imagen proyecto control de gastos"
          className="mb-5 rounded-md shadow w-auto h-auto mx-auto"
        />

        <div className="flex mt-10 mx-48 items-center">
          <Link 
            className="flex items-center w-1/2 px-10 mx-auto"
            href='https://control-de-gastos-y-presupuesto.netlify.app/'
            target="_blank"
          >
            <p className="text-center text-2xl font-bold text-gray-600 hover:text-gray-800">Visitar App</p>

            <Image 
              src='/img/tierra-icono.png'
              width={ 30 }
              height={ 30 }
              alt="Logo github"
              priority
              className="mx-auto"
            />
          </Link>

          <Link
          href='https://github.com/MarcosA00/control_gastos'
          target="_blank"
          className="mx-auto w-1/2 flex items-center"
        >
          <p className="text-center text-2xl font-bold text-gray-600 hover:text-gray-800">Visitar repositorio</p>

          <Image 
            src='/img/github-logo.png'
            width={ 30 }
            height={ 30 }
            alt="Logo github"
            priority
            className="mx-auto"
          />
        </Link>
        </div>

        <p className="text-center my-10 mx-32 text-2xl font-bold">CRUD Control de Gastos creado con React, Vite y TailwindCSS. Funciona con State y LocalStorage.</p>
      </div>
    </div>
  )
}

export default ControlGastos;