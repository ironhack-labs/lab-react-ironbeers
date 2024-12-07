import { Link } from "react-router-dom";
import HomeIcon from "../assets/home-icon.png"

function Navbar() {
    return (
        <>
            <nav className="d-flex py-3 my-1 bg-primary justify-content-center">
                <Link to={"/"}>
                    <img src={HomeIcon} alt="Home Icon" />
                </Link>
            </nav>
        </>
    );
}

export default Navbar;
