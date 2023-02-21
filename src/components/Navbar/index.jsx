import { Link } from "react-router-dom"
import home from "../../assets/home.png"

function Navbar(){
    return(
        <nav className="Navbar">
            <Link to="/">
                <img src={home} alt="home"></img>
            </Link>
        </nav>

    )
}

export default Navbar;