import React from "react";
import logo from '../img/logo.png'
import { NavLink } from "react-router-dom";
import cx from "classnames";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  handleToggle() {
    this.setState({ isActive: !this.state.isActive });
  }
  render() {
    // --------------  toggle burger --------------------
    let classNameBurger = cx("navbar-burger burger", {
      "is-active": this.state.isActive
    });

    let classNameMenu = cx("navbar-menu", {
      "is-active": this.state.isActive
    });
    // --------------  toggle burger --------------------

    return (
      <nav className="navbar is-warning has-text-centered" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src={logo} alt="logo"/> IronBeers React
          </NavLink>

          <span
            role="button"
            className={classNameBurger}
            aria-label="menu"
            aria-expanded="false"
            data-target="navBurger"
            onClick={() => this.handleToggle()}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
        </div>

        <div id="navBurger" className={classNameMenu}>
          <div className="navbar-start" />

          <div className="navbar-end">
            <NavLink
              to="/list-beers"
              className="navbar-item"
              onClick={() => this.handleToggle()}
            >
              List Beers
            </NavLink>
            <NavLink
              to="/single-beer"
              className="navbar-item"
              onClick={() => this.handleToggle()}
            >
              Single Beer
            </NavLink>
            <NavLink
              to="/random-beer"
              className="navbar-item"
              onClick={() => this.handleToggle()}
            >
              Random Beer
            </NavLink>
            <NavLink
              to="/new-beer"
              className="navbar-item"
              onClick={() => this.handleToggle()}
            >
              New Beer
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
