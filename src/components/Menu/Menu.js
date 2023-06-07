import "./menu.css";
import ImagSalud from "../img/pngegg.png";
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
              <h1 className="navega-Med">MEDI</h1>
              <h1 className="navega-care">CARE</h1>
            </li>
            <li className="li">
              <h2 className="navega-Antioq">Universidad de Antioquia</h2>
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
            <Dropdown.Item href="/Inventario" crossOrigin="anonymous">🦾 Inventario</Dropdown.Item>
            <Dropdown.Item href="/Proveedores" crossOrigin="anonymous">🏥 Proveedores</Dropdown.Item>
          </DropdownButton>

          <div className="browser">
            {/* aqui tenemos la barra de navegacion */}
            <Navbar bg="#FDE4CF" variant="#FDE4CF" className="menu-flex">
              <Container className="me-auto">
                <Nav>
                  <Nav.Link href="/" crossOrigin="anonymous">
                    <b>🏠 Home</b>
                  </Nav.Link>
                  <Nav.Link href="/Inventario" crossOrigin="anonymous">
                    <b>🦾 Inventario</b>
                  </Nav.Link>
                  <Nav.Link href="/Proveedores" crossOrigin="anonymous">
                    <b>🏥 Proveedores </b>
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
