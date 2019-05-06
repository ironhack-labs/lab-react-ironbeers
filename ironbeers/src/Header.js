import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <Link className="Header" to="/">
      Home
    </Link>
  )
}

export default Header