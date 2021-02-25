import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css'

const Header =() =>{
    return(
<>
<nav className="navbar navbar-primary bg-primary" >
    <Link to="/"><p>HOME</p></Link>
</nav>
</>
)

}
export default Header