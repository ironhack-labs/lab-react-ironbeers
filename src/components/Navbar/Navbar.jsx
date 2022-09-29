import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/beers">List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/random-beer">Random</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/new-beer">New Beer</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
