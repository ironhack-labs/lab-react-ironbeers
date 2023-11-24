import { NavLink } from "react-router-dom";
import home from './../assets/home-icon.png'

function Navigation() {

    return(
        <nav className="Navbar">
                
                    <NavLink to="/" >
                        <img src={home} alt="" />
                    </NavLink>
                
        </nav>
    )
}

export default Navigation;
