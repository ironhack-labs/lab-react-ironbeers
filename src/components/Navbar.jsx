import { Link } from "react-router-dom";
import imgSource from "../assets/home-icon.png"

function Navbar() {
    return(
        <nav style={{backgroundColor:"blue", marginBottom: "25px"}}>
            <Link to="/">
                <img src={imgSource} alt="iconlogo"/>
            </Link>
        </nav>
    )
}

export default Navbar;
