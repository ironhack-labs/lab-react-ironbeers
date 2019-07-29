import React from 'react';
import {Link} from 'react-router-dom';

function Navbar () {
  return(
    <div className="navbar has-background-info">
      <div className="container">
        <div className="navbar-item columns is-mobile">
          <Link exact to='/'>
            <span className="icon is-large has-text-white">
            <i className="fas fa-2x fa-home"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;