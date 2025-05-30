import Image from "next/image"
import Link from "next/link"  

import Placeholder from '../../../public/img/placeholder.svg'

export default function Card({ img, title, subtitle, description, url }) {

  return (
    <article className="group max-w-[300px] relative overflow-hidden rounded-xl">
      <Image
        width={500}
        height={80}
        priority
        src={img || Placeholder}
        alt={title || "Imagen del proyecto"}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end items-center p-6 gap-2 text-white">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold">{title}</span>
          <span className="text-xs text-gray-200">({subtitle})</span>
        </div>
        <p className="text-xs text-white">{description}</p>
        {url ? (
          <Link
            href={url}
            className="w-28 bg-blue-500 p-3 text-xs text-white text-center uppercase font-bold rounded-md hover:bg-blue-700 cursor-pointer transition-all shadow-md"
            target="_blank"
          >
            Ver más...
          </Link>
        ) : (
          <span className="w-18 bg-gray-400 p-3 text-xs text-white text-center uppercase font-bold rounded-md cursor-not-allowed shadow-md opacity-60">
            Sin enlace
          </span>
        )}
      </div>
    </article>
  )
}