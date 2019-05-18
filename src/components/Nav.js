import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="container">
          <Link to="/"><li><img className="homeimage" src="https://image.flaticon.com/icons/png/512/25/25694.png" /></li></Link>
        </ul>
      </nav>
    );
  }
}
