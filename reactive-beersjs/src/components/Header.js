import React from 'react'
import { Link } from 'react-router-dom'
import home from '../img/white-beer.svg'
const Header = () => {
  return (
    <header className="header">
      <Link to='/'>
        <img src={home} alt="Home" />
      </Link>
    </header>
  )
}

export default Header
