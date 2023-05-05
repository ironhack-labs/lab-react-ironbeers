import { Link } from "react-router-dom"
import HomeIcon from "../assets/home.png"

function NavBar() {
    return (
        <div className="nav-bar">
            <Link to="/" > <img src={HomeIcon} alt="home" height={40} /> </Link>
        </div>
    )
}

export default NavBar