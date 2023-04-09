import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <header>
      <nav>
            <Link to="/">Home</Link>
      </nav>
    </header>
    </div>
  );
}

export default NavBar;
