import React from "react";
import NavBar from "../Components/Navbar";
import SectionCards from "../Components/SectionCards";
import heroImage from "/heroImg.jpeg";
import { useEffect, useState } from "react";
import Categorias from "../Components/Categorias";
import icon_gps from "/images/redes/icon-gps.svg";
import icon_facebook from "/images/redes/icon-facebook.svg";
import icon_instagram from "/images/redes/icon-instagram-color.svg";
import icon_telegram from "/images/redes/icon-telegram.svg";
import icon_tiktok from "/images/redes/icon-tiktok.svg";
import Footer from "../Components/Footer";

export default function Home() {
  const [productosPorCategoria, setProductosPorCategoria] = useState({});
  console.log("Productos por categoría:", productosPorCategoria);

  const jsonRedes = [
    {
      id: 1,
      name: "Facebook",
      url: "",
      icon: icon_facebook,
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/jorgemontoya5569/",
      icon: icon_instagram,
    },
    {
      id: 3,
      name: "Tiktok",
      url: "https://www.tiktok.com/@user2531996962637?_t=ZM-8xaKoHvrPt7&_r=1",
      icon: icon_tiktok,
    },
    {
      id: 4,
      name: "Telegram",
      url: "https://t.me/+593980739896",
      icon: icon_telegram,
    },
  ];

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
      <div className="py-2 bg-neutral-100 flex flex-col items-center gap-2 lg:justify-between lg:flex-row lg:px-4 lg:max-w-[1200px] lg:m-auto lg:bg-neutyral">
        <div className="flex justify-center items-center gap-2">
          <img className="w-4" src={icon_gps}></img>
          <a
            className="text-sm"
            href="https://www.google.com/maps/place/2%C2%B012'03.9%22S+79%C2%B053'01.4%22W/@-2.2010745,-79.8863057,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-2.2010745!4d-79.8837308?hl=es&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
          >
            Guayaquil-Manabí y el Alfaro(Local 42)
          </a>
        </div>
        <div className="flex justify-center items-center gap-2">
          <a className="w-7 cursor-pointer" href={jsonRedes[0].url}>
            <img src={jsonRedes[0].icon}></img>
          </a>
          <a className="w-7 cursor-pointer" href={jsonRedes[1].url}>
            <img src={jsonRedes[1].icon}></img>
          </a>
          <a className="w-7 cursor-pointer" href={jsonRedes[2].url}>
            <img src={jsonRedes[2].icon}></img>
          </a>
          <a className="w-7 cursor-pointer" href={jsonRedes[3].url}>
            <img src={jsonRedes[3].icon}></img>
          </a>
        </div>
      </div>
      <NavBar></NavBar>
      <main className="px-4">
        <section className="flex flex-col xl:max-w-[1250px] lg:max-w-[1100px] lg:m-auto lg:flex-col ">
          <div className="hidden">
            <img className="rounded-sm shadow-md" src={heroImage} alt="" />
          </div>
          <p className="text-2xl font-bold font-fm-kumbh-sans text-neutral-800 border-b-2 pb-2 border-fm-Orange">
            Descubre nuestros productos
          </p>
          <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 ">
            <Categorias></Categorias>
          </div>
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
              titulo="Zapatos"
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
