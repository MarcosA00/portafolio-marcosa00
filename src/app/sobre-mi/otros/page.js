import Link from "next/link";
import Otros from "@/components/Otros";
import LayoutAbout from "@/components/LayoutAbout";

function Page() {
  return (
    <div className="flex bg-white rounded-md my-12 mx-40 text-center mb-16">
      <section className="lg:w-1/2 my-5">
        <h2 className="font-bold text-3xl mb-5">Habilidades</h2>

        <LayoutAbout />

        <Otros />
      </section>

      <section className="lg:w-1/2 mt-5 mb-10">
        <h1 className="font-bold text-3xl mb-5">Experiencia</h1>

        <p className="text-lg text-justify mx-8 mb-5">Mi nombre es Marcos, soy un desarrolador web mexicano con habilidades Frontend, con experiencia en la maquetación y creación de aplicaciones web.
        </p>

        <p className="text-lg text-justify mx-8 mb-10">Actualmente he desarrollado varios proyectos personales y espero poder involucrarme pronto en proyectos con mayor impacto.</p>

        <Link 
          href='/pdf/cv.pdf'
          className="bg-red-500 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-red-700 cursor-pointer transition-all mx-5 shadow-md"
        >Descargar CV</Link>
      </section>
    </div>
  )
}

export default Page;