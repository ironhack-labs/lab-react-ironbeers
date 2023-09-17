import { NavLink } from "react-router-dom"
import "../components/CSS/navBar.css";

function Navbar() {
    return (
        <nav className="navbar" >
            <NavLink to={"/"}>
                <img src="src/assets/home-icon.png" alt="" />
            </NavLink>
        </nav>
    )
}

export default Navbar; 
