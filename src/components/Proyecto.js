import Image from "next/image"
import Link from "next/link"

function Proyecto({ 
  titulo, 
  img, 
  descripcion, 
  url 
}) {
  return (
    <div className="snap-center min-w-[75%]">
      <div className="bg-white mb-10 rounded-md p-5 flex shadow justify-center object-cover">
        <Link
          href={ url }
        >
          <h2 className="text-center font-bold text-2xl mb-5">{ titulo }</h2>

          <Image 
            src={ img }
            width={ 500 }
            height={ 300 }
            priority
            alt="Imagen proyecto"
            className="mb-5 rounded-md shadow w-auto h-auto"
          />

          <p className="text-center text-xl">{ descripcion }</p>
        </Link>
      </div>
    </div>
  )
}

export default Proyecto