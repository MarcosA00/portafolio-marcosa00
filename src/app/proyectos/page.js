import Proyecto from "@/components/Proyecto";

function Proyectos() {
  return (
    <div className="mx-40 flex mt-10">
      <div className="lg:w-1/4 "></div>

      <div className="lg:w-2/4 mx-40">
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
          url = { 'https://control-de-gastos-y-presupuesto.netlify.app/' }
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

      <div className="lg:w-1/4"></div>
    </div>
  )
}

export default Proyectos;