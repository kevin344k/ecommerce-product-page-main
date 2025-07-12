import React from "react";
import ButsendWas from "./ButEnviarWasap.jsx";
import LazyImage from "./LazyImage.jsx";


export default function Card({ producto }) {
  return (
    <div className=" rounded-md border-Pale-orange transition-transform duration-300 hover:scale-105 hover:cursor-pointer w-[250px]">
      <div className="relative  w-full h-[300px] overflow-hidden rounded-tl-md rounded-tr-md">
        <LazyImage
          src={producto.imagen_url}
          alt={producto.nombre}
          className=""
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
