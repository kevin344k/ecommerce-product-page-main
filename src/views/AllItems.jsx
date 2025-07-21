import React from "react";
import NavBar from "../Components/Navbar";
import { useLocation, useParams } from "react-router-dom";
import Card from "../Components/Card";
export default function AllItems() {
  const { titulo } = useParams();
  const location = useLocation();
  const data = location.state?.data || [];
  return (
    <>
      <NavBar></NavBar>
      <main className="px-4 py-12">
        <p className="font-fm-public-sans mb-6 font-bold text-xl text-center lg:text-3xl ">
          {titulo}
        </p>
        <div className="w-full flex flex-wrap gap-6 justify-center">
          {data.map((producto, index) => (
            <Card key={index} producto={producto} />
          ))}
        </div>
      </main>
    </>
  );
}
