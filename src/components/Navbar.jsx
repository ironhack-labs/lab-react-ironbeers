import homeIcon from "../assets/home-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav-style">
            <Link to='/'>
                <img src={homeIcon} alt="homeIcon" />
            </Link>
        </nav>
    )
}

export default Navbar;
