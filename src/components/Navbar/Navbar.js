import React from 'react'
import homeSvg from './../../assets/home.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='Navbar-block d-flex justify-content-center align-items-center'>
        <Link to='/'>
          <img className='Navbar-block-icon' src={homeSvg} alt={homeSvg}></img>
        </Link>
      </div>
    </div>
  )
}

export default Navbar