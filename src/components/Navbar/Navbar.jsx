import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {

    return (

        <nav className="Navbar">
            <NavLink to="/">🏠 Ironbeers</NavLink>
        </nav>
    )
}

export default Navbar