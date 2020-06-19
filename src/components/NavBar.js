import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={'/'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/beers/all'}>
              All Beers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/beers/random'}>
              Random Beer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/beers/new'}>
              New Beer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
