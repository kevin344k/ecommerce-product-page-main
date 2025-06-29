import React from "react";
import iconMinus from "/images/icon-minus.svg";
import iconPlus from "/images/icon-plus.svg";

import ButsendWas from "./ButEnviarWasap.jsx";
export default function Card({ producto }) {
    const BASE_URL = import.meta.env.BASE_URL;
  console.log(producto.categoria);

  return (
    <div className=" w-full mb-12">
   <div className="flex justify-between items-center w-full px-4 py-2 ">
       <p className="text-center font-fm-kumbh-sans font-bold uppercase text-xl">{producto.categoria}</p>
       <button className="text-sm text-fm-Orange bg-Pale-orange py-1 px-2 rounded-sm">Ver todo ...({producto.productos.length})</button>
   </div>
 
  <div className="flex flex-col  items-center w-full overflow-x-scroll scroll-bar-hide " > 
        <div className="flex gap-12 items-center w-fit  ml-[450px] mr-[100px] "> 
        {producto.productos.map((item, index) => (

            
            


          <div key={index} className="h-[fit] flex flex-col items-center w-[200px] rounded-md  border border-Pale-orange overflow-hidden">
            <img className="w-full h-[200px] object-cover" src={`${BASE_URL}${Array.isArray(item.imagen)?item.imagen[0]:item.imagen}` } alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="w-[190px] px-4 py-1 my-1 bg-neutral-100 flex rounded-md items-center justify-between">
                <button><img src={iconMinus} alt="" /></button>
                    <span className="text-neutral-500">1</span>
                <button><img src={iconPlus} alt="" /></button>
            
                 
            </div>
          
        <ButsendWas nombre={item.name} imagen="https://images.pexels.com/photos/32709250/pexels-photo-32709250.jpeg" />
          </div>
        ))}
      </div>
  </div>
    </div>
  );
}
