import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
