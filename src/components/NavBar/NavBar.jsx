import React from "react";
import { Link } from 'react-router-dom';

function NavBar () {
  return ( 
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>BEERS</Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-link active" to='/new'>New beer</Link>
            <Link className="nav-link active" to='/beers/random'>Random</Link>
        </div>
      </div>
    </div>
  </nav>
   );
}

export default NavBar ;

