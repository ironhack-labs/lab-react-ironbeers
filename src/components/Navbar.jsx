import { NavLink } from "react-router-dom";
import NavIcon from "../assets/home-icon.png"
function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-info mb-3">
            <div className="container">
                <NavLink to="/" className="navbar-brand mx-auto">
                    <img src={NavIcon} alt="Nav-icon" />
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
