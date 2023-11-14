import { NavLink } from "react-router-dom";

function Navbar() {
    return (
            <nav className="navbar">
                <NavLink to='/'>
                    <img src="src/assets/home-icon.png" alt="home icon" />
                </NavLink>
            </nav>
    )
}

export default Navbar;
