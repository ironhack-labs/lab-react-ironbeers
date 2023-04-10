import "../App.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to={"/"} className="navbar">
        IronBeer
      </NavLink>
    </div>
  );
};

export default NavBar;
