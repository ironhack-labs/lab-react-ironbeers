import { NavLink } from "react-router-dom";
import NavImg from "../assets/navbar.png";

function Navbar() {
  return (
    <div className="nav-section">
      <NavLink to="/">
        <img src={NavImg} alt="Home" />
      </NavLink>
    </div>
  );
}

export default Navbar;
