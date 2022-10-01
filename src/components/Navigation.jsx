import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header style={{ width: "100%", height: "100px", padding: "5px" }}>
      <nav style={{ backgroundColor: "#00CED1", height: "100%" }}>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Navigation;
