
import { NavLink } from "react-router-dom";
import homeIcon from '../assets/home-icon.png';


function Navbar() {
    return (
        <nav>
            <NavLink to="/">
                <div style={{ backgroundColor: "blue", width: "120px" }}>
                    <img src={homeIcon} width={40} />
                </div>
            </NavLink>
        </nav>
    )
}

export default Navbar;
