import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function Header() {
  return (
      <header className="navbar">
        <Link to="/"><i className="fas fa-home"></i></Link>
      </header>
  )
}
