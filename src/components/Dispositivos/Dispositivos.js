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
            <h2> Le damos la bienvenida a HABISALUD </h2>
          </div>
          <div id="P" className="p">
            <p>
              {" "}
              <b>HABISALUD</b> es un aplicativo web para la habilitación de servicios en salud como, CONSULTA EXTERNA, CIRUGIA, UCI, UCE, entre otros mas. 
            </p>
          </div>
        </div>

        <div className="content2">
          <div className="im1">
            <img src={Imag1} alt={"lindo1536x864"} width="300" height="200" />
          </div>

          <div className="p2">
            <p>
              <b>CONSULTA EXTERNA </b>
            </p>
            <p>
            las Consultas Externas se refieren a aquellos actos médicos realizados de forma ambulatoria en un local adaptado para ello para el diagnóstico, tratamiento o seguimiento de un paciente con base a la anamnesis (historia clínica) y la exploración física{" "}
            </p>
          </div>
        </div>

        <div className="content3">
          <div className="im2">
            <img src={Imag2} alt={"lindo1536x864"} width="300" height="200" />
          </div>
          <div className="p4">
            <p>
              <b> CIRUGIA</b>
            </p>
            <p>
            El servicio de Cirugía se encarga de realizar procedimientos quirúrgicos con estándares de calidad, en instalaciones bien dotadas y un equipo humano experto en cada una de las especialidades. Además, contamos con un área que asigna ​fechas y horas de programación para las intervenciones e igualmente, ofrece instrucciones al paciente sobre los cuidados prequirúrgicos, revisa documentos y asigna citas para evaluación por el anestesiólogo de manera previa
            {" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dispositivos;
