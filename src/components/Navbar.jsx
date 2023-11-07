import {Link} from "react-router-dom";
import "../App.css";
import homeIcon from "../assets/home-icon.png"
function Navbar() {
    return(
        <nav id="navbar">
            <Link to="/beers"><img src={homeIcon} alt="home-icon"/></Link>
        </nav>
    )
}

export default Navbar;
