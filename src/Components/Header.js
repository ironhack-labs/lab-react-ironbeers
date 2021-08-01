import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navWrapper">
          <Link className="iconLink" to="/">
            {""}
            <Icon className="iconButton" size={60} icon={home} />
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
