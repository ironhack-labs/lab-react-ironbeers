import React from "react";
import { Link } from "react-router-dom";

const HomeLink = props => {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
      </nav>
    </div>
  );
};

export default HomeLink;
