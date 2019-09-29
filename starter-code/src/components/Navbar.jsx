import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    // console.dir(this);
    return (
      <div>
        {
          <nav className="navbar navbar-dark bg-dark">
            <Link to="/">Home</Link>
          </nav>
        }
      </div>
    );
  }
}
