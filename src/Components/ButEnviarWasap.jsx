import React from 'react';
 import iconWasap from "/images/redes/icon-whatsapp.svg";
function EnviarWhatsApp({ nombre, imagen }) {
  const numero = '593999312678'; // Ecuador: 593 + número sin el 0

  const handleEnviar = () => {
    const mensaje = `${imagen} `;
    const url = ` https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleEnviar}
      className="w-full flex items-center rounded-bl-md rounded-br-md justify-center gap-2 text-Pale-orange font-bold text-white bg-fm-Orange py-2"
    >
     <span className='text-xl font-fm-public-sans font-light'>Pedir</span>
    <img className='w-6 lg:w-9' src={iconWasap} alt="icon-wasap" />
    </button>
  );
}

export default EnviarWhatsApp;
