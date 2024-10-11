import "../inventario Dispositivos/inventario.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import img from "../img/Desfribilador Externo Automatico DEA Mindray C2.jpg"
const jsData = require("../BD/Inventario.json");
// const imag = require.context("../img/Desfribilador Externo Automatico DEA Mindray C2.jpg")

const MiInventario = () => {
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
          <h1 className="title-inven"><b>SERVICIOS</b></h1>
        </div>
      </div>

      <div className="grid-inventario">
        {jsData.map((item, index) => (
          <div key={index} className="grid-item">
           
            <img className="imag" src={item.imagen} alt={item.numeroLote} />
            <p>
              <b>{item.name}</b>
              <br />
              <br />
              <b>Total criterios:</b> {item.Cantidad}
              <br />
              <b>Cumple:</b> {item.PrecioCop}
              <br />
              <b>Cumplimiento:</b> {item.PrecioUsd}
              <br />
            </p>
            <button className="button">Ver mas</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiInventario;
