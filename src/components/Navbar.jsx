import React from 'react'
import logo from "../assets/home-logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navigation'>
      <Link to="/"><img src={logo} alt="home" className='logo'/></Link>

    </div>
  )
}

export default Navbar