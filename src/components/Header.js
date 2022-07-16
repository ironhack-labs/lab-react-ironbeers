import {Link} from 'react-router-dom';
// import { Link, NavLink } from "react-router-dom";
import navbg from '../assets/navbg.png';

// const imgUrl = 'https://static1.squarespace.com/static/51781658e4b04474bd0d059c/t/597cd54d3e00bed8e5cf77a0/1650585938167/'
function Header() {
    return (
        <nav className="header-bar">
            <div >
                <Link to='/' ><img height='40px' src={navbg} alt="home" className="header-img" /></Link>
               
            </div>
        </nav>
    );
}

export default Header;