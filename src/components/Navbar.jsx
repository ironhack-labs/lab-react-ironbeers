import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png"

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg bg-primary mx-auto" style={{marginBottom: '40px', padding: '20px'}}>
            <div className="container justify-content-center">
                <Link to="/" > <img src={homeIcon} alt="" className="d-inline-block align-top"/> </Link>
            </div>
        </nav>
    )
}

export default Navbar;
