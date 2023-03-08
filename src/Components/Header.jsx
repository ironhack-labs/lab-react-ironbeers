import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return(
        <nav>
            <Link to='/'>Home </Link>
        </nav>
    )
}

export default Header;