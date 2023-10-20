import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbarClass">
            <Link to="/">Inicio</Link>
        </nav>
    )
}

export default Navbar;
