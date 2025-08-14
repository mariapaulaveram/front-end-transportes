import "../estilos/componentes/paginas/Contacto.css";
import React, { useState } from "react";
import axios from "axios";

const Contacto = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <div className="holder">
      <div className="contacto_directo">
        <h2>ATENCION AL CLIENTE</h2>
        <p>
          Puede contactarse con nosotros vía telefónica o por mail a cualquiera
          de nuestras sucursales o por nuestro formulario web.
        </p>
      </div>
      <div className="contacto">
        <div className="form">
          <p>Dejanos tu consulta, responderemos a la brevedad.</p>
          <form
            action="/contacto"
            method="post"
            className="formulario"
            onSubmit={handleSubmit}
          >
            <p>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </p>

            <p>
              <label>Correo</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </p>
            <p>
              <label>Telefono</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </p>
            <p>
              <label>Consulta</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </p>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
            <p>
              <input type="submit" value="Enviar" />
            </p>
          </form>
        </div>

        <div className="datos">
          <h4>Casa Central</h4>
          <div className="contacto-columns">
            <ul className="columna">
              <li>
                <a href="tel:01144243355">
                  <i className="fa-solid fa-phone icono"></i> (011) 4424-3355
                </a>
              </li>
              <li>
                <a href="tel:01144243356">
                  <i className="fa-solid fa-phone icono"></i> (011) 4424-3356
                </a>
              </li>
              <li>
                <a href="tel:01144242357">
                  <i className="fa-solid fa-phone icono"></i> (011) 4424-2357
                </a>
              </li>
              <li>
                <a href="tel:01144243358">
                  <i className="fa-solid fa-phone icono"></i> (011) 4424-3358
                </a>
              </li>
            </ul>

            <ul className="columna">
              <li>
                <a href="mailto:contacto@cargo_expres.com.ar">
                  <i className="fa-solid fa-envelope icono"></i> contacto@cargo_expres.com.ar
                </a>
              </li>
              <li>
                <a href="https://wa.me/541145982563" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp icono"></i> WhatsApp: 11 4598-2563
                </a>
              </li>
              <li>
                <a href="https://instagram.com/cargo_expres" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram icono"></i> Instagram: @cargo_expres
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="casaCentral">
        <p>
          <i className="fa-solid fa-location-dot icono"></i> Av. Dr. Arturo
          Frondizi 85. CP 1629. Pilar. Pcia de Buenos Aires
        </p>
        <iframe
          className="mapa"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26329.38941672491!2d-58.9812740524783!3d-34.422343302421275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sparque%20industrial%20pilar!5e0!3m2!1ses!2sar!4v1690574028965!5m2!1ses!2sar"
          style={{ width: 960, height: 500, border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
