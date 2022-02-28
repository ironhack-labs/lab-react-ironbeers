import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Beers</Link>
        </li>
        <li>
          <Link to='/random-beer'>random-beer</Link>
        </li>
        <li>
          <Link to='/new-beer'>new-beer</Link>
        </li>
      </ul>
    </nav>
  )
}
