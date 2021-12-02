import React from 'react'
import { Link } from 'react-router-dom';
import navBar from '../assets/nav-cerveza.jpeg';


function Navbar (){
    return (
      <nav>
        <div>
          <Link className="navbar" to='/'>
          <img src={navBar} alt="nav imag" />
          </Link>
        </div>
      </nav>
    )
}

export default Navbar;