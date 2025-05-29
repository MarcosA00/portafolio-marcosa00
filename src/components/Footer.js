import Link from "next/link"

function Footer() {
  return (
    <div className="border-t border-gray-300">
      <footer className="text-center md:text-end m-5">
        <p className="text-gray-700 text-md">
          Desarrollado por{" "}
          <Link
            href="https://github.com/MarcosA00"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
          Marcos Aarón
          </Link>
          {" "}© {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}

export default Footer