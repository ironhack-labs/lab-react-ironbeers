import React from 'react'
import { Link } from 'react-router-dom'

import homeIcon from '../assets/white-home-icon.png'

function Header() {
  return (
    <Link to={'/'}>
    <nav>
    <img src={homeIcon} alt="home" />
    </nav>
    </Link>
  )
}

export default Header