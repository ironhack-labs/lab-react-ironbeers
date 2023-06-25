import logo from '../assets/homepage-logo.png'
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div>
        <NavLink to='/'>
            <img src= {logo}/>
        </NavLink>
            
        </div>
    )
}

export default Header;