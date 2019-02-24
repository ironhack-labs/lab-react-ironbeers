import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">Home</Link>
      </header>
    );
  }
}

export default Header;
