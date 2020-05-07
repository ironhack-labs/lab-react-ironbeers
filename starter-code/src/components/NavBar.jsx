import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (

    <div className='navbar'>
    <NavLink exact to='/'>
      <img src="/images/beer-home-icon.png" alt=""/>
    </NavLink>
    </div>
  )
}

export default NavBar
