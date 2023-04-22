import houseImg from "../assets/house.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

return (
    <div className="header">

    <nav className="nav-header">

    <Link to = "/">
    <img id = "house-image" src = {houseImg} alt = "house-img"/>
    </Link>


    </nav>

    </div>
)



}

export default Header;