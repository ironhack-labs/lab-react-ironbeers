import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {


    return (
        <Link to='/'>
            <div className="navbar"><h2>HOME</h2></div>
        </Link>

    )

}

export default NavBar