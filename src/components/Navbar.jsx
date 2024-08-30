import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'><img src={"../assets/home-icon.png"} /></Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
