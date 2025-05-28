'use client'
import Link from "next/link";
import { useState } from "react"

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Menú para pantallas grandes */}
        <nav className="hidden md:flex mx-auto items-center justify-center gap-6">
          {
            navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="text-lg font-medium hover:text-club-secondary hover:font-semibold hover:underline hover:text-blue-500 transition-colors">
                {item.name}
              </Link>
            ))
          }
        </nav>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden text-club-primary focus:outline-none focus:ring-2 focus:ring-club-primary"
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {menuAbierto && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-club-secondary transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Inicio
            </Link>
            <Link
              href="#destinos"
              className="text-sm font-medium hover:text-club-secondary transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Destinos
            </Link>
            <Link
              href="#servicios"
              className="text-sm font-medium hover:text-club-secondary transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Servicios
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium hover:text-club-secondary transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Testimonios
            </Link>
            <Link
              href="/resenas"
              className="text-sm font-medium hover:text-club-secondary transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Reseñas
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export const navigation = [
  {
    name: "Inicio",
    href: "/",
    current: true,
  },
  {
    name: "Sobre mi",
    href: "#about",
    current: false,
  },
  {
    name: "Proyectos",
    href: "#proyects",
    current: false,
  },
  {
    name: "Contacto",
    href: "#testimonios",
    current: false,
  }
]