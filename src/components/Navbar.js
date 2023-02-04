import React from 'react';
import { Link, NavLink } from "react-router-dom";
import homeIcon from '../assets/homeIcon.png';

function Navbar() {
  return (
  <nav className="Navbar">
    <ul>
        <NavLink to ="/" className={({isActive}) => (isActive ? 'selected' : '')}>
            <img className="icon" src={homeIcon}/>
        </NavLink> 
    </ul>
  </nav>
  )
}
export default Navbar;