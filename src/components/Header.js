import { Link } from "react-router-dom";
import headerImg from "../assets/home-header.png"

function Header(){
    return(
        <div>
        <Link to="/"><img src={headerImg} alt="header-link"/></Link>   
        </div>
    )
}

export default Header;