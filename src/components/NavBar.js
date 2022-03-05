import React from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

  return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">LAB | React IronBeers</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/AllBeers">All Beers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/RandomBeer">Random Beer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/NewBeer">New Beer</a>
            </li>
          </ul>
        </div>
      </nav>
      </>
  );
}

export default Navbar;