import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="header-container">
            <nav className="home-logo">
                  <Link to="/">🏠 </Link>
                </nav>
            </header>
    );
}

export default Header