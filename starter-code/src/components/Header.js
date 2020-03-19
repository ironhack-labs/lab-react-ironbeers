import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return(
    <header>
        <FontAwesomeIcon icon={faHome} className="icon" />
    </header> 
    ) 
}

export default Header;