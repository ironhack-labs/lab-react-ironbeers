import React from 'react';
import { Link } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// declaramos un componente funcional 'navbar' que devuelva, por el momento, una navbar con un único 'Link' dirigido a nuestra ruta '/projects'
const Navbar = () => {
    return (
    <nav className="nav-style">
        <Link to="/" style={{ textDecoration: "none" }} className="home"><FontAwesomeIcon icon={faHome}/></Link>
    </nav>
    );
  };
  
  export default Navbar;