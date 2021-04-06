import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
   /*  const [ isOpen, setIsOpen ] = useState(false) */

    return (
        <Menu right isOpen={ false } >
            <NavLink to="/" activeClassName="selected">Home</NavLink>
            <NavLink to="/beers" activeClassName="selected">Beers</NavLink>
            <NavLink to="/random-beer" activeClassName="selected">Random</NavLink>
            <NavLink to="/new-beer" activeClassName="selected">Add a beer</NavLink>
        </Menu>
    )
}

export default Navbar
