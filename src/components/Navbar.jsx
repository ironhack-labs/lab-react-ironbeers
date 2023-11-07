import { Link } from "react-router-dom";
import homeIcon from '/src/assets/home-icon.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="centered-image-container">
                <Link to="/">
                    <img src={homeIcon} alt="Home" />
                </Link>
            </div>
        </nav>
    )
}