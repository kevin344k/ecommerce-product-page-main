import "./App.css";

import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import AdminDashboard from "./views/AdminDashboard";
import Add from "./views/Add"; // Importa el componente de agregar producto
import List from "./views/List"; // Importa el componente de agregar producto

export default function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panel" element={<AdminDashboard />} />
         <Route path="/add-product" element={<Add />} />
     <Route path="/list-product" element={<List />} />
      </Routes>
  
  );
}
