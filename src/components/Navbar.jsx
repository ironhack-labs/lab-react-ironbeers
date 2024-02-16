import { NavLink } from "react-router-dom";
import navImg from "../assets/home-icon.png";

function Navbar() {
    return (
        <nav className="navbar navbar-primary bg-primary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand mx-auto">
                    <img src={navImg} alt="Home"/>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;