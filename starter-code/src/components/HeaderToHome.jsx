import React from "react";
import {Link } from 'react-router-dom'

export default function HeaderToHome() {
  return (
    <nav className="nav">
      <Link exact to="/">
          <img src="../../images/home-header.png" alt="header"></img>
      </Link>
    </nav>
  );
}