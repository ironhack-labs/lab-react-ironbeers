import { Link, NavLink, } from "react-router-dom"; Link

function Navbar() {

    return (

        <nav className="navbar navbar-dark bg-primary mb-3 d-flex justify-content-center">

            <Link to='/'>
                <img src="src/assets/home-icon.png" alt="" />
            </Link>


        </nav >

    )



}

export default Navbar;
