import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="container">
            <NavLink to="/" activeClassName="active" className="logo">Iron<span className="icon"></span>Beer</NavLink>
        </div>
    )
}

export default NavBar