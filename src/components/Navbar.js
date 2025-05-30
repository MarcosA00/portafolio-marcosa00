'use client'
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

import { navigation } from "@/data/navigation"

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const pathname = usePathname()
  const isActive = (href) => {
    return pathname === href
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b bg-gray-200/75 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container flex h-20 items-center justify-between">
          {/* Menú para pantallas grandes */}
          <nav className="hidden md:flex mx-auto items-center justify-center gap-6">
            {
              navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className={"text-lg font-medium hover:text-club-secondary hover:font-semibold hover:underline hover:text-blue-500 transition-colors} " + (isActive == item.href ? "text-club-secondary font-semibold underline" : "")}
                >
                  {item.name}
                </Link>
              ))
            }
          </nav>

          {/* Botón de menú móvil */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden text-club-primary focus:outline-none focus:ring-2 focus:ring-club-primary p-2"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>

        {/* Menú desplegable para móviles */}
        {menuAbierto && (
          <div className="md:hidden bg-background border-t">
            <nav className="flex flex-col gap-4 p-4">
              {
                navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={item.name}
                    className="text-sm font-medium hover:text-club-secondary transition-colors hover:text-club-secondary hover:font-semibold hover:underline hover:text-blue-500"
                    onClick={() => setMenuAbierto(false)}
                  >
                    {item.name}
                  </Link>
                ))
              }

            </nav>
          </div>
        )}
      </header>

      <main className="mt-20">
        {/* ...contenido de la página... */}
      </main>
    </>
  )
}