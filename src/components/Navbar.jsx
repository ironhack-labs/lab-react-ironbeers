import { Link } from "react-router-dom";
import navImg from '../assets/home-icon.png';

function Navbar() {
    return (
        <nav className="Navbar">
            <Link to="/">
                <img src={navImg} alt="Home Icon Image"></img>
            </Link>
        </nav>
      );
}

export default Navbar;
