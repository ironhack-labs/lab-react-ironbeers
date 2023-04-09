import houseIcon from '../assets/houseIcon.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className=" px-7 items-center justify-center h-16 bg-blue-500">
        <NavLink to={'/'} className="">
          <svg className="w-25 h-25 text-gray-900">
            <image href={houseIcon} />
          </svg>
        </NavLink>
      </nav>
    )
}

export default NavBar;