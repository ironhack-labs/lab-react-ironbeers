import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import homeMenu from '../../assets/home-menu-roundedwhite.png';


const Navbar = () => {
  return (
    <nav>
    <NavLink to="/" > <img className="home-menu" src={homeMenu} alt='home' /> </NavLink>
    </nav>



  )
}

export default Navbar