import React from 'react';
import { NavLink } from 'react-router-dom';
class Navbar extends React.Component{

  render(){
    return(
<div>
<nav className="nav-style navbar-dark bg-primary center">
<NavLink to = '/'>Home</NavLink>
</nav>
</div>

    )
  }
}
export default Navbar