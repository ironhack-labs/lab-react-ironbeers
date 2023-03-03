import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import HomeLogo from '../assets/home-icon.png'

function Header() {
  return (
    <div>
      <nav className="navBar">
        <NavLink to="/"><img className="homeLogo" src={HomeLogo} alt="" /></NavLink>
      </nav>
    </div>
  )
}

export default Header;