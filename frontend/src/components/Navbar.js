import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar is-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand ">
          <Link className="navbar-item" to={'/'}>
            <div>
              <FontAwesomeIcon icon="home" />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}
