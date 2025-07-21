import { useState } from "react";
import iconMenu from "/images/icon-menu.svg";
import iconClose from "/images/icon-close.svg";

import logoJM from "/logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="">
      {" "}
      {/* Solo visible en móviles */}
      {/* Navbar */}
      <nav className="bg-fm-White p-4 lg:max-w-[1200px] m-auto flex items-center justify-between font-fm-kumbh-sans ">
        <div className="flex items-center justify-between flex-row-reverse w-full ">
          <button onClick={() => setIsOpen(true)} className="mr-4 flex">
            <img className="w-6 md:hidden" src={iconMenu} alt="icon-menu" />
           
          </button>
          <img src={logoJM} alt="" className="w-14 rounded-md " />
        </div>
        <div><ul className="hidden md:flex space-x-4">
          <li>Calzado</li>
          <li>Gorras</li>
          <li>Camisetas</li>
          <li>Contacto</li></ul></div>
     {/*   <div className="flex items-center space-x-4">
          <button className="flex">
            <img src={iconCart} alt="iconCart" />
          </button>
          <button>
            <img src={imageAvatar} alt="icon-avatar" className="w-8 h-8" />
          </button>
        </div>*/}
      </nav>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black z-40"
          onClick={closeMenu}
          style={{ opacity: 0.5 }}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 ">
          <button onClick={closeMenu}>
            <img className="w-6" src={iconClose} alt="icon-close" />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <a
              href="#inicio"
              onClick={closeMenu}
              className="text-fm-Black font-fm-kumbh-sans font-bold hover:text-blue-600"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              onClick={closeMenu}
              className="text-fm-Black font-fm-kumbh-sans font-bold hover:text-blue-600"
            >
              Camisetas
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="text-fm-Black font-fm-kumbh-sans font-bold hover:text-blue-600"
            >
              Calzado
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
