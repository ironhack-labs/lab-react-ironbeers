import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {





    return (
        <Link to={"/"}>
            <nav className="Navbar">
                <img src="../../../logo.png" />
            </nav>
        </Link>
    )
}


export default Navbar