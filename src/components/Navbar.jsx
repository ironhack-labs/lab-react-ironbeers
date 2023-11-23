import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
//import "../index.css"

function Navbar() {
return(
    <nav>
        <Link to="/" element={<HomePage/>}>Home</Link>
    </nav>
)

}

export default Navbar;
