import React from "react";
import NavBar from "../Components/Navbar";
import SectionCards from "../Components/SectionCards";

import { useEffect, useState } from "react";


import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
export default function Home() {
  const [productosPorCategoria, setProductosPorCategoria] = useState({});
  console.log("Productos por categoría:", productosPorCategoria);

  useEffect(() => {
    fetch("https://kr49kcnp-3000.use.devtunnels.ms/api/productos")
      .then((res) => res.json())
      .then((data) => {
        // Agrupar por categoría
        const agrupados = {};

        data.forEach((producto) => {
          const cat =
            producto.categoria?.toLowerCase().trim() || "sin categoría";
          if (!agrupados[cat]) {
            agrupados[cat] = [];
          }
          agrupados[cat].push(producto);
        });

        setProductosPorCategoria(agrupados);
        console.log("Agrupados por categoría:", agrupados);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <main className="px-4 py-3 lg:py-12">
        <section className="flex  justify-between items-center xl:max-w-[1250px] lg:max-w-[1100px] lg:m-auto lg:flex-col ">
          <Hero></Hero>
        </section>

        <div className="py-12 lg:max-w-[1200px]  m-auto">
          <div>
            <SectionCards
              data={productosPorCategoria["camisetas_urbanas"] || []}
              titulo="Camisetas Urbanas"
            />
            <SectionCards
              data={productosPorCategoria["camisetas_equipos_y_clubes"] || []}
              titulo="Camisetas Equipos y Clubes"
            />

            <SectionCards
              data={productosPorCategoria["zapatos"] || []}
              titulo="Calzado Deportivo"
            />
            <SectionCards
              data={productosPorCategoria["pupos_pupillos"] || []}
              titulo="Pupos y Pupillos"
            />
            <SectionCards
              data={productosPorCategoria["gorras"] || []}
              titulo="Gorras"
            />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
