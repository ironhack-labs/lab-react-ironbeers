import React from 'react';
import './Navbar.css';
import logo from '../../assets/casaimagen.png'

//he usado el mismo navbar del lab anterior.
//No he necesitado { Link } aqui para hacer redireccion en la casita. con href "/" me ha servido


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className='whiteHouse'
              src={ logo }
              alt=""
              width="30"
              height="24"
            ></img>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;