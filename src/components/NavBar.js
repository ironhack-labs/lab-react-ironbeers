import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
      <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand"><img src="/img/logo.svg" width="30" height="30" alt=""/></Link>
      </nav>
    )
}

export default NavBar