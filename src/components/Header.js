// a head with a link to home page (to be on all pages except for the home page)
import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
    <NavLink to={"/home"}>
        <img className="navimage" src="./homeicon.png" alt="home icon"/>
    </NavLink>
    
    </nav>
  )
}

export default Header