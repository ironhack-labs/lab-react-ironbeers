import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className="navbar">
       <Link to={'/'}><h1>Home</h1></Link>
       </div>
    )
}

export default Nav;