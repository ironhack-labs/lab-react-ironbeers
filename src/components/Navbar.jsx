import { NavLink } from "react-router-dom";
import Icon from "../assets/home-icon.png"

function Navbar() {

    return (
        <>
            <nav className="nav-bar">
                <NavLink to="/"><img src={Icon} alt="image"/></NavLink>
                
            </nav>
        
        </>
    )
}

export default Navbar;
