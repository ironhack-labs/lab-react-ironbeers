import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to="/">
      <nav>
        <img
          src="./../../../images/home.svg"
          alt="IronBeers"
          className="home-icon"
        />
      </nav>
    </Link>
  )
}

export default Navbar
