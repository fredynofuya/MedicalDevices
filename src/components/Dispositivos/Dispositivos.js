import "./dispositivos.css";
import ImagSalud from "../img/lindo.jpg";
import equipo from "../img/equipo.jpg";
import ImagSalud2 from "../img/Medicos.jpg";
import Imag1 from "../img/imag1.jpg";
import Imag2 from "../img/descarga.jpeg";
import Carousel from "react-bootstrap/Carousel";

function Dispositivos() {
  return (
    <section className="Titulo">
      <div className="contene">
        <Carousel className="carosel">
          <Carousel.Item>
            <img className="immg" src={ImagSalud2} alt={"lindo1536x864"} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="immg" src={ImagSalud} alt={"lindo1536x864"} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="immg" src={equipo} alt={"lindo1536x864"} />
          </Carousel.Item>
        </Carousel>
        <div className="content1">
          <div id="wlc" className="Wlc">
            <h2> Le damos la bienvenida a MEDICARE </h2>
          </div>
          <div id="P" className="p">
            <p>
              {" "}
              <b>MEDICARE</b> es una compañía nacional líder en los ámbitos de la
              tecnología médica y de seguridad, en alianza con la Universidad de
              Antioquia. Desde 1980, los productos MEDICARE protegen y salvan
              vidas.
            </p>
          </div>
        </div>

        <div className="content2">
          <div className="im1">
            <img src={Imag1} alt={"lindo1536x864"} width="300" height="200" />
          </div>

          <div className="p2">
            <p>
              <b>Hospital </b>
            </p>
            <p>
              Nuestro objetivo e inspiración es mejorar los cuidados críticos.
              Descubra cómo nuestras soluciones pueden ayudarle a proteger y a
              salvar vidas en todos los departamentos y unidades, a lo largo y
              ancho del hospital.{" "}
            </p>
          </div>
        </div>

        <div className="content3">
          <div className="im2">
            <img src={Imag2} alt={"lindo1536x864"} width="300" height="200" />
          </div>
          <div className="p4">
            <p>
              <b> Seguridad</b>
            </p>
            <p>
              MEDICARE goza de una gran reputación en el ámbito de la tecnología
              para la seguridad a nivel internacional. Independientemente de a
              qué sector se dedique, nuestro objetivo es que pueda desarrollar
              su trabajo con total seguridad.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dispositivos;
