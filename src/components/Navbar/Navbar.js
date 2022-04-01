import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  sticky-top  navbar-light  navColor">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">IronBeers Hooks edition</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex">

              <li className="nav-item px-3">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/allBeers">All Beers</Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/random">Random Beer</Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/beers/new-beer">Form</Link>
              </li>
              
          </ul>
          <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;