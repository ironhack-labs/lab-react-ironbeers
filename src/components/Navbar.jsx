import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/home-icon.png'

export default function Navbar() {
  return (
    <nav>
        <Link to="/"><img src={HomeIcon} alt="home-button"/></Link>
    </nav>
  )
}
