import React from "react";
import { Link } from "react-router-dom";

function Header() {
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

export default Header;
