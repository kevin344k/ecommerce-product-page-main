import React from "react";

import ButsendWas from "./ButEnviarWasap.jsx";
export default function Card({ producto }) {
  console.log(producto);

  return (
    <div className="   shadow-md rounded-md   border-Pale-orange ">
      <div className="w-[250px] h-[250px] overflow-hidden rounded-tl-md rounded-tr-md">
        <img
          className="w-full h-full  rounded-tl-md rounded-tr-md object-cover"
          src={`${producto.imagen_url}`}
          alt={producto.nombre}
        />
      </div>
         <ButsendWas
        nombre={producto.nombre}
        imagen="https://images.pexels.com/photos/32709250/pexels-photo-32709250.jpeg"
      />

   
    </div>
  );
}
