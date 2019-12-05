import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Link to={"/"}>
        <header>
          <img src="./images/home.svg" alt="beers" />
        </header>
      </Link>
    );
  }
}
