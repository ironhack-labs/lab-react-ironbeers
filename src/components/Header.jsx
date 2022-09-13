import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav class="navbar bg-light">
        <div class="container">
          <Link class="navbar-brand" to="/">
            🏠
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
