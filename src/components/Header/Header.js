import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import {Link} from "react-router-dom"


function Header() {
    
    return (

        <div className="home">
           <Link to='/' className="icon" > <FontAwesomeIcon icon={faHome} /> </Link>         
        </div>
    )
}

export default Header
