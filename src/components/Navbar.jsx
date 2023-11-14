import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
            <Link to="/"><img src="src\assets\home-icon.png" /> </Link>
        </nav>
    );
}

export default Navbar;
