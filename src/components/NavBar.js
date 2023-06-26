import { NavLink } from "react-router-dom"
import navBarImg from "../assets/Navbar.png"
function NavBar (){


    return(
        <nav>
            <NavLink to="/"><img src={navBarImg} className="w-[100vw]"></img></NavLink>
        </nav>
    )

}
export default NavBar