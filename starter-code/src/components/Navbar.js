import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span role="img" aria-label="Home">
              🏡
            </span>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
