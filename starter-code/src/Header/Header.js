import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to={"/"}>
          <header>
            <img src="./images/header.png" alt="" />
          </header>
        </Link>
      </React.Fragment>
    );
  }
}
