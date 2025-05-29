'use client'
import { useState, useEffect } from "react"

export default function Form() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("¡Mensaje enviado correctamente!");
        setForm({ nombre: "", email: "", mensaje: "" });
      } else {
        setSuccess("Hubo un error al enviar el mensaje.");
      }
    } catch {
      setSuccess("Hubo un error al enviar el mensaje.");
    }
    setLoading(false);
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [success])

  return (
    <section className="mb-10">
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-5">Contáctame</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition-all shadow-md"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
          {success && (
            <div
              className={`text-center text-sm mt-2 px-4 py-2 rounded transition-all duration-300 ${
                success.includes("correctamente")
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
              role="alert"
            >
              {success}
            </div>
          )}
        </div>
      </form>
    </section>
  )
}