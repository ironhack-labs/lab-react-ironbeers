import logo from "../assets/home-logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ backgroundColor: "#3DC4FC", padding: "1%" }}>
      <NavLink to="/">
        <img src={logo} alt="home" className="logo" width={"3%"} />
      </NavLink>
    </div>
  );
}

export default Navbar;
