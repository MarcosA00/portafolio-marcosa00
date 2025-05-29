import Image from "next/image"
import Link from "next/link"

import Imagen from '../../public/img/photo.jpeg'
import { FaGithub } from "react-icons/fa"
import Card from "@/components/ui/Card"
import MainCard from "@/components/ui/MainCard"
import { proyectos } from "@/data/proyectos"
import { experience } from "@/data/experience"

export default function Home() {
  return (
    <div className="text-center max-w-[800px] flex flex-col items-center justify-center md:m-auto">
      <main className=" flex flex-col justify-center items-center gap-10 md:flex-row my-10">
        <div className="lg:w-1/2 flex justify-center items-center">
          <Image
            src={Imagen}
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
              id="about"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </main>

      <section className="flex flex-col items-center gap-5 my-10 text-wrap">
        <h2 className="text-3xl font-bold">Sobre mí</h2>
        <p className="text-lg text-center max-w-xl">
          Soy un desarrollador frontend Mexicano apasionado por crear aplicaciones y sitios web que mejoren la experiencia del usuario. Me encanta aprender nuevas tecnologías y enfrentar desafíos en el desarrollo de software.
        </p>
        <p className="text-lg text-center max-w-xl">
          Tengo experiencia en HTML, CSS, JavaScript y React, y siempre estoy buscando mejorar mis habilidades y aprender nuevas herramientas para ofrecer soluciones innovadoras.
        </p>
        <br />
        <h2 className="text-3xl font-bold">Experiencias relevantes:</h2>
        <div id="proyect" className="grid grid-cols1 md:grid-cols-2 w-full">
          {/* {
            experience.map((exp, index) => (
              <MainCard
                key={index}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                date={exp.date}
                img={exp.img}
                description={exp.description}
              />
            ))
          } */}
        </div>
      </section>

      <section className="flex flex-col items-center gap-5 my-10 text-wrap">
        <h2 className="text-3xl font-bold">Proyectos</h2>
        <div id="#proyects" className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {proyectos.map((proyecto, index) => (
            <Card
              key={index}
              img={proyecto.img}
              title={proyecto.titulo}
              subtitle={proyecto.tecnologias}
              description={proyecto.descripcion}
              url={proyecto.url}
            />
          ))}
        </div>
      </section>
    </div>
  )
}