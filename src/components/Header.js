import house from "../assets/home.png"

import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="headerDiv">
            <Link to="/">
                <img className="headerIcon" src={house} alt="" />
            </Link>
        </div>
    )
}

export default Header;