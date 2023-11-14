import { NavLink } from "react-router-dom";
import homeIcon from '../assets/home-icon.png'

function Navbar() {

    return(
        <nav className="navbar">
            <NavLink to="/"><img className="home-icon" src={homeIcon} alt="" /></NavLink>
        </nav>
    )

}

export default Navbar;
