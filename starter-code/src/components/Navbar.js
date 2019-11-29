import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        height: "10vh",
        backgroundColor: "#3DC4FC",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Link className="navbar-brand" to="/" style={{ fontSize: "40px" }}>
        &#127968;
      </Link>
    </nav>
  );
}

export default Navbar;
