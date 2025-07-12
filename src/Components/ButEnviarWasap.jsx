import React from 'react';
import iconWasap from "/images/redes/icon-whatsapp.svg";

function EnviarWhatsApp({ id, nombre, imagen }) {
  const numero = '593980739896'; // Ecuador: 593 + número sin el 0
 
const API_URL = import.meta.env.VITE_API_URL; 
  const handleEnviar = () => {
    const urlProducto = `https://kr49kcnp-3000.use.devtunnels.ms/producto/${id}`;
const mensaje = `Hola, me interesa estew producto: ${urlProducto}`;
const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleEnviar}
      className="w-full flex items-center rounded-bl-md rounded-br-md justify-center gap-2 text-Pale-orange font-bold text-white bg-fm-Orange py-2 hover:bg-[#ff9637] hover:cursor-pointer"
    >
      <span className='text-xl font-fm-public-sans font-light'>Pedir</span>
      <img className='w-6 lg:w-9' src={iconWasap} alt="icon-wasap" />
    </button>
  );
}

export default EnviarWhatsApp;