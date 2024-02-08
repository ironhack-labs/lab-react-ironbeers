import { Link } from "react-router-dom";
import "./navbar.css";
import icon from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="nav-icon" src={icon}></img>
      </Link>
    </nav>
  );
}

export default Navbar;
