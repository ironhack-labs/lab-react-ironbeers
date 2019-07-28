import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Reactive Beers</Link>
        </div>
      </nav>
  )
}
export default NavBar