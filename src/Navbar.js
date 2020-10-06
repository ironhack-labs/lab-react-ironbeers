import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink to="/" activeClassName="active">Home</NavLink>
        </div>

    )
}

export default NavBar 