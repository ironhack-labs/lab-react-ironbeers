import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
      <div className="Navbar">
        <NavLink to="/">
            <img src="src/assets/home-icon.png"/>
        </NavLink>
      </div>
    );
}

export default Navbar;
