import HomeIcon from "../assets/home-icon.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">
        <img src={HomeIcon} />
      </NavLink>
    </nav>
  );
}

export default Navbar;
