import "./App.css";

import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import AdminForm from "./views/Admin";

export default function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panel" element={<AdminForm />} />
      </Routes>
  
  );
}
