import React from 'react'
import { NavLink } from 'react-router-dom';
import home from "./../assets/home_white_24dp.svg"

const NavBar = () =>{

    return(<nav className="navBar"><NavLink to="/"><img src={home} alt="home"/></NavLink></nav>)
}

export default NavBar