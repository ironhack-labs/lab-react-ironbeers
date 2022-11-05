import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from '../assets/navbar.png'


function Navbar() {
  return (

    <nav>
    <Link to="/">
      <img src={HomeImage} alt="navbar-home"/>
    </Link>
   </nav>
    
  )
}

export default Navbar