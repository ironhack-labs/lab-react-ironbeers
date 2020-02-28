import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div bg="dark" expand="lg" variant="dark">
        <div id="basic-navbar-nav">
          <div className="mr-auto">
            <div>
              {" "}
              <Link to="/beers">
                <img src="../../images/beers.png"></img>
                <h2>AllBeer</h2>
                <p>Check all the cooooool beers we have </p>
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/beer/random">
                <img src="../../images/random-beer.png"></img>
                <h2>RandomBeer</h2>
                <p>Meet the beer of your dreams </p>
              </Link>
            </div>
            <div>
              {" "}
              <Link to="/beer/new">
                <img src="../../images/new-beer.png"></img> <h2>NewBeer</h2>{" "}
                <p>Add one beer </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
