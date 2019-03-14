import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
          style={{ background: "#3DC4FC", color: "white" }}
        >
          <div className="navbar-start">
            <Link className="navbar-item" to={'/'}> Home</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
