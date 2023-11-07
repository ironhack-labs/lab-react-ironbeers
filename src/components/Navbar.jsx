import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav-font">
            <Link to="/"> <img src="./src\assets\home-icon.png" /> </Link>
            </div>
        </nav>
    )
}

export default Navbar;
