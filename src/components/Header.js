import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to={`/`}>
        <h1>Home</h1>
      </Link>
    </div>
  );
}
