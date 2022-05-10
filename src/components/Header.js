import { Link } from "react-router-dom";
import homePageImage from "../assets/homepage.png"

function Header() {
    return (

        <header><Link to="/"><img style={{ width: '100%'}} src={homePageImage} alt='home page' /></Link></header>
    )
}

export default Header;