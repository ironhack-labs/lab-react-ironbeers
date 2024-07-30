import { NavLink } from "react-router-dom";
import homeImage from '../assets/home-icon.png';

function Navbar() {
    return(
     <div className="divHome">
        <NavLink className="nav-link" to="/">
            <img src={homeImage} alt="logo" />
        </NavLink>
     </div>   
    )

    
}

export default Navbar;
