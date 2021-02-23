import React from 'react';
import { Link } from 'react-router-dom';

// estilos hacer a parte css e importar aqui.


function Navbar() {
  return (
    <nav>
          <Link to="/">
            <img 
              alt="Home"
              src="./img/icono.png"/>
          </Link>
    </nav>
  );
}
export default Navbar;