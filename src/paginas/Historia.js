import "../estilos/componentes/paginas/Historia.css";
import React from "react";
import Quienes from "../componentes/NavQuienes";

const Historia = (props) => {
  return (
    <div className="izq">
       <div className="navQuienes">
       <Quienes/> 
       </div>
    
<div className="der">
      <h2 className="tituloHistoria">reseña historica</h2>
      <div className="reseñaHistorica">
        <div className="historias">
          <div className="historia">
            <img src="images/historia/grupo-camiones-estacionados-fila.jpg" alt="" />
          </div>
          <div className="historia ignorar">
            <img cla src="images/historia/repartidores.jpg
            " alt="Almacenaje" />
          </div>
          <div className="historia ignorar">
            <img
              src="images/historia/camionero.jpg"
              alt="Carga Completa"
            />
          </div>
          <div className="historia ignorar">
            <img
              src="images/historia/camionesRuta.jpg"
              alt="Pago pago_contrareembolso"
            />
          </div>
        </div>
        <div className="historias">
          <div className="historiasTexto">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a
              accusantium harum suscipit quae, natus dicta. Quam veritatis nemo
              esse? Labore inventore excepturi eius, voluptate nobis enim a
              dolores natus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dolore a accusantium harum suscipit quae, natus dicta. Quam
              veritatis nemo esse? Labore inventore excepturi eius, voluptate
              nobis enim a dolores natus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Dolore a accusantium harum suscipit quae, natus
              dicta. Quam veritatis nemo esse? Labore inventore excepturi eius,
              voluptate nobis enim a dolores natus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default Historia;
