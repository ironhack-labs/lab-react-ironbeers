import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return <div className="Header">
        <Link to="/">
        <img src={require("../assets/home.png")} alt="Home"  />
        </Link>
    </div>

}

export default Header