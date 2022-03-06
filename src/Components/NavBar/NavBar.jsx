import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'


function NavBar() {
  return (
    <nav>
        <NavLink to="/"><h1>IronBeers</h1></NavLink>
    </nav>

  )
}

export default NavBar