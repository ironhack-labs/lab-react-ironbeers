import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        style={{
          margin: "0",
          height: "50px",
          width: "100vw",
          color: "white",
          backgroundColor: "turquoise"
        }}
      >
        <Link to="/">
          <h2>HOME</h2>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
