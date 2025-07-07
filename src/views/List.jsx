import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButHome from '../Components/ButHome';

const List = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Obtener productos
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const res = await fetch('https://kr49kcnp-3000.use.devtunnels.ms/api/productos');
        if (!res.ok) throw new Error('Error al obtener productos');
        const data = await res.json();
        setProductos(data);
        console.log(data);
        
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los productos.');
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  // Eliminar producto
  const eliminarProducto = async (id) => {
    const confirmar = confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (!confirmar) return;

    try {
      const res = await fetch(`https://kr49kcnp-3000.use.devtunnels.ms/api/productos${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Error al eliminar el producto');

      setProductos(productos.filter((p) => p.id !== id));
      alert('Producto eliminado correctamente');
    } catch (err) {
      console.error(err);
      alert('No se pudo eliminar el producto');
    }
  };

  // Redirigir a editar
  const editarProducto = (id) => {
    navigate(`/edit-product/${id}`);
  };

  if (cargando) return <p className="text-center p-4">Cargando productos...</p>;
  if (error) return <p className="text-red-500 text-center p-4">{error}</p>;
  if (productos.length === 0) return <p className="text-center p-4">No hay productos disponibles.</p>;

  return (
    <div className=" p-4 lg:max-w-[1100px] m-auto">
    <div className='flex justify-between items-center mb-4'>
        <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
        <ButHome></ButHome>
    </div>
    <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-2'>
        {productos.map((producto) => (
        <div
          key={producto.id}
          className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition"
        >
          <img
          src={`${producto.imagen_url}`}
            alt={producto.nombre}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            <p className="text-sm text-gray-600">Color: {producto.color}</p>
            <p className="text-sm text-gray-800">
              Disponible: {producto.disponible ? 'Sí' : 'No'}
            </p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => editarProducto(producto.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
              >
                Editar
              </button>
              <button
                onClick={() => eliminarProducto(producto.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default List;
