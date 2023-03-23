import { Link } from "react-router-dom";
import './Navbar.css';
import house from '../../assets/home-7-xxl.png';

export default function Navbar() {
    return (
        <div className="nav">
            <Link to='/'>
            <img src={house} alt="logo" width={30}/>
            </Link>
        </div>
    )
}