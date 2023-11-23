import { NavLink } from "react-router-dom"
import home from "./../assets/home-icon.png"

function Navbarr() {

    return (

        <nav className="Navbar" >
            <NavLink to="/"><img src={home} alt="home icon" /></NavLink>
        </nav>
    )
}

export default Navbarr
