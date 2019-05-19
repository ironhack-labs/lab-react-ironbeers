import React, { Component } from "react";
import App from "./App";
import {Link} from 'react-router-dom';
import Beers from "./Beers";
import Randombeer from "./RandomBeer";
import Newbeer from "./NewBeer";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <Link className="navbar-brand" to="./beers">
                Beers
            </Link>
            <Link className="navbar-brand" to="./RandomBeer">
                Random Beer
            </Link>
            <Link className="navbar-brand" to="./NewBeer">
                New Beer
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
