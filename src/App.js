import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navegador from "./components/Navegador/Navegador";
import Dispositivos from "./components/Dispositivos/Dispositivos";
import Footer from "./components/Footer/Footer";
import Consolidado from "./components/Consolidado/Consolidado";
import Usuarios from "./components/Usuarios/Usuarios";

const App = () => {
  return (
    <Router>
      <Navegador />
      <Routes>
        <Route path="/" element={<Dispositivos/>} />
        <Route path="/Consolidado" element={<Consolidado/>} />
        <Route path="/Usuarios" element={<Usuarios/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
