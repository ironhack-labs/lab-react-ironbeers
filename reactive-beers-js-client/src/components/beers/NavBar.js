import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg nav-beers">
          <ul className="navbar-nav d-flex justify-content-center mx-auto">
              <li className="nav-item"><a  className="navbar-brand navbar-home" href="/" style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faHome} /> </a></li>
          </ul>
      </nav>
  )
}

export default navbar;