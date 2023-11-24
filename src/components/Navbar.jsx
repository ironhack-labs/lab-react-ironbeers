import { Link } from "react-router-dom";
import homeIcon from "./../assets/home-icon.png"

const Navbar = () => {
    return (
        <div style={{ backgroundColor: "Black" }}>
            <Link to={"/"}>
                <img src={homeIcon} alt="homeIcon" />
            </Link>
        </div>
    )
}

export default Navbar;
