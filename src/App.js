import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navegador from "./components/Navegador/Navegador";
import Dispositivos from "./components/Dispositivos/Dispositivos";
import Footer from "./components/Footer/Footer";
import MiInventario from "./components/inventario Dispositivos/Inventario";
import Fabricantes from "./components/Fabricantes/Fabricantes";

const App = () => {
  return (
    <Router>
      <Navegador />
      <Routes>
        <Route path="/" element={<Dispositivos/>} />
        <Route path="/Inventario" element={<MiInventario/>} />
        <Route path="/Proveedores" element={<Fabricantes/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
