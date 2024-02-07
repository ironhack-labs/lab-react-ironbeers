import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";

function Navbar() {
  return (
    <div>
      <NavLink to="/">
        <img src={homeIcon} alt="" style={{ backgroundColor: "#3DC4FC" }} />
      </NavLink>
    </div>
  );
}

export default Navbar;
