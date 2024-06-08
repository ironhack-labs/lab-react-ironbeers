import { NavLink } from "react-router-dom";
import homeIcon from "./../assets/home-icon.png";
function Navbar() {
  return (
    <nav className="text-center py-3" style={{ backgroundColor: "#3FBFF4" }}>
      <NavLink to="/">
        <img src={homeIcon} alt="HOME IconS" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
