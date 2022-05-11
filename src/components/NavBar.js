import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"  


function NavBar() {
    return (
        <header className="App-header">
            <Link to = "/">
                <img className="homeIcon" src={homeIcon} alt="Home" />
            </Link>
        </header>
    )
}

export default NavBar;