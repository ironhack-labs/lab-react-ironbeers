import React from  'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <Link to="/" className="nav-link center"><i className="fa fa-home"></i></Link>
    </nav>
  )
}

export default Navbar
