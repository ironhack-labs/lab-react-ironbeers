import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome } from "react-icons/md";

function Header(){
    return(
        <NavLink exact to='/'>
            <div className="btn btn-info header">
                <div className="header-icon"><MdHome /></div>
            </div>
        </NavLink>
    )
}

export default Header;