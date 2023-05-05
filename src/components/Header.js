import { Link } from "react-router-dom";
import home from "../assets/home.png";

function Header () {
    return (
        <header>
          <Link to="/"><img src={home} alt="home"></img></Link>
        </header>
    )
}

export default Header;