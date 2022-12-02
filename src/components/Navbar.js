import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <NavLink to="/">
                <img 
                    src="./src/assets/navbar.png" 
                    alt="Navigation bar"
                />
            </NavLink> 
        </div>
    )
}

export default Navbar;