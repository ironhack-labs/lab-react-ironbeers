import { NavLink } from "react-router-dom";
import Home from "./Home";

function Header() {
  return (
    <NavLink to="/" element={<Home />}>
      <img
        className="header"
        src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
        alt=""
      ></img>
    </NavLink>
  );
}

export default Header;
