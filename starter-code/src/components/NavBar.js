import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header>
      <div>
        <NavLink to="/">
          <img src="/images/home.png" alt="" id="home" />
        </NavLink>
      </div>
    </header>
  )
}

export default NavBar
