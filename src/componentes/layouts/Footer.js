import "../../estilos/componentes/layout/Footer.css";
import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import ScrollButton from "../ScrollButton";
import Celular from "../Whatsapp";




const Footer = (props) => {
  return (
    <footer>
      <div class="datos-footer">
        <div className="datoUno">
          <ul>
            <a href="/contacto" target="">
              {" "}
              <li> Contactanos!</li>{" "}
            </a>{" "}
            {/*cuando hago click me llevara a la seccion contacto pero lo quiero hacer como en la barra de navegacion*/}
            <li> Llamanos al 0810-888-2270</li>
            <li>Casa Central (011)442-43355 - Lineas rotativas</li>
            <li>
              Av. Dr. Arturo Frondizi 85. CP 1629. Pilar. Pcia de Buenos Aires
            </li>
            <li>Escribinos! contacto@cargo_expres.com.ar</li>
            <li>Whatsapp: 1145982563</li>
          </ul>
        </div>
        <div className="datoDos">
          <ul>
            <li>navegacion</li>{" "}
            {/*cuando hago click en cada uno me llevara a cada seccion pero lo quiero hacer como en la barra de navegacion */}
            <li>
              {" "}
              <a href="/" target="_self">
                Home
              </a>
            </li>
            <li>
              {" "}
              <a href="/nosotros" target="_self">
                Nosotros
              </a>
            </li>
            <li>
              {" "}
              <a href="/novedades" target="_self">
                Novedades
              </a>
            </li>
            <li>
              {" "}
              <a href="/contacto" target="_self">
                Contacto
              </a>
            </li>
            <li>
              {" "}
              <a href="/servicios" target="_self">
                Servicios
              </a>
            </li>
          </ul>
        </div>
        <div className="datoTres">
          <ul>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a
              accusantium harum suscipit quae, natus dicta. Quam veritatis nemo
              esse? Labore inventore excepturi eius, voluptate nobis enim a
              dolores natus.
            </li>
          </ul>
        </div>
      </div>
      <div className="redes">
        <ul className="social-icons">
          <li>
            <a href="https://www.instagram.com/" target="_blanck">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blanck">
              <i class="fa-brands fa-facebook fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blanck">
              <i class="fa-brands fa-twitter fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-abajo">
        <p> Cargo Expres - Derechos Reservados © </p>
        <ScrollButton />
      </div>
      <Celular/>
    </footer>
  );
};


export default Footer; 





