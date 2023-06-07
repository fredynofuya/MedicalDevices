import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MiInventario from './components/inventario Dispositivos/Inventario.js';
import Dispositivos from './components/Dispositivos/Dispositivos.js';
import Footer from './components/Footer/Footer.js';
import Navegador from './components/Navegador/Navegador.js';


const AppRouter = () => {
  return (
   
      
      <Router>
        <Navegador/>
        <Footer/>
      <Route exact path="/" component={Dispositivos} />
      <Route path="/MiInventario" component={MiInventario} />
      {/* <Route path="/contact" component={ContactPage} /> */}
    </Router>
       
      
  );
};

export default AppRouter;
