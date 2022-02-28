import homepageIcon from "../assets/homepage.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <header style={{ backgroundColor: "orange", textAlign: "center", padding: "10px" }} >
                <Link to="/">
                    <img src={homepageIcon} alt="HomePage Icon" style={{ width: '100px' }} />
                </Link>
            </header>
        </div>
    )
}

export default Header;
