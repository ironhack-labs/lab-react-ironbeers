import React from "react";
import { NavLink } from "react-router-dom";
import { Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';



function NavBar() {
    return (
        <nav style={{ backgroundColor: "#32c3ff" }}>
            <div style={{ height: "80px" }}>
                <NavLink 
                exact to="/"><FontAwesomeIcon icon={faHome} color="white" size="3x" />
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;