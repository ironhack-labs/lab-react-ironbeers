import { NavLink } from "react-router-dom";

function Navbar() {
    
    return (
        <nav style={{ background: "royalblue", display: "flex", justifyContent: "center" }}>
            <NavLink to="/">
                <img src="src\assets\home-icon.png" alt="Home" />
            </NavLink>
        </nav>
    );
}

export default Navbar;
