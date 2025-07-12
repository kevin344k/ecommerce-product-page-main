import { useState, useEffect } from "react";
import ButHome from "../Components/ButHome";

export default function Add() {
  const [autenticado, setAutenticado] = useState(false);
  const [credenciales, setCredenciales] = useState({ usuario: "", clave: "" });
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    nombre: "",
    categoria: "",
    tallas: "",
    stock: "",
  });
  const [cargando, setCargando] = useState(false);

const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    if (localStorage.getItem("autenticado") === "true") {
      setAutenticado(true);
    }
  }, []);

  const login = (e) => {
    e.preventDefault();
    if (credenciales.usuario === "admin" && credenciales.clave === "1234") {
      localStorage.setItem("autenticado", "true");
      setAutenticado(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImagen = (e) => {
    const file = e.target.files[0];
    setImagen(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true); // 🟡 Activar loader
    const data = new FormData();
    data.append("image", imagen);
    data.append("nombre", form.nombre);
    data.append("categoria", form.categoria);
    data.append("tallas", form.tallas);
    data.append("stock", form.stock);

    try {
      const res = await fetch(
       `${API_URL}/api/productos/`,
        {
          method: "POST",
          body: data,
        }
      );
      if (!res.ok) throw new Error("Error en la respuesta del servidor");
      const result = await res.json();
      alert("Producto creado con éxito", result);
      // 🔁 Reiniciar formulario
      setForm({
        nombre: "",
        categoria: "",
        tallas: "",
        stock: "",
      });
      setImagen(null);
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Error al subir el producto");
    } finally {
      setCargando(false); // 🔴 Quitar loader
    }
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-[hsl(25,100%,94%)] flex items-center justify-center p-6">
        <form
          onSubmit={login}
          className="bg-white p-6 rounded-xl shadow-xl space-y-4 w-full max-w-sm"
        >
          <h2 className="text-xl font-bold text-[hsl(26,100%,55%)]">
            Iniciar sesión
          </h2>
          <input
            type="text"
            placeholder="Usuario"
            value={credenciales.usuario}
            onChange={(e) =>
              setCredenciales({ ...credenciales, usuario: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={credenciales.clave}
            onChange={(e) =>
              setCredenciales({ ...credenciales, clave: e.target.value })
            }
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-[hsl(26,100%,55%)] text-white py-2 rounded font-bold"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(25,100%,94%)] p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md space-y-4"
      >
       <div className="flex items-center justify-between mb-4">
         <h2 className="text-2xl font-bold text-[#ff7d1a]">
          Crear nuevo producto
        </h2>
       <ButHome></ButHome>
       </div>
        <div>
          <label className="block mb-1 font-medium">Imagen del producto</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagen}
            required
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-full h-40 object-contain rounded"
            />
          )}
        </div>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full border p-2 rounded"
          required
        />
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Categoría
        </label>
        <select
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="gorras">Gorras</option>
          <option value="camisetas_urbanas">Camisetas Urbanas</option>
          <option value="camisetas_equipos_y_clubes">
            Camisetas Equipos y Clubes
          </option>
          <option value="zapatos">Zapatos</option>
          <option value="pupos_pupillos">Pupos y Pupillos</option>
     
        </select>

        <input
          type="text"
          name="tallas"
          value={form.tallas}
          onChange={handleChange}
          placeholder="Tallas disponibles"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="stock"
          value={form.stock}
          onChange={handleChange}
          placeholder="Cantidad en stock"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-[hsl(26,100%,55%)] text-white font-bold py-2 rounded flex items-center justify-center gap-2"
          disabled={cargando}
        >
          {cargando ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                />
              </svg>
              Guardando...
            </>
          ) : (
            "Guardar producto"
          )}
        </button>
      </form>
    </div>
  );
}
