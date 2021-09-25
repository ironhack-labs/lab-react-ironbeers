import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  const divStyling = {
    "backgroundColor": "darkblue",
    "height": "50px"
  };
  const iconStyling = {
    "color": "white",
    "textAlign": "center"
  };

  return (
    <nav>
    <div style={divStyling}>
      <Link to="/">
      <i className="fas fa-home" style={iconStyling}></i>
      </Link>
      </div>
    </nav>
  );
}

 