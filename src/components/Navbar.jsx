import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <Link to="/">
                <img src="src/assets/home-icon.png"/>
            </Link>
        </nav>
    )
}

export default Navbar;
