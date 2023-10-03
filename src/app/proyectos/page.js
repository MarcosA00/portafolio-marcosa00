import Proyecto from "@/components/Proyecto";

export const metadata = {
  title: 'Proyectos'
}

function Proyectos() {
  return (
    <div className="m-14 mb-[5.5rem] justify-center">
      <div className="flex items-center gap-x-5 overflow-x-scroll snap-x mx-80">
        <Proyecto 
          titulo = { 'Gestor de Citas' }
          img = { '/img/gestor-citas.png' }
          descripcion = { 'Gestor de citas para una veterinaria.' }
          url = { 'https://citas-de-paciente-vite.netlify.app/' }
        />

        <Proyecto 
          titulo = { 'Control de Gastos' }
          img = { '/img/control-gastos.png' }
          descripcion = { 'Gestor de Gastos, CRUD' }
          url = { '/proyectos/control-gastos' }
        />
        
        <Proyecto 
          titulo = { 'Cotizador de Criptomonedas' }
          img = { '/img/criptos.png' }
          descripcion = { 'Cotizador de Criptomonedas en tiempo real.' }
          url = { 'https://crypto-consulta.netlify.app/' }
        />

        <Proyecto 
          titulo = { 'CRM - Clientes' }
          img = { '/img/crm.png' }
          descripcion = { 'CRM - Clientes, CRUD' }
          url = { 'https://amazing-marzipan-ea5d77.netlify.app/' }
        />
      </div>
    </div>
  )
}

export default Proyectos;