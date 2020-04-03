import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
          <nav className="navbar navbar-light bg-primary ">
          <Link className ="text-light" to="/">Home</Link>
          <Link className ="text-light" to="/beers">Beers List</Link>
          <Link className ="text-light" to="/new-beer">New Beer</Link>
          
</nav>
        </div>
    )
}

export default Navbar
