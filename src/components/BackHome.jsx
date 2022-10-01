import React from "react";
import { Link } from "react-router-dom";

function BackHome() {
  return (
    <div style={{ backgroundColor: "aqua", height: "30px", margin: 0 }}>
      <Link to={"/"}>
        <h3>Back to Home</h3>
      </Link>
    </div>
  );
}

export default BackHome;
