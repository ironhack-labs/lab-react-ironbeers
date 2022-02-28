import {Link} from "react-router-dom"
import homelogo from "../assets/homelogo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"><img src={homelogo} alt="gohome" /></Link>
        </div>
    )
}

export default Navbar