import houseIcon from '../assets/home-icon.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container-fluid div-nav-center justify-content-center">
                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">
                                <img src={houseIcon} alt="House Icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;