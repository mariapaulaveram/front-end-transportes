import "../estilos/componentes/paginas/QuienesSomos.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Quienes = (props) => {
  return (

      <ul >
        <li>
          <NavLink
            to="/quienes"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Quienes Somos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/historia"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Historia
          </NavLink>
        </li>
      </ul>
 
  );
};
export default Quienes;
