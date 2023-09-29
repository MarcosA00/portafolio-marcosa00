import Proyecto from "@/components/Proyecto";
import { proyectos } from "@/utils/proyectos"

function ControlGastos() {
  const { titulo, img, descripcion, url } = proyectos

  return (
    <div>
      { proyectos.map(proyecto => {
        <Proyecto 
          titulo = { '' }
          img = { '' }
          descripcion = { '' }
          url = { '' }
        />
      }) }
    </div>
  )
}

export default ControlGastos;