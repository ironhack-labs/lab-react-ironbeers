import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav-home" >
            <NavLink to={"/"}>
                <img src="src/assets/home-icon.png" alt="" />
            </NavLink>
        </nav>
    )
}

export default Navbar; 
