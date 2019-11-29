import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="#">
            <span className="home">🏠</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
