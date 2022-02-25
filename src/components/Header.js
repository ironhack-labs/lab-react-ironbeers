import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="Header">
        <NavLink to="/" className="Header-link">Home</NavLink>
    </div>
  )
}
