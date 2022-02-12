import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="uk-navbar-container" uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
