import React from 'react';
import {Link} from "react-router-dom";

const Navbar =() =>{
    return(     
            <nav className="navbar navbar-dark bg-primary">          
             <Link to='/' className=""><i className="">home</i></Link>
            </nav>     
    )
}

export default Navbar;