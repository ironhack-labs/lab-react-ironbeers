import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-light">
      <Link className="link" to="/">
        <img src="./images/home.svg" />
      </Link>
      <Link className="link" to="/beers">
        Beer's List
      </Link>
      <Link className="link" to="/randombeer">
        Random
      </Link>
      <Link className="link" to="/newbeer">
        Add Beer
      </Link>
    </div>
  );
}

export default NavBar;
