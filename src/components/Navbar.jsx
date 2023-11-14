import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";

function Navbar() {
return(
    <nav>
        <Link to="/" element={<HomePage/>}>Home</Link>

    </nav>
)

}

export default Navbar;
