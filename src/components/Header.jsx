import React from 'react'

import { Link } from 'react-router-dom'

import { HouseDoorFill } from 'react-bootstrap-icons'

import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to='/'><HouseDoorFill color='white' size={50} /></Link>
    </header>
  )
}

export default Header