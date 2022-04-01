import React from "react";
import "./Header.css";
import{Link, useLocation} from "react-router-dom";

export default function Header() {
    const { pathname } = useLocation();
    console.log(pathname);
  return (
    <nav>
      <ul className="list">
        <li className="items">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
