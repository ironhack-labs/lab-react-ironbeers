import React from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav className="col-auto">

            <NavLink to="/">
                <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' style={{ width: '100%' }} alt="" />
            </NavLink>

        </nav>
    );
}

export default Header;