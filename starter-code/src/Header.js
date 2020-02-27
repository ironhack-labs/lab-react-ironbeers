import React from "react";
// import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
      </nav>
    );
  }
}

export default Header;
