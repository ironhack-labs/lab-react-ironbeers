import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
  <nav className="navbar navbar-light bg-light text-center">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <p>Home</p>
        <i className="fa-solid fa-house"></i>
        </Link>
      </div>
    </nav>
  )

}

export default Header