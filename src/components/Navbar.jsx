import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav>
        <NavLink to={"/"}>  <img className="home-icon" src="src/assets/home-icon.svg" alt="" /></NavLink>
        </nav>
    )
}

export default Navbar;
