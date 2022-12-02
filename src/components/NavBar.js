import React from 'react';
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/homeIcon.png"

const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <div>
                    <ul>
                        <NavLink to="/">
                            <img src={homeIcon}/>
                        </NavLink>
                    </ul>
                </div>

            </nav>
        </div>
    );
};

export default NavBar;