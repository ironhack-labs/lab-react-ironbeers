import { NavLink } from "react-router-dom";
import homeImg from '../assets/Graphicloads-100-Flat-Home.ico';
import '../App.css'


function Navbar() {
    return(
        <nav>
            <NavLink to='/'>
                <img src={homeImg} alt='home-img' />
            </NavLink>
        </nav>
    )
}

export default Navbar;