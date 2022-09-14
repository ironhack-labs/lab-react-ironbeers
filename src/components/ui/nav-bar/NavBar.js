import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className="navbar bg-primary">
        <div className="container d-flex justify-content-center">
          <Link className="navbar-brand" to="/">
            <i className='fa fa-home fa-lg text-light'></i>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar