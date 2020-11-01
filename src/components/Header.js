import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
           <Link to="/"><img className="icon" src="./25694.svg"/> </Link>      
        </div>
    )
}


export default Header;
