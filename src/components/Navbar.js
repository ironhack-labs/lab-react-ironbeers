import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar(){


    return(
        <div className="navbar">
        <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default Navbar;