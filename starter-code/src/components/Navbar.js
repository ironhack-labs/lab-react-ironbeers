import React from  'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <Link to="/" className="nav-link center"><i className="fa fa-home"></i></Link>
    </nav>
  )
}

export default Navbar
