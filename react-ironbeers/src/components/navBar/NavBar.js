import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import { Nav} from 'react-bootstrap'
import './NavBar.css'



 const NavBar = props => {

    return(
<nav>
<Link to='/'>
<img src='./../../../pngwing.com.png' alt='Home logo'/>
</Link>
</nav>
    )
}
export default NavBar