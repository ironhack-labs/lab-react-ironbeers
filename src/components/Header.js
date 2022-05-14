import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="Homepage">
            <NavLink to={"/"}>Home</NavLink>
        </div>
    )
}

export default Header;