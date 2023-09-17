import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


function Navbar() {

    return (
<nav>
      <div className="navbar-content">
         <Link to="/">Home </Link>
         <Link to="./pages/AllBeersPage">All Beers</Link>
      </div>
    </nav>
    );

}

export default Navbar;
