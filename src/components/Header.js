import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";


function Header(){

    return(
        <div className="container nav-class bg-primary">
            
                <nav className="navbar">
                    <div className="container-fluid ">
                        <span className="navbar-text immo"><Link to="/"><AiOutlineHome /></Link></span>
                    </div>
                </nav>
         
        </div>
    )
}

export default Header;