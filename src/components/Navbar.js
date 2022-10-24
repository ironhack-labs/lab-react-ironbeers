import { NavLink, Link } from "react-router-dom";
import logoHome from "../assets/logoHome.png"
import "./NavBar.css"



export default function Navbar() {

    return (
        <>
            <div className="Navbar" />
            <Link to="/">
                <img className="home-logo" src={logoHome} alt="example" />
            </Link>
        </>

    )
}