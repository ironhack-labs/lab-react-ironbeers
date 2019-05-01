import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleChange = e => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  renderMenuOptions = () => {
    return (
      <ul className={`${!this.state.isOpen ? "is-invisible" : ""}`}>
        <li>
          <Link
            to="/"
            className="navbar-item has-text-centered"
            onClick={this.handleChange}
          >
            Beers
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/random-beer"
            className="navbar-item has-text-centered"
            onClick={this.handleChange}
          >
            Radom Beer
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/new-beer"
            className="navbar-item has-text-centered"
            onClick={this.handleChange}
          >
            New Beer
          </Link>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <nav
        className="navbar is-warning"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <img
                className="beerLogo"
                src="https://cdn3.iconfinder.com/data/icons/set-of-beer-attributes-icons/64/Beer_icons_3264px-01-512.png"
                alt="Bulma: Free, open source, & modern CSS framework based on Flexbox"
              />
              <span className="has-text-weight-bold is-family-monospace">
                Ironbeers
              </span>
            </div>

            <a
              role="button"
              className={`navbar-burger ${this.state.isOpen && "is-active"}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.handleChange}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          {this.state.isOpen && this.renderMenuOptions()}
        </div>
      </nav>
    );
  }
}

export default Navbar;
