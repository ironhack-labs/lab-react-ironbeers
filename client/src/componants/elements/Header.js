import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  const divStyling = {
    "backgroundColor": "#68BBE3",
    "display": "inline-block",
    "textAlign": "center",
    "width": "100%"
  };
  const iconStyling = {
    "color": "white",
    "ariaHidden": "true"
  };

  return (
    <nav className="navbar navbar-expand-lg" style={divStyling}>
      <div className="container-fluid">
        <p style={divStyling}>
          <Link className="navbar-brand" to="/">
            <span className="fas fa-home" style={iconStyling}></span>
          </Link>
        </p>
      </div>
    </nav>
  );
}

 