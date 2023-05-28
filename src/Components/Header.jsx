import { Link, NavLink } from "react-router-dom";
import header from "../assets/header.png"

function Header() {
  return (
    <nav className="header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        <img src={header} alt="header"/>
      </NavLink>
    </nav>
  );
}

export default Header;