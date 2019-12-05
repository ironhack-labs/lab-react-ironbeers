import React from "react";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <Link to="/">
        <nav className="navbar is-info" role="navigation">
          <img src="../images/home.svg" alt="Home" />
        </nav>
      </Link>
    );
  }
}
