import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Link to={"/"}>
      <div>
        <img src="/header.png" alt="header" />
      </div>
    </Link>
  )
}

export default Header