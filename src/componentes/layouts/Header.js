import '../../estilos/componentes/layout/Header.css';

import React from "react";
const Header = (props) => {
  return (
    <header id='toTop'>
      <div className="logo">
        <img
          className="img_logo"
          src="logo.png"
          width="400"
          alt="Cargo Expres"
        />
        <h2>LLAMANOS AL 0810-555-2270 </h2>
      </div>
      
    </header>
  );
};
export default Header; 




