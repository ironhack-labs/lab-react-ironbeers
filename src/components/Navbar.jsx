import { NavLink } from "react-router-dom";
import "../components/Navbar.css";
import homeicon from '../assets/home-icon.png'



function Navbar() {

    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to={"/"} className="HomePage" > Homepage  </NavLink>
                    <img src={homeicon}></img>
                </li>
            </ul>
        </nav >
    );
}


export default Navbar;
