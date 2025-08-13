import '../../estilos/componentes/layout/Header.css';
import { Link } from 'react-router-dom';


import React from "react";
const Header = (props) => {
  return (
    <header id='toTop'>
      <div className="logo">
        <Link to="/">
        <img
          className="img_logo"
          src="logo.png"
          width="400"
          alt="Cargo Expres"
          
        /></Link>
        <h2>LLAMANOS AL 0810-555-2270 </h2>
      </div>
      
    </header>
  );
};
export default Header; 




