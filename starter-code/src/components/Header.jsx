import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink className="list-group-item list-group-item-action" to={`/`}>
          Home
        </NavLink>
      </div>
    );
  }
}
