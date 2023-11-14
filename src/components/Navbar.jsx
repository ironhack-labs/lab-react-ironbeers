import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";

import Home from '../assets/home-icon.png'
import '../App.css'

function Navbar() {

    return (
        <div className="navbar">
            <Link to="/" element={<HomePage />}>
                <img src={Home} alt="Home button image"/>
            </Link>
        </div>

    )
}

export default Navbar;
