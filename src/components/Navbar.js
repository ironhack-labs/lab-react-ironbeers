import { NavLink } from "react-router-dom";
import HeaderImg from "../assets/header.png";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <img src={HeaderImg} alt="Home" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
