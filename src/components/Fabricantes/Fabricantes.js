import "../Fabricantes/fabricantes.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const jsData = require("../BD/Fabricantes.json");

const Fabricantes = () => {
  return (
    <section>
      <div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <div>
          <h1 className="title-inven"><b>Provedores</b></h1>
        </div>
      </div>

      <div className="grid-inventario">
        {jsData.map((item, index) => (
          <div key={index} className="grid-item">
           
            <img className="imag" src={item.imagen} alt={item.numeroLote} />
            <p>
              <b>{item.NombreFabricante}</b>
              <br />
              <br />
              <b>Correo:</b> {item.correo}
              <br />
              <b>Telefono:</b> {item.telefono}
              <br />
              <b>Web:</b> {item.web}
              <br />
              <b>Nit:</b> {item.nit}
              <br />
            </p>
            <button className="button">Ver mas</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fabricantes;