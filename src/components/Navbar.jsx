import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
    return(
        <nav className="Navbar">
            <Link to="/" > <img src={homeIcon} alt="" className="home-icon"/> </Link>
        </nav>
    )
}

export default Navbar;
