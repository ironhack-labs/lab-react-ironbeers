import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'




export default function Header(){




    return(
        <nav style ={{backgroundColor: "lightblue", display: "flex", justifyContent: "center", padding:"5px", border: "3px solid white"}}>
            <Link to="/" >
                <FontAwesomeIcon icon={faHome} size = "3x" style ={{color: "white"}}/>
            </Link>

            
        </nav>
    )
}