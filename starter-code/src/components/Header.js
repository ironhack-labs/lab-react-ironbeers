import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="home-link">
        <Link to="/">
          <img src="/images/home.png" alt="Home" />
        </Link>
      </div>
    );
  }
}
