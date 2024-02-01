import { NavLink } from "react-router-dom";
import NavImg from "../assets/home-icon.png";

function Navbar() {
    return (
        <nav className="navbar bg-info">
            <div className="container">
                <NavLink to="/" className="navbar-brand mx-auto" >
                    <img src={NavImg} />
                </NavLink>
            </div>
        </nav>
    )     
}

export default Navbar;
