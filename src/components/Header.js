import { Routes, Route, Link } from "react-router-dom";
import HomeImage from "../assets/home.png"
import BeerListImage from "../assets/beers.png"

function Header() {
    return (
        <div>
            <Link to={'/'}> <img src={HomeImage} alt="" /> </Link>
        </div>
    );
}

export default Header;