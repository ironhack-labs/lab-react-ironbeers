import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";


function Navbar() {
    return (
        <nav className="navbar " style={{ backgroundColor: '#1E6D6D' }}>
            <div className="container d-flex justify-content-center align-items-center">
            <NavLink className="nav-link" to="/">
                <img src={homeIcon} />
            </NavLink>
        </div>
        </nav>

    );
}

export default Navbar;