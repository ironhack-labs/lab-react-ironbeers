import React, { useState, useEffect, useRef } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

/* const usePrev = (prevState) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = prevState
  }, [prevState])
  return ref.current
}
const prevState = usePrev(menuOpen)

if (prevState !== menuOpen) {
  menuOpen ? setMenuOpen(false) : setMenuOpen(true)
} */


const Navbar = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  const closeMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)
  }

  return (
    <div>
      <Menu right isOpen={ menuOpen }>
          <NavLink to="/" activeClassName="selected" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/beers" activeClassName="selected" onClick={closeMenu}>Beers</NavLink>
          <NavLink to="/random-beer" activeClassName="selected" onClick={closeMenu}>Random</NavLink>
          <NavLink to="/new-beer" activeClassName="selected" onClick={closeMenu}>Add a beer</NavLink>
      </Menu>
    </div>
  )
}

export default Navbar
