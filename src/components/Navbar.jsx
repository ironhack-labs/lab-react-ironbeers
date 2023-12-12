import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
    return (
        <nav className="Navbar">
            <div className="nav-container">
                <Link to="/">
                    <img src={homeIcon} alt="home icon" />
                </Link>
            </div>
        </nav>
)}


export default Navbar;
