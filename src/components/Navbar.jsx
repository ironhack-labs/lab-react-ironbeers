import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Link to={"/"} id="nav">
        <img src="../src/assets/home-icon.png" alt="Home button" id="home-button"/>
        </Link>
    )
}

export default Navbar;
