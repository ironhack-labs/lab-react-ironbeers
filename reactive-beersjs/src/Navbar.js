import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="message is-info">
        <h4 className="message-header">
          <Link to="/">
            Home
          </Link>
        </h4>
      </div>
    );
  }
}
