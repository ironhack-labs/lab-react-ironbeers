import React from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../Context'

const Navbar = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
  </ul>
)

const randomBeer = () => {
  return (
    <div>
      <Navbar />
      <h1>Cerveza Random</h1>
    </div>
  )
}
