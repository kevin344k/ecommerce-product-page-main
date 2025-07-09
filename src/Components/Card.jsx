import React from "react";

import ButsendWas from "./ButEnviarWasap.jsx";
export default function Card({ producto }) {
  console.log(producto.id);

  return (
    <div className="   shadow-md rounded-md   border-Pale-orange transition-scale duration-300 hover:scale-105 hover:cursor-pointer">
      <div className="w-[250px] h-[250px] overflow-hidden rounded-tl-md rounded-tr-md">
        <img
          className="w-full h-full  rounded-tl-md rounded-tr-md object-cover"
          src={`${producto.imagen_url}`}
          alt={producto.nombre}
        />
      </div>
         <ButsendWas
        nombre={producto.nombre}
        imagen={producto.imagen_url}
        id={producto.id}
      />

   
    </div>
  );
}
