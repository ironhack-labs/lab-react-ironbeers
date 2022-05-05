import { NavLink } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" >Inicio</NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Header;