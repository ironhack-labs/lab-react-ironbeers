import React from 'react'

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container justify-content-center">
        <Link className="navbar-brand" to="/">🏠</Link>
      </div>
    </nav>
  )
}

export default Navbar