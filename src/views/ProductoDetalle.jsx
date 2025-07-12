// src/pages/ProductoDetalle.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  console.log(id);

const url="https://kr49kcnp-3000.use.devtunnels.ms"

  
  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const res = await fetch(`${url}/api/productos/${id}`); // cambia si tu ruta es distinta
        if (!res.ok) throw new Error('Producto no encontrado');
        const data = await res.json();
        setProducto(data);
      } catch (error) {
        console.error(error);
      } finally {
        setCargando(false);
      }
    };

    obtenerProducto();
  }, [id]);
console.log(producto);


  if (cargando) return <p>Cargando...</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{producto.nombre}</h1>
      <img
        src={producto.imagen_url}
        alt={producto.nombre}
        style={{ maxWidth: 300 }}
      />
      <p>ID: {producto.id}</p>
    </div>
  );
};

export default ProductoDetalle;
