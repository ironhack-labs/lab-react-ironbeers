import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3 d-flex justify-content-center">
            <NavLink to='/'>
                <img src="src/assets/home-icon.png" alt="icon" />
            </NavLink>
        </nav>
    )
}

export default Navbar;
