import React, { useEffect, useRef, useState } from "react";
import iconWasap from "/images/redes/icon-whatsapp.svg";

function EnviarWhatsApp({ id }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const numero = "593980739896"; // Ecuador: 593 + número sin el 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const handleEnviar = () => {
    const urlProducto = `https://kr49kcnp-3000.use.devtunnels.ms/producto/${id}`;
    const mensaje = `Hola, me interesa este producto: ${urlProducto}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div ref={ref} className="w-full  flex justify-center items-center">
      {isVisible ? (
        <button
          onClick={handleEnviar}
          className="w-full px-6 py-2 flex justify-center items-center  rounded-bl-3xl rounded-br-3xl gap-4 text-white font-semibold shadow-md hover:from-neutral-600 hover:to-neutral-800 hover:shadow-lg transition-all duration-300 bg-[#ff9637] hover:cursor-pointer"
        >
          <span className="text-xl font-fm-kumbh-sans-sans font-light">Pedir</span>
          <img className="w-7 lg:w-7" src={iconWasap} alt="icon-wasap" />
        </button>
      ) : (
        <div className="w-full h-10 bg-gray-300 animate-pulse rounded-bl-md rounded-br-md" />
      )}
    </div>
  );
}

export default EnviarWhatsApp;
