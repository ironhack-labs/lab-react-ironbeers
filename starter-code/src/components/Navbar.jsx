import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <Link to={"/"}>
        <nav>
          <p className="text-center">🏠</p>
        </nav>
      </Link>
    );
  }
}

export default Navbar;
