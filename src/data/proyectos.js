import GestorCitas from '../../public/img/gestor-citas.png'
import ControlGastos from '../../public/img/control-gastos.png'
import Agencia from '../../public/img/agencia-de-viajes.webp'
import CotizadorSeguros from '../../public/img/cotizador-seguros.webp'
import Cryptos from '../../public/img/cryptos.webp'

export const proyectos = [
  {
    titulo: 'Agencia de Viajes',
    img: Agencia,
    descripcion: 'Sitio web de una agencia de viajes, con un diseño elegante y moderno para promociones comerciales',
    tecnologias: 'Next.js, Tailwind CSS, React, TypeScript, SendGrid',
    url: 'https://blue-elegance-resorts-vv.vercel.app/'
  },
  {
    titulo: 'Gestor de Citas',
    img: GestorCitas,
    descripcion: 'Gestor de citas para una veterinaria',
    tecnologias: 'React, Tailwind CSS',
    url: 'https://citas-de-paciente-vite.netlify.app/'
  },
  {
    titulo: 'Control de Gastos',
    img: ControlGastos,
    descripcion: 'Control de gastos, CRUD',
    tecnologias: 'React, Tailwind CSS',
    url: 'https://control-de-gastos-y-presupuesto.netlify.app/'
  },
  {
    titulo: 'Cotizador de Seguros',
    img: CotizadorSeguros,
    descripcion: 'Cotizador de seguros, con un diseño moderno y elegante',
    tecnologias: 'React, Tailwind CSS, JS',
    url: 'https://cotizador-seguros-eta.vercel.app/'
  },
  {
    titulo: 'Cotizador de Cryptomonedas',
    img: Cryptos,
    descripcion: 'Cotizador de cryptomonedas, con un diseño moderno y elegante',
    tecnologias: 'React, Tailwind CSS, JS',
    url: 'https://cryptos-react-omega.vercel.app/'
  }
]