import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";



function Navbar() {
    return (
        <nav className='navBar'>
            {/* <Link to="/" element={<HomePage/>}> */}
            <a className="navbar-brand" href="/"><img src="./src/assets/home-icon.png" alt="home-icon" /></a>
            {/* <img src={"./src/assets/home-icon.png"} alt="home-icon"></img> */}
               
            {/* </Link> */}
        </nav>
    )
}

export default Navbar;