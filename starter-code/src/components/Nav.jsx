import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <input type="checkbox" name="menutoggle" id="menutoggle" />
          <label htmlFor="menutoggle">
            <div className="burger">☰</div>
            <div className="closer">X</div>
          </label>
          <NavLink exact to="/">
            <p>🏠</p>
            <p>Home</p>
          </NavLink>
          <NavLink exact to="/all">
            <p>🍻</p>
            <p>All Beers</p>
          </NavLink>
          <NavLink exact to="/random">
            <p>🌀</p>
            <p>Random</p>
          </NavLink>
          <NavLink exact to="/new">
            <p>🍺</p>
            <p>New Beer</p>
          </NavLink>
        </div>
      </nav>
    );
  }
}
