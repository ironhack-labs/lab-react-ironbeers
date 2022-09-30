import { Link } from "react-router-dom";
import './Navbar.css'
import house from '../../assets/pngfind.com-white-house-logo-png-5898244.png'

export default function Navbar() {
    return (
        <div className="nav">
            <Link to='/'>
                <img src={house} alt="logo" width={35}/>
            </Link>
        </div>
    )
}