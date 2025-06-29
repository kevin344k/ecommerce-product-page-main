import React from 'react'
import NavBar from "../Components/Navbar";
import SectionCards from "../Components/SectionCards";
import heroImage from "/heroImg.jpeg";
import { useEffect, useState } from "react";
export default function Home() {

  

      const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("/ecommerce-product-page-main/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data); // asegúrate de que el JSON tenga la propiedad "productos"
        console.log(data);
      })

      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });



   fetch("/ecommerce-product-page-main/categorias_main.json")
      .then((res) => res.json())
      .then((data) => {
        setCategorias(data);
        console.log(data);
      })

      .catch((error) => {
        console.error("Error al cargar las categorías:", error);
      });

  }, []);

  return (
    <>
       <NavBar></NavBar>
      <main className="py-6">
        <section>
          <img src={heroImage} alt="" />
           </section>
           <section>
          
            <p className="text-2xl font-bold font-fm-kumbh-sans">Descubre nuestros productos</p>
            {
              categorias.map((categoria, index) => (
                <div key={index} className="bg-fm-Orange text-white px-4 py-2 rounded-md m-2">
                 <p className="text-center"> {categoria.nombre}</p>
                
                </div>
              ))
            }
           </section>
        <SectionCards data={productos}></SectionCards>
      </main>
    </>
  )
}
