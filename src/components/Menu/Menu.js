import "./menu.css";
import ImagSalud from "../img/sumi.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

//tenemos la barra de navegacion
function Menu() {
  return (
    <header className="navegator">
      {/* poner el logo de la empresa con la imagen */}

      <div className="contene">
        <div className="imgsald">
          <img
            src={ImagSalud}
            alt={"chatgpt-1536x864"}
            width="100"
            height="100"
          />
        </div>

        <div className="title">
          <ul className="u">
            <li className="li">
              <h1 className="navega-Med">HABI</h1>
              <h1 className="navega-care">SALUD</h1>
            </li>
            <li className="li">
              <h2 className="navega-Antioq">SUMIMEDICAL</h2>
            </li>
          </ul>
        </div>
        {/* crea un boton para el menu desplegable */}
          <DropdownButton
            className="dropdown-basic-button"
            title="Menu"
            style={{ backgroundColor: "#FDE4CF" }}
          >
            <Dropdown.Item href="/" crossOrigin="anonymous">🏠 Home</Dropdown.Item>
            <Dropdown.Item href="/Consolidado" crossOrigin="anonymous">🦾 Consolidado</Dropdown.Item>
            <Dropdown.Item href="/Usuarios" crossOrigin="anonymous">🏥 Usuarios</Dropdown.Item>
          </DropdownButton>

          <div className="browser">
            {/* aqui tenemos la barra de navegacion */}
            <Navbar bg="#FDE4CF" variant="#FDE4CF" className="menu-flex">
              <Container className="me-auto">
                <Nav>
                  <Nav.Link href="/Home" crossOrigin="anonymous">
                    <b>🏠 Home</b>
                  </Nav.Link>
                  <Nav.Link href="/Consolidado" crossOrigin="anonymous">
                    <b>📊 Consolidado</b>
                  </Nav.Link>
                  <Nav.Link href="/Usuarios" crossOrigin="anonymous">
                    <b>🦾 Usuarios </b>
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
      </div>

      {/* importa libreria para tipo de fuente */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Dosis:wght@200&family=Nunito:wght@200&family=Wix+Madefor+Text&display=swap"
        rel="stylesheet"
      ></link>
     
    </header>
  );
}

export default Menu;
