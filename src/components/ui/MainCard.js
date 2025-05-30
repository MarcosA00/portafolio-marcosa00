'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Placeholder from '../../../public/img/placeholder.svg'

export default function Card({ title, company, location, date, img, description }) {
  const [trunc, setTrunc] = useState(true)

  const toggleTruncate = () => {
    setTrunc(!trunc)
  }

  return (
    <article className="w-[300px] relative bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={img || Placeholder}
          alt="Imagen de placeholder"
          fill
          className="mask-b-from-80% object-cover"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-xs text-gray-300 mb-2">{date}</span>
        <ol className={`ml-4 list-disc list-inside text-start text-xs transition-all ${trunc ? 'line-clamp-2' : ''}`}>
          {description.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ol>
        <button
          onClick={toggleTruncate}
          className="w-28 mt-2 bg-blue-500 p-2 text-xs text-white text-center uppercase font-bold rounded-md hover:bg-blue-700 cursor-pointer transition-all shadow-md m-auto"
        >
          {trunc ? 'Leer más' : 'Leer menos'}
        </button>
      </div>
    </article >
  )
}