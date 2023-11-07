import { Link } from "react-router-dom";
import homeIcon from '/src/assets/home-icon.png';
export default function Navbar(){
    return (
        <nav>
            <Link to="/">
                <img src={homeIcon} />
            </Link>
        </nav>
    )
}

