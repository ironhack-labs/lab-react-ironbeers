import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <Link  to={"/"} >
                <img src="../src/assets/home-icon.png" alt="home logo" />
            </Link>
        </nav>
    )
}

export default Navbar;
