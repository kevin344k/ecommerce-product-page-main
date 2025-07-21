import React from "react";
import iconArrow from "/images/icon-next-bl.svg";
import LazyImage from "./LazyImage";
export default function Categorias() {
const jsonCategorias = [
  {
    id_text: "section-Camisetas Urbanas",
    nombre1: "Camisetas ",
    nombre2: "Moda Urbana",
    url_cover:
      "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    id_text: "section-Camisetas Equipos y Clubes",
    nombre1: "Camisetas ",
    nombre2: "Equipos y Clubes",
    url_cover:
      "https://images.pexels.com/photos/14547930/pexels-photo-14547930.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    id_text: "section-Zapatos",
    nombre1: "Calzado",
    nombre2: "",
    url_cover:
      "https://images.pexels.com/photos/2364582/pexels-photo-2364582.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    id_text: "section-Gorras",
    nombre1: "Gorras",
    nombre2: "",
    url_cover:
      "https://images.pexels.com/photos/31162881/pexels-photo-31162881.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    id_text: "section-Pupos y Pupillos",
    nombre1: "Calzado",
    nombre2: "Pupos y Pupillos",
    url_cover:
      "https://images.pexels.com/photos/27299916/pexels-photo-27299916.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
];

  return (
    <>
      {jsonCategorias.map((categoria, index) => (
        <div
          key={index}
          className="relative w-80 h-80 flex flex-col items-center shadow-lg  lg:w-50 lg:h-60 rounded-md border border-neutral-300"
        >
          <img
            src={categoria.url_cover}
            alt={categoria.nombre} 
            className="w-full h-full object-cover object-center rounded-md "
          />
          <div className="absolute z-20 w-full h-1/2 lg:h-2/3 bottom-0 left-0  bg-gradient-to-t from-black/90 to-transparent3 rounded-bl-md rounded-br-md"></div>
          <div className="absolute w-full z-20 flex items-center justify-between bottom-0   lg:flex-col  font-fm-kumbh-sans  p-4  text-white rounded-full">
            <div>
              <p className="text-xl text-neutral-200">{categoria.nombre2}</p>
              <p className="text-3xl font-semibold font-fm-public-sans text-neutral-400">
                {categoria.nombre1}
              </p>
            </div>
            <a href={`#${categoria.id_text}`}  className="px-4 py-1 lg:w-full flex justify-center items-center gap-1 lg:4 justify-center bg-neutral-500 rounded-full shadow-sm shadow-neutral-900 hover:scale-105">
              <p >ver</p>
              <img className="w-2" src={iconArrow} alt="icon-arrow"></img>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
