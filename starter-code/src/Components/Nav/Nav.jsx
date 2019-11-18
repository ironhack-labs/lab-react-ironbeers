import React from "react";

import { Link } from "react-router-dom";

import "./Nav.css";
export default function Nav() {
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </div>
  );
}
