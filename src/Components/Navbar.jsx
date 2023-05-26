import React from 'react'
import { Link } from 'react-router-dom'

import homeIcon from '../assets/white-home-icon.png'

function Navbar() {
  return (
    <Link to={'/'}>
    <nav>
    <img src={homeIcon} alt="home" />
    </nav>
    </Link>
  )
}

export default Navbar;