import React from 'react';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faHome)

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li className="nav-icon"><Link to='/'><FontAwesomeIcon className="nav-icon" icon="home" /></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;