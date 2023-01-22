import { Link } from "react-router-dom"
import "./Header.css"
import homeImg from "../assets/home-button.png"
export default function Header(){


    return(
        <header>
            <Link to="/"><div className="home-img-container"><img src={homeImg} alt="home"/></div></Link>
        </header>
       
    )
}