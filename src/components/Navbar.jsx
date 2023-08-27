import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
           <nav>
            <Link to="/"><img src="../src/assets/home-icon.png" alt="" /></Link>
            </nav> 
        </div>
    )    
}

export default Navbar;
