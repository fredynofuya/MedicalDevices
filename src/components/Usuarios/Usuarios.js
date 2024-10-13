import "./usuarios.css";
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
//const jsData = require("../BD/Fabricantes.json");

const Usuarios = () => {
  return (
    <section>
      <div className="wrapper">
        <form action="">

          <h1>Usuario</h1>
          <div className="input-box">
              <input type="text" placeholder="Nombre" required/>
          </div>
          <div className="input-box">
              <input type="text" placeholder="Contraseña" required/>
          </div>
          <button type="submit">Ingresar</button>
          <button type="submit">Crear Usuario</button>

        </form>
      </div>
    </section>
  );
};

export default Usuarios;