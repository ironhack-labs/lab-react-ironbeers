import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="header-container">
            <nav className="home-logo">
                <ul>
                    <li><Link to="/">🏠 </Link></li>
                    <li><Link to="/beers">Beers </Link></li>
                    <li> <Link to="/random-beer">Random Beers </Link></li>
                    <li><Link to="/new-beer">New Beer </Link></li>
                </ul>

                </nav>
            </header>
    );
}

export default Header