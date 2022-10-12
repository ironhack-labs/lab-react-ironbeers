import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor: "#1C8ADB"}}>
    <Link to="/" >
      <img width="70px" src='/house.png' alt='' />
    </Link>
    </div>
  )
}

export default Navbar