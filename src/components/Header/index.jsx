import "./header.css"; 
import home from "../../assets/home.png";
import { NavLink } from "react-router-dom";

function Header () {
    return (
        <NavLink to="/">
            <div className="header">
            <img src={home} alt="" style={{width: '50px', padding: '20px'}}/>
            </div>
        </NavLink>
    )
}   

export default Header;