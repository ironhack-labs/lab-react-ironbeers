import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const navbar = () => {
  return (
      <nav className="nav-style">
          <ul>
              <li><a href="/" style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faHome} /> </a></li>
          </ul>
      </nav>
  )
}

export default navbar;