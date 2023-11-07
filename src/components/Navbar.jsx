import {Link} from "react-router-dom";
import "../App.css";
import homeIcon from "../assets/home-icon.png"
import newBeer from "../assets/beer-48.png"
function Navbar() {
    return(
        <nav id="navbar">
            <Link to="/beers"><img src={homeIcon} alt="home-icon"/></Link>
            <Link id="add-new" to="/new-beer"><img id="img-beer-menu"src={newBeer} alt="home-icon"/></Link>
        </nav>
    )
}

export default Navbar;
