import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img
          src="./../../../images/home.svg"
          alt="IronBeers"
          className="home-icon"
        />
      </Link>
    </nav>
  )
}

export default Navbar
