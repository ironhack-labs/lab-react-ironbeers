import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <NavLink to="/" activeClassName="active">GO HOME</NavLink>
        </div>
    )
}

export default NavBar