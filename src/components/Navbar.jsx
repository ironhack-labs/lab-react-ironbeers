import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
    return(
        <nav className="Navbar">
            <Link to="/">
                <img className="homeIcon" src={homeIcon} alt="homeIcon"></img>
                </Link>
        </nav>
    )
}

export default Navbar;
