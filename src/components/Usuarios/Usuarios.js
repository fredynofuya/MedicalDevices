import "./usuarios.css";
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import logo from '../img/login.png';

const Usuarios = () => {
  return (
    <div className="singup-container">
      <div className="singup-box">
        <div className="singup">
          <img src={logo} alt='singup' />
        </div> 
        <form className= "form">
          <label className= "label" htmlFor="username">Nombre de usuario:</label>
          <input type="text" id="username" name="username" placeholder="Nombre de usuario" />

          <label className= "label" htmlFor="role">Define tu rol:</label>
          <select id="role" name="role">
            <option value="" >Selecciona el rol</option>
            <option value="admin">Administrador</option>
            <option value="advanced">Avanzado</option>
            <option value="normal">Normal</option>
          </select>

          <label className= "label" htmlFor="password">Ingresa tu contraseña:</label>
          <input className= "input" type="password" id="password" name="password" placeholder="Contraseña" />

          <button className= "button" type="submit">Crear</button>
        </form>
      </div>
    </div>
  );
};

export default Usuarios;