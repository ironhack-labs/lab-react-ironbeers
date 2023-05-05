import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home.svg";

function Navbar() {
  return (
    <div className="App-header">
      <NavLink to="/">
        <div className="header">
          <img src={homeIcon} alt="Home" />
        </div>
      </NavLink>
    </div>
  );
}

export default Navbar;
