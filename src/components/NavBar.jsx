import React from 'react'
import homeIcon from '../assets/home.png'

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <img src={homeIcon} alt="" />
        </nav>
       
    </div>
  )
}

export default NavBar