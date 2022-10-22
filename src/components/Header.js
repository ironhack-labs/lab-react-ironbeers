import homeImage from "../assets/home-icon.png"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <Link to="/">
            <img src={homeImage} alt="homeicon" className="headerIcon"></img>
        </Link>
    )

}