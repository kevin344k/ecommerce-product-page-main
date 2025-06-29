import React from 'react';
 import iconWasap from "/images/whatsapp.svg";
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
      className="w-full flex items-center justify-center gap-2 text-Pale-orange font-bold  bg-fm-Orange py-2"
    >
     Pedir
    <img className='w-5' src={iconWasap} alt="icon-wasap" />
    </button>
  );
}

export default EnviarWhatsApp;
