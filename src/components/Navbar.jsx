import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ backgroundColor: 'blue' }}>
            <Link to="/">
                <img src="src/assets/home-icon.png" alt="Home" />
            </Link>
        </nav>
    );
}

export default Navbar;

