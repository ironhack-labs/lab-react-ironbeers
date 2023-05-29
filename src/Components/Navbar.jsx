import { NavLink } from "react-router-dom";
import home from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";
function Navbar() {
  return (
    <nav className="app-navbar">
      <ul className="nav-bar-style">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          <img src={home} alt="" />
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
