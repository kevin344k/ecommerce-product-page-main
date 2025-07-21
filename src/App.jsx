import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import AdminDashboard from "./views/AdminDashboard";
import Add from "./views/Add"; // Importa el componente de agregar producto
import List from "./views/List"; // Importa el componente de agregar producto
import AllItems from "./views/AllItems";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/panel" element={<AdminDashboard />} />
      <Route path="/add-product" element={<Add />} />
    <Route path="/ver-todo/:titulo" element={<AllItems/>}></Route>
      <Route path="/list-product" element={<List />} />
    </Routes>
  );
}

//  <Route path="api/productos/:id" element={<ProductoDetalle />} />
