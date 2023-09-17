import { NavLink } from "react-router-dom";
import homeIcon from '../assets/home-icon.png';

function Navbar() {
  return (
      <NavLink to="/">
    <nav className="navbar">
        <img src={homeIcon} alt="Home icon" />
    </nav>
      </NavLink>
  );
}

export default Navbar;
