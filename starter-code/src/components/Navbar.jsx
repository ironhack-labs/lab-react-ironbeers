import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div  className="navbar">
            <NavLink exact to='/'>
                home
            </NavLink>
        </div>
    )
}

export default Navbar
