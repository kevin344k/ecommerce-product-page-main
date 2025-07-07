import React from 'react';
import { useNavigate } from 'react-router-dom';
const DashboardButtons = () => {
      const navigate = useNavigate();
  const handleAgregar = () => {
    console.log("Agregar producto");
    // lógica para agregar
       navigate('/add-product');
  };

  const handleListar = () => {
    console.log("Listar productos");
    // lógica para listar
     navigate('/list-product');
  };

  const handleEditar = () => {
    console.log("Editar producto");
    // lógica para editar
  };

  const handleEliminar = () => {
    console.log("Eliminar producto");
    // lógica para eliminar
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto">

      <button
    
        onClick={handleAgregar}
        className="bg-fm-Orange hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        Agregar producto
      </button>
      <button
        onClick={handleListar}
        className="bg-fm-Orange hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        Listar productos
      </button>
      <button
        onClick={handleEditar}
        className="bg-fm-Orange hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        Editar producto
      </button>
      <button
        onClick={handleEliminar}
        className="bg-fm-Orange hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        Eliminar producto
      </button>
    </div>
  );
};

export default DashboardButtons;
