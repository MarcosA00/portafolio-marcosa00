import Image from "next/image"
import Placeholder from '../../../public/img/placeholder.svg'

export default function Card({ title, company, location, date, img, description }) {
  return (
    <article className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white hover:shadow-2xl transition-all duration-300 min-h-[340px]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={img || Placeholder}
          alt={company || title}
          fill
          priority={!!img}
          quality={80}
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          placeholder="empty"
        />
        {/* Overlay de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      </div>
      {/* Contenido */}
      <div className="relative z-10 flex flex-col gap-2 p-6">
        <span className="text-2xl font-extrabold text-white drop-shadow-lg leading-tight">{title}</span>
        <div className="flex items-center gap-2 text-sm text-gray-200 drop-shadow">
          <span className="font-semibold">{company}</span>
          <span className="text-gray-400">|</span>
          <span>{location}</span>
        </div>
        <span className="text-xs text-gray-300 drop-shadow mb-2">{date}</span>
        <p className="text-base text-white/90 drop-shadow max-h-24 overflow-y-auto">{description}</p>
      </div>
      {/* Sombra decorativa inferior */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </article>
  )
}