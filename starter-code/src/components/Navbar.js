import React from  'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <Link to="/" className="nav-link"><i className="fas fa-home"></i></Link>
    </nav>
  )
}

export default Navbar
