import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src="./../../images/header.png" alt="" />
        </Link>
      </div>
    );
  }
}

export default Header;
