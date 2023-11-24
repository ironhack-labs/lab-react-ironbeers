import { Link } from 'react-router-dom'
import './Navbar.css'
import homeIcon from "../assets/home-icon.png"

function Navbar() {
    return (
        <nav className="navbar-blue">
            <Link to="/">
                <img src={homeIcon} alt="home icon" />
            </Link>
        </nav>
    )
}

export default Navbar