import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Consolidado from './components/Consolidado/Consolidado.js';
import Dispositivos from './components/Dispositivos/Dispositivos.js';
import Footer from './components/Footer/Footer.js';
import Navegador from './components/Navegador/Navegador.js';


const AppRouter = () => {
  return (

    <Router>
      <Navegador/>
      <Footer/>
      <Route exact path="/" component={Dispositivos} />
      <Route path="/Consolidado" component={Consolidado} />
      {/* <Route path="/contact" component={ContactPage} /> */}
    </Router>
       
      
  );
};

export default AppRouter;
